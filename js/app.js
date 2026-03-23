// ==========================================
// ⚙️ ENGINE (Logic Only)
// Note: 'wikiData' is already loaded from data.js
// ==========================================

const contentDisplay = document.getElementById("contentDisplay");
const themeToggle = document.getElementById("themeToggle");
let currentDocId = null;
let logsViewMode = localStorage.getItem('logsViewMode') || 'calendar';

// ==========================================
// 📚 STACKED NOTES (Andy Matuschak Style)
// ==========================================

const NOTE_WIDTH = 750;
const NOTE_OFFSET = 40;

let stackedIds = [];
let stackedMode = false;
let isRendering = false;

// Helper: Escape HTML to prevent XSS
function htmlEscape(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// 🚀 INITIALIZATION
// ==========================================

function setTheme(theme) {
  document.body.dataset.theme = theme;
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", theme === "dark");
  }
  localStorage.setItem("theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  // Default to dark mode if no preference has been saved previously
  const initialTheme = saved || "dark";

  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme =
        document.body.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }
}

function init() {
  initTheme();
  initFuse();

  // Safety Check: Did data.js load?
  if (typeof wikiData === "undefined") {
    contentDisplay.innerHTML = `
            <div style="color:#ef4444; padding:20px; background:#fee2e2; border-radius:8px;">
                <h2>⚠️ Error: Data Not Found</h2>
                <p>The <code>wikiData</code> object is missing.</p>
                <p>Please run the python build script to generate it:</p>
                <pre style="background:#000; color:#fff; padding:10px; margin-top:10px; border-radius:4px;">python build.py</pre>
            </div>
        `;
    return;
  }

  // Setup Home Button (Logo Click)
  const headerBrand = document.getElementById("headerBrand");
  if (headerBrand) {
    headerBrand.addEventListener("click", () => {
      renderLandingPage();
    });
  }

  // Setup Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const headerActions = document.getElementById("headerActions");
  const globalHeader = document.querySelector(".global-header");

  if (mobileMenuBtn && headerActions && globalHeader) {
    mobileMenuBtn.addEventListener("click", () => {
      globalHeader.classList.toggle("mobile-menu-open");
      const icon = mobileMenuBtn.querySelector('i');
      if (globalHeader.classList.contains("mobile-menu-open")) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    // Close menu when an action is triggered
    headerActions.addEventListener("click", (e) => {
      if (e.target.closest('button') || e.target.closest('a')) {
        globalHeader.classList.remove("mobile-menu-open");
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Sidebar is removed, navigation is mostly through homepage and search.
  // --- EVENT DELEGATION: MAIN CONTENT ---
  // Handle clicks for Back Buttons, Shelf Cards, and Internal Links
  contentDisplay.addEventListener("click", (e) => {
    // 1. Handle Back Button
    const backLink = e.target.closest(".back-link");
    if (backLink && backLink.dataset.id) {
      e.preventDefault();
      loadContent(backLink.dataset.id);
      return;
    }

    // 2. Handle Shelf Card
    const shelfCard = e.target.closest(".shelf-card");
    if (shelfCard && shelfCard.dataset.id) {
      e.preventDefault();
      loadContent(shelfCard.dataset.id);
      return;
    }

    // 2.5 Handle Backlink Card
    const backlinkCard = e.target.closest(".backlink-card");
    if (backlinkCard && backlinkCard.dataset.id) {
      e.preventDefault();
      addToStack(backlinkCard.dataset.id);
      return;
    }


    // 3. Handle List Item
    const listItem = e.target.closest(".list-item");
    if (listItem && listItem.dataset.id) {
      e.preventDefault();
      loadContent(listItem.dataset.id);
      return;
    }

    // 4. Handle Internal Links (e.g. [Link Text](doc-id))
    const link = e.target.closest("a");
    if (link) {
      const href = link.getAttribute("href");

      // If it's an external link (http/https/mailto) or anchor, let browser handle it
      if (!href || href.match(/^(http|https|mailto:|#)/)) {
        if (href && href.startsWith("http")) link.target = "_blank"; // Force new tab for external
        return;
      }

      // It's likely an internal ID. Try to find it in wikiData.
      // Decode URI to handle spaces (e.g. "Zero%20Trust" -> "Zero Trust")
      const targetId = decodeURIComponent(href);

      if (lookup(targetId)) {
        e.preventDefault();
        addToStack(targetId);
      }
    }
  });


  // --- EVENT DELEGATION: BREADCRUMBS ---
  const breadcrumbs = document.getElementById("breadcrumbs");
  if (breadcrumbs) {
    breadcrumbs.addEventListener("click", (e) => {
      const item = e.target.closest(".breadcrumb-item");
      // Use logical AND to ensure item matches and has dataset
      if (item && item.dataset.action) {
        e.preventDefault();
        const action = item.dataset.action;

        switch (action) {
          case "home":
            renderLandingPage();
            break;
          case "openSection":
            if (item.dataset.key) openSection(item.dataset.key);
            break;
          case "loadContent":
            if (item.dataset.id) loadContent(item.dataset.id);
            break;
        }
      }
    });
  }

  initStackedNotes();
  
  // Only render landing page if NOT loading from a stacked URL
  const stackIds = getStackedIdsFromUrl();
  if (stackIds.length === 0) {
    renderLandingPage();
  }

  // Handle Brand Clicks (Home)
  const brands = document.querySelectorAll(".brand, .mobile-brand");
  brands.forEach((el) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      if (stackedMode) {
        exitStackedMode();
        return;
      }
      renderLandingPage();
    });
  });

  // --- KEYBOARD SHORTCUTS ---
  document.addEventListener('keydown', (e) => {
    // Check for Ctrl+K (Windows/Linux) or Cmd+K (Mac) or '/'
    if (((e.ctrlKey || e.metaKey) && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
      e.preventDefault();
      toggleSearch();
    }

    // Escape: close search overlay first, then top note in stacked mode
    if (e.key === 'Escape') {
      const searchOverlay = document.getElementById('searchOverlay');
      if (searchOverlay && searchOverlay.classList.contains('active')) {
        e.preventDefault();
        toggleSearch();
        return;
      }
      
      if (stackedMode) {
        e.preventDefault();
        removeFromStack(stackedIds.length - 1);
      }
    }
  });
}

// ==========================================
// 📚 STACKED NOTES — URL PARAMS
// ==========================================

function getStackedIdsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.getAll('stackedNotes').map(id => id.toLowerCase());
}

function updateStackedUrl(ids) {
  const params = new URLSearchParams(window.location.search);
  params.delete('stackedNotes');
  ids.forEach(id => params.append('stackedNotes', id));
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
}

// ==========================================
// 📚 STACKED NOTES — RENDERING
// ==========================================

function isSmallScreen() {
  return window.innerWidth <= 800;
}

function renderStackedColumns(ids) {
  if (isRendering) return;
  isRendering = true;

  const container = document.getElementById('noteColumnsContainer');
  const scrollContainer = document.getElementById('noteColumnsScrolling');

  if (!container || !scrollContainer) {
    isRendering = false;
    return;
  }

  container.innerHTML = '';

  ids.forEach((id, index) => {
    const result = lookup(id);
    if (!result) return;

    const { item, parent, rootKey } = result;

    const col = document.createElement('div');
    col.className = 'note-column';
    col.dataset.id = id;
    col.dataset.index = index;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'note-column-close';
    closeBtn.setAttribute('aria-label', `Close ${item.title}`);
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeFromStack(index);
    });

    const contentDiv = document.createElement('div');
    contentDiv.className = 'note-column-content';

    const labelDiv = document.createElement('div');
    labelDiv.className = 'note-obscured-label';
    labelDiv.textContent = item.title;
    labelDiv.addEventListener('click', () => {
      scrollToStackIndex(index);
    });
    labelDiv.addEventListener('mouseenter', () => labelDiv.classList.add('hovered'));
    labelDiv.addEventListener('mouseleave', () => labelDiv.classList.remove('hovered'));

    const inner = document.createElement('div');
    inner.className = 'markdown-body';

    if (parent) {
      const backDiv = document.createElement('div');
      backDiv.className = 'back-link';
      backDiv.dataset.id = parent.id;
      backDiv.innerHTML = `<i class="fas fa-arrow-left"></i> Back to ${parent.title}`;
      inner.appendChild(backDiv);
    }

    if (item.content) {
      const wikiLinkRegex = /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/g;
      const processedContent = item.content.replace(
        wikiLinkRegex,
        (match, wid, _, label) => {
          const linkText = label || wid;
          return `[${linkText}](${wid.trim()})`;
        },
      );
      inner.innerHTML += renderMarkdown(processedContent);
    } else if (item.children && item.children.length > 0) {
      const viewType = item.view || (rootKey === 'overview' ? 'list' : 'shelf');
      if (viewType === 'list') {
        inner.innerHTML += renderList(item);
      } else {
        inner.innerHTML += renderShelf(item);
      }
    }

    if (item.tags && item.tags.length > 0) {
      let tagsHtml = "<div style='margin-top: 30px; border-top: 1px solid var(--border-color); padding-top: 20px;'>";
      item.tags.forEach(tag => {
        tagsHtml += `<span class="tag-pill">#${tag}</span>`;
      });
      tagsHtml += '</div>';
      inner.innerHTML += tagsHtml;
    }

    // Insert Backlinks section
    inner.innerHTML += generateBacklinksHTML(item);

    // Render Math (KaTeX)
    if (window.renderMathInElement) {
      renderMathInElement(inner, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }

    contentDiv.appendChild(inner);
    col.appendChild(closeBtn);
    col.appendChild(contentDiv);
    col.appendChild(labelDiv);

    // Explicitly guarantee over-layering using DOM order mapping to z-index
    col.style.zIndex = index + 5;

    container.appendChild(col);
  });

  requestAnimationFrame(() => {
    updateScrollState();
    scrollToStackIndex(ids.length - 1);
    isRendering = false;
  });
}



function updateScrollState() {
  const scrollContainer = document.getElementById('noteColumnsScrolling');
  const columns = document.querySelectorAll('.note-column');
  if (!scrollContainer || columns.length === 0) return;

  const scrollX = scrollContainer.scrollLeft;

  columns.forEach((col, index) => {
    // Dynamic sliding math for Matuschak overlapping cards:
    // Notes stay in natural flex positions unless they hit the viewport's left edge
    const nativeX = index * NOTE_WIDTH;
    const targetScreenX = scrollX + (index * NOTE_OFFSET);
    const offset = Math.max(targetScreenX - nativeX, 0);

    col.style.transform = `translateX(${offset}px)`;

    const isOverlay = offset > 0;
    col.classList.toggle('overlay', isOverlay);
  });

  // Calculate active index based strictly on visibility (which one takes up the left spine)
  // Or just highlight the last one clicked? 
  // Let activeIndex be the right-most fully visible note
  const activeIndex = Math.min(
    Math.max(0, Math.floor((scrollX + window.innerWidth) / NOTE_WIDTH) - 1),
    columns.length - 1
  );

  columns.forEach((col, index) => {
    const nativeX = index * NOTE_WIDTH;
    const targetScreenX = scrollX + (index * NOTE_OFFSET);

    // It's a "spine" (obscured) if the next note overlaps it significantly
    // If the next note's translation brings its left edge over this note
    let isSpine = false;
    if (index < columns.length - 1) {
      const nextNativeX = (index + 1) * NOTE_WIDTH;
      const nextTargetScreenX = scrollX + ((index + 1) * NOTE_OFFSET);
      const nextActualX = Math.max(nextTargetScreenX, nextNativeX);
      const thisActualX = Math.max(targetScreenX, nativeX);
      if (nextActualX - thisActualX <= NOTE_OFFSET + 10) {
        isSpine = true;
      }
    }
    col.classList.toggle('has-label', isSpine);
    col.classList.toggle('focused', index === stackedIds.length - 1); // Set focus strictly to the end or currently targeted
  });
}

function scrollToStackIndex(index) {
  const scrollContainer = document.getElementById('noteColumnsScrolling');
  if (!scrollContainer) return;

  // Try to anchor the note to the right side of the screen
  const targetScroll = Math.max(0, (index * NOTE_WIDTH) + NOTE_WIDTH - window.innerWidth + 40);

  scrollContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });

  // Highlight the sidebar item for the focused note
  if (stackedIds[index]) {
    const id = stackedIds[index];
    currentDocId = id; // Sync state so "Exit" returns here
    document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));
    const activeNav = document.querySelector(`.nav-item[data-id="${id}"]`);
    if (activeNav) {
      activeNav.classList.add("active");
      activeNav.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

function removeFromStack(fromIndex) {

  if (fromIndex === 0 && stackedIds.length === 1) {
    exitStackedMode();
    return;
  }

  if (fromIndex === stackedIds.length - 1) {
    stackedIds = stackedIds.slice(0, -1);
  } else {
    stackedIds = stackedIds.filter((_, i) => i !== fromIndex);
  }

  updateStackedUrl(stackedIds);
  renderStackedColumns(stackedIds);

  if (stackedIds.length === 0) {
    exitStackedMode();
  }
}

function addToStack(id) {
  const cleanId = id.toLowerCase();
  const result = lookup(cleanId);
  if (!result) return;
  const { item, rootKey } = result;

  const isMdFile = item.content && (!item.children || item.children.length === 0) && rootKey !== "logs";

  if (!isMdFile || isSmallScreen()) {
    if (stackedMode) {
      exitStackedMode();
    }
    loadContent(cleanId);
    return;
  }

  if (stackedIds.includes(cleanId)) {
    const index = stackedIds.indexOf(cleanId);
    scrollToStackIndex(index);
    return;
  }

  if (!stackedMode) {
    stackedIds = [];
    stackedMode = true;
    document.body.classList.add('stacked-mode');
  }

  stackedIds.push(cleanId);
  updateStackedUrl(stackedIds);
  renderStackedColumns(stackedIds);
}

function exitStackedMode() {
  stackedMode = false;
  stackedIds = [];
  document.body.classList.remove('stacked-mode');
  const container = document.getElementById('noteColumnsContainer');
  if (container) container.innerHTML = '';
  const scrollContainer = document.getElementById('noteColumnsScrolling');
  if (scrollContainer) scrollContainer.scrollLeft = 0;
  updateStackedUrl([]);

  if (currentDocId) {
    const result = lookup(currentDocId);
    if (!result) { renderLandingPage(); return; }
    const { item, rootKey } = result;
    const isMdFile = item.content && (!item.children || item.children.length === 0) && rootKey !== "logs";

    if (!isMdFile) {
      loadContent(currentDocId);
    } else {
      renderLandingPage();
    }
  } else {
    renderLandingPage();
  }
}

function initStackedNotes() {
  const scrollContainer = document.getElementById('noteColumnsScrolling');
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', updateScrollState);
  }

  window.addEventListener('resize', () => {
    if (stackedMode) {
      if (isSmallScreen()) {
        const lastId = stackedIds[stackedIds.length - 1];
        exitStackedMode();
        loadContent(lastId);
      } else {
        updateScrollState();
      }
    }
  });

  window.addEventListener('popstate', () => {
    const ids = getStackedIdsFromUrl();
    if (ids.length > 0) {
      stackedIds = ids;
      stackedMode = true;
      document.body.classList.add('stacked-mode');
      renderStackedColumns(stackedIds);
    } else {
      exitStackedMode();
    }
  });

  const ids = getStackedIdsFromUrl();
  if (ids.length > 0) {
    stackedIds = ids;
    stackedMode = true;
    document.body.classList.add('stacked-mode');
    renderStackedColumns(stackedIds);
  }

  // Event delegation for stacked column content (shelf cards, list items, back-links, internal links)
  const noteColumnsScrolling = document.getElementById('noteColumnsScrolling');
  if (noteColumnsScrolling) {
    noteColumnsScrolling.addEventListener('click', (e) => {
      // Back-link
      const backLink = e.target.closest('.back-link');
      if (backLink && backLink.dataset.id) {
        e.preventDefault();
        addToStack(backLink.dataset.id);
        return;
      }

      // Shelf card
      const shelfCard = e.target.closest('.shelf-card');
      if (shelfCard && shelfCard.dataset.id) {
        e.preventDefault();
        addToStack(shelfCard.dataset.id);
        return;
      }

      // Backlink Card
      const backlinkCard = e.target.closest(".backlink-card");
      if (backlinkCard && backlinkCard.dataset.id) {
        e.preventDefault();
        addToStack(backlinkCard.dataset.id);
        return;
      }

      // List item
      const listItem = e.target.closest('.list-item');
      if (listItem && listItem.dataset.id) {
        e.preventDefault();
        addToStack(listItem.dataset.id);
        return;
      }

      // Internal link
      const link = e.target.closest('a');
      if (link) {
        const href = link.getAttribute('href');
        if (!href || href.match(/^(http|https|mailto:|#)/)) {
          if (href && href.startsWith('http')) link.target = '_blank';
          return;
        }
        const targetId = decodeURIComponent(href);
        if (lookup(targetId)) {
          e.preventDefault();
          addToStack(targetId);
        }
      }
    });
  }
}

function renderLandingPage() {
  document
    .querySelectorAll(".nav-item")
    .forEach((el) => el.classList.remove("active"));
  currentDocId = null;

  if (stackedMode) {
    exitStackedMode();
  }

  // Clear Breadcrumbs
  const breadcrumbs = document.getElementById("breadcrumbs");
  if (breadcrumbs) breadcrumbs.innerHTML = "";

  let html = `
        <div class="landing-container">
            <div class="landing-hero staggered-fade">
                <h1>Asif's Second Brain</h1>
                <p class="landing-subtitle">
                    A digital garden of thoughts, curated definitions, and evolving ideas.
                </p>
                <button id="random-overview-btn" class="random-btn">
                    <i class="fas fa-random"></i> Random Overview
                </button>
            </div>
    `;

  Object.keys(wikiData).forEach((key) => {
    const section = wikiData[key];

    // Only render if there are items
    if (section && section.items && section.items.length > 0) {
      html += `
            <div class="landing-section">
                <h2 class="landing-section-title">${section.title}</h2>
                <div class="shelf-grid">
        `;

      section.items.forEach(item => {
        html += `
                <div class="shelf-card" data-id="${item.id}">
                    <i class="${item.icon || "far fa-file-alt"} shelf-icon"></i>
                    <div class="shelf-title">${item.title}</div>
                    <div class="shelf-desc">${item.desc || ""}</div>
                </div>
            `;
      });

      html += `
                </div>
            </div>
        `;
    }
  });

  html += `</div>`;
  contentDisplay.innerHTML = html;
  window.scrollTo(0, 0);

  // Setup random overview button listener
  setTimeout(() => {
    const randomBtn = document.getElementById('random-overview-btn');
    if (randomBtn) {
      randomBtn.addEventListener('click', () => {
        openRandomOverview();
      });
    }
  }, 0);
}

// Open a random overview document seeded by the current date
function openRandomOverview() {
  const overviewSection = wikiData['overview'];
  if (!overviewSection || !overviewSection.items || overviewSection.items.length === 0) return;

  // Flatten overview items
  let allOverviewItems = [];

  function recurseItems(items) {
    items.forEach(item => {
      // If the item has children, it's a folder, so recurse
      if (item.children && item.children.length > 0) {
        recurseItems(item.children);
      } else if (!item.children) {
        // If it doesn't have children, it's a document
        allOverviewItems.push(item);
      }
    });
  }

  recurseItems(overviewSection.items);

  if (allOverviewItems.length === 0) return;

  // Use a truly random approach combined with time to allow for a new document every click
  const now = new Date();
  const timeSeed = now.getTime(); // Get milliseconds for high variance

  // Create a combined string of date, time, and a random number to hash
  const seedString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${timeSeed}-${Math.random()}`;

  // Simple hash function for the seed string
  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    const char = seedString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  // Use absolute value to avoid negative index
  const seed = Math.abs(hash);
  const randomIndex = seed % allOverviewItems.length;

  const randomItem = allOverviewItems[randomIndex];
  if (randomItem) {
    loadContent(randomItem.id);
  }
}

// Open the section in sidebar and load its first item
// Exposed to global scope for the onclick above
window.openSection = function (key) {
  const section = wikiData[key];
  if (section && section.items && section.items.length > 0) {
    loadContent(section.items[0].id);
  }
};

// ==========================================
// 📖 CONTENT LOADING (The "Router")
// ==========================================

// Helper: Find item and its parent recursively in a list
function findItemAndParent(targetId, items, parent = null) {
  for (let item of items) {
    // Found it?
    if (item.id === targetId) return { item, parent };

    // Has children? Search them.
    if (item.children) {
      const found = findItemAndParent(targetId, item.children, item);
      if (found) return found;
    }
  }
  return null;
}

// Helper: Search across all Sections in wikiData
function lookup(id) {
  if (!id) return null;
  id = id.toLowerCase();
  for (let key of Object.keys(wikiData)) {
    if (wikiData[key].items) {
      const found = findItemAndParent(id, wikiData[key].items);
      if (found) return { ...found, rootKey: key };
    }
  }
  return null;
}

// ==========================================
// 🍞 BREADCRUMBS
// ==========================================

function getBreadcrumbPath(targetId) {
  for (let key of Object.keys(wikiData)) {
    const section = wikiData[key];
    const path = findPathInItems(targetId, section.items);
    if (path) {
      // Prepend Section Info
      return [{ title: section.title, isSection: true, key: key }, ...path];
    }
  }
  return [];
}

function findPathInItems(targetId, items) {
  for (let item of items) {
    if (item.id === targetId) return [item];
    if (item.children) {
      const childPath = findPathInItems(targetId, item.children);
      if (childPath) return [item, ...childPath];
    }
  }
  return null;
}

function renderBreadcrumbs(path) {
  const container = document.getElementById("breadcrumbs");
  if (!container) return;

  // Start with Home
  // Security Fix: Removed onclick, added data-action="home"
  let html = `
        <div class="breadcrumb-item" data-action="home">
            <i class="fas fa-home"></i>
        </div>
    `;

  path.forEach((step, index) => {
    // Separator
    html += `<span class="breadcrumb-separator">/</span>`;

    const isLast = index === path.length - 1;
    const activeClass = isLast ? "active" : "";

    // Determine data attributes
    let dataAttributes = "";
    if (!isLast) {
      if (step.isSection) {
        // Section: Action = openSection, Key = step.key
        dataAttributes = `data-action="openSection" data-key="${step.key}"`;
      } else {
        // Content: Action = loadContent, Id = step.id
        dataAttributes = `data-action="loadContent" data-id="${step.id}"`;
      }
    }

    html += `
            <div class="breadcrumb-item ${activeClass}" ${dataAttributes}>
                ${step.title}
            </div>
        `;
  });

  container.innerHTML = html;
}

// Helper: Render Markdown with Math Protection
function renderMarkdown(text) {
  if (!text) return "";

  // 0. Convert Obsidian Links [[Link|Label]] or [[Link]] to standard Markdown Links
  text = text.replace(/\[\[([^|\]\n]+)\|([^\]\n]+)\]\]/g, (match, target, label) => `[${label}](${encodeURI(target.trim())})`);
  text = text.replace(/\[\[([^\]\n]+)\]\]/g, (match, target) => `[${target.trim()}](${encodeURI(target.trim())})`);

  // 1. Protect Math ($...$ and $$...$$)
  const mathBlocks = [];
  const protectedText = text.replace(/(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g, (match) => {
    mathBlocks.push(match);
    return `MATHBLOCKPLACEHOLDER${mathBlocks.length - 1}`;
  });

  // 2. Render Markdown
  let html = marked.parse(protectedText, {
    breaks: true,
    html: false, // Security: Disable raw HTML
  });

  // 3. Restore Math
  mathBlocks.forEach((block, index) => {
    html = html.replace(`MATHBLOCKPLACEHOLDER${index}`, block);
  });

  return html;
}

// Helper: Render Backlinks (Linked Mentions) Section
function generateBacklinksHTML(item) {
  if (!item.backlinks || item.backlinks.length === 0) return "";

  let html = `<div class="backlinks-section" style="margin-top: 40px; border-top: 2px solid var(--border-color); padding-top: 20px;">`;
  html += `<h3 style="font-size: 1.1rem; margin-bottom: 12px; color: var(--text-secondary);">Linked Mentions</h3>`;
  html += `<div class="backlinks-list" style="display: flex; flex-direction: column; gap: 8px;">`;

  item.backlinks.forEach(linkId => {
    const target = lookup(linkId);
    if (target && target.item) {
      // Create a small card for the backlink (Escaping title/snippet for XSS)
      const snippet = (target.item.content || "").replace(/[#*`_\[\]()]/g, '').substring(0, 100);
      html += `
        <div class="backlink-card" data-id="${target.item.id}">
          <div class="backlink-title">${htmlEscape(target.item.title)}</div>
          <div class="backlink-snippet">${htmlEscape(snippet)}...</div>
        </div>
      `;
    }
  });

  html += `</div></div>`;
  return html;
}

function loadContent(id) {
  const result = lookup(id);
  if (!result) return;

  const { item, parent, rootKey } = result;

  const isMdFile = item.content && (!item.children || item.children.length === 0) && rootKey !== "logs";
  if (isMdFile && !isSmallScreen()) {
    addToStack(id);
    return;
  }

  // --- 0. BREADCRUMBS ---
  const path = getBreadcrumbPath(id);
  renderBreadcrumbs(path);

  // --- 1. HIGHLIGHT SIDEBAR ---
  document
    .querySelectorAll(".nav-item")
    .forEach((el) => el.classList.remove("active"));

  // Try finding exact match first (Search Mode or Top Level)
  let activeNav = document.querySelector(`.nav-item[data-id="${item.id}"]`);

  // If not found, try finding the parent (Normal Mode - Deep Navigation)
  if (!activeNav && parent) {
    activeNav = document.querySelector(`.nav-item[data-id="${parent.id}"]`);
  }

  if (activeNav) activeNav.classList.add("active");

  // --- 2. BUILD HTML CONTENT ---
  let htmlContent = "";

  // A. Back Button (Only if deep inside a topic)
  if (parent) {
    // Security Fix: Removed inline onclick, added data-id
    htmlContent += `
            <div class="back-link" data-id="${parent.id}">
                <i class="fas fa-arrow-left"></i> Back to ${parent.title}
            </div>
        `;
  }



  // C. Shelf vs List vs Article Logic
  if (item.children && item.children.length > 0) {
    // Check if we are in 'overview' (Topics) -> Use List View
    // Otherwise -> Use Shelf View
    // Priority: Custom View (from _meta.json) -> Root Key Default
    const viewType = item.view || (rootKey === "overview" ? "list" : "shelf");

    if (viewType === "list") {
      htmlContent += renderList(item);
    } else {
      // Check if we are in logs root (Year view) -> Render Calendar/List Toggle
      if (rootKey === "logs") {
        htmlContent += renderLogs(item);
      } else {
        htmlContent += renderShelf(item);
      }
    }
  } else if (item.content) {

    // If we are in 'logs', use the custom Interactive Renderer
    if (rootKey === "logs") {
      htmlContent += renderLogEntry(item);
    } else {
      // --- WIKILINK SUPPORT ---
      // Convert [[id]] to [id](id) and [[id|Label]] to [Label](id)
      const wikiLinkRegex = /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/g;
      const processedContent = item.content.replace(
        wikiLinkRegex,
        (match, id, _, label) => {
          const linkText = label || id;
          return `[${linkText}](${id.trim()})`;
        },
      );

      htmlContent += renderMarkdown(processedContent);
    }

  } else {
    htmlContent += `<p style="color:var(--text-secondary)">No content available.</p>`;
  }

  // B. Tags (If available) - Moved to Bottom
  if (item.tags && item.tags.length > 0) {
    htmlContent += "<div style='margin-top: 30px; border-top: 1px solid var(--border-color); padding-top: 20px;'>";
    item.tags.forEach((tag) => {
      htmlContent += `<span class="tag-pill">#${tag}</span>`;
    });
    htmlContent += "</div>";
  }

  // C. Backlinks (Linked Mentions)
  htmlContent += generateBacklinksHTML(item);

  // --- 3. RENDER ---
  contentDisplay.innerHTML = htmlContent;

  // --- 4. RENDER MATH (KaTeX) ---
  if (window.renderMathInElement) {
    renderMathInElement(contentDisplay, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }

  currentDocId = id;
  window.scrollTo(0, 0);
}

function renderLogs(item) {
  // Add global setter function if not already present
  if (typeof window.toggleLogsView === "undefined") {
    window.toggleLogsView = function () {
      logsViewMode = logsViewMode === 'calendar' ? 'list' : 'calendar';
      localStorage.setItem('logsViewMode', logsViewMode);
      if (currentDocId) {
        loadContent(currentDocId);
      }
    };
  }

  let html = `
        <div class="shelf-header" style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:20px;">
            <div>
              <h1 style="margin-bottom:0.5rem">${item.title} Logs</h1>
              <p style="color:var(--text-secondary)">Select a date to view entries.</p>
            </div>
            
            <div class="view-toggle">
              <button class="view-toggle-btn ${logsViewMode === 'calendar' ? 'active' : ''}" onclick="if(logsViewMode !== 'calendar') toggleLogsView()" aria-label="Calendar View" title="Calendar View">
                <i class="fas fa-calendar-alt"></i>
              </button>
              <button class="view-toggle-btn ${logsViewMode === 'list' ? 'active' : ''}" onclick="if(logsViewMode !== 'list') toggleLogsView()" aria-label="List View" title="List View">
                <i class="fas fa-list"></i>
              </button>
            </div>
        </div>
    `;

  if (logsViewMode === 'list') {
    html += renderLogList(item);
  } else {
    html += renderCalendar(item);
  }

  return html;
}

function renderLogList(item) {
  let html = `<div class="log-list-container">`;

  if (item.children && item.children.length > 0) {
    // Sort items by date descending
    const sortedChildren = [...item.children].sort((a, b) => b.id.localeCompare(a.id));

    sortedChildren.forEach((child) => {
      // Format: YYYY-MM-DD -> Month Day, Year
      const parts = child.id.split('-');
      let formattedDate = child.id;
      if (parts.length === 3) {
        const year = parseInt(parts[0]);
        const monthIndex = parseInt(parts[1]) - 1;
        const day = parseInt(parts[2]);
        const dateObj = new Date(year, monthIndex, day);
        const monthName = dateObj.toLocaleString('default', { month: 'long' });

        const getSuffix = (d) => {
          if (d > 3 && d < 21) return 'th';
          switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
          }
        };

        // Calculate ISO Week Number
        const currentThursday = new Date(dateObj.getTime() + (3 - ((dateObj.getDay() + 6) % 7)) * 86400000);
        const yearOfThursday = currentThursday.getFullYear();
        const firstThursday = new Date(yearOfThursday, 0, 4);
        firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);
        const diffMs = currentThursday.getTime() - firstThursday.getTime();
        const weekNumber = Math.floor(diffMs / 604800000) + 1;

        formattedDate = `${monthName} ${day}${getSuffix(day)}, ${year} - Week ${weekNumber}`;
      }

      html += `
          <div class="list-item" data-id="${child.id}">
              <div class="list-content">
                <div class="list-title" style="font-size: 1.1rem; font-weight: 600;">${formattedDate}</div>
              </div>
              <i class="fas fa-chevron-right list-arrow"></i>
          </div>
      `;
    });
  } else {
    html += `<p style="color:var(--text-secondary)">No logs available for this year.</p>`;
  }

  html += `</div>`;
  return html;
}

function renderCalendar(item) {
  const year = parseInt(item.title) || new Date().getFullYear();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Collect all available log dates (IDs) into a Set for fast lookup
  const availableDates = new Set();
  if (item.children) {
    item.children.forEach(child => {
      // IDs are expected to be 'YYYY-MM-DD'
      availableDates.add(child.id);
    });
  }

  let html = `
        <div class="calendar-year-container">
    `;

  months.forEach((monthName, monthIndex) => {
    html += `
            <div class="calendar-month">
                <div class="calendar-month-title">${monthName}</div>
                <div class="calendar-grid">
                    <div class="calendar-day-header">S</div>
                    <div class="calendar-day-header">M</div>
                    <div class="calendar-day-header">T</div>
                    <div class="calendar-day-header">W</div>
                    <div class="calendar-day-header">T</div>
                    <div class="calendar-day-header">F</div>
                    <div class="calendar-day-header">S</div>
        `;

    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const firstDayIndex = new Date(year, monthIndex, 1).getDay(); // 0 = Sunday

    // Empty cells before first day
    for (let i = 0; i < firstDayIndex; i++) {
      html += `<div class="calendar-day empty"></div>`;
    }

    // Days
    for (let day = 1; day <= daysInMonth; day++) {
      // Format: YYYY-MM-DD (ensure double digits)
      const mm = String(monthIndex + 1).padStart(2, '0');
      const dd = String(day).padStart(2, '0');
      const dateId = `${year}-${mm}-${dd}`;

      const hasNews = availableDates.has(dateId);
      const extraClass = hasNews ? 'has-news' : '';
      const dataAttr = hasNews ? `data-id="${dateId}"` : '';

      // Only add click handler (via data-id) if it has news
      // If we want empty days to do nothing, we just don't add data-id? 
      // Our event delegation checks for data-id. YES.

      html += `
                <div class="calendar-day ${extraClass} shelf-card" ${dataAttr} style="border-radius: var(--radius); padding:0;">
                    <span>${day}</span>
                    ${hasNews ? '<div class="calendar-marker"></div>' : ''}
                </div>
            `;
    }

    html += `</div></div>`; // Close grid and month
  });

  html += `</div>`; // Close container
  return html;
}

function renderShelf(item) {
  let html = `
        <div class="shelf-header">
            <h1 style="margin-bottom:0.5rem">${item.title}</h1>
            <p style="color:var(--text-secondary)">${item.desc || "Select an item below."}</p>
        </div>
        <div class="shelf-grid">
    `;

  item.children.forEach((child) => {
    // Security Fix: Removed inline onclick, added data-id
    html += `
            <div class="shelf-card" data-id="${child.id}">
                <i class="${child.icon || "far fa-file-alt"} shelf-icon"></i>
                <div class="shelf-title">${child.title}</div>
                <div class="shelf-desc">${child.desc || ""}</div>
            </div>
        `;
  });
  html += `</div>`;
  return html;
}

function renderList(item) {
  let html = `
          <div class="shelf-header">
              <h1 style="margin-bottom:0.5rem">${item.title}</h1>
              <p style="color:var(--text-secondary)">${item.desc || "Select a concept below."}</p>
          </div>
          <div class="list-container">
      `;

  item.children.forEach((child) => {
    html += `
              <div class="list-item" data-id="${child.id}">
                  <div class="list-content">
                    <div class="list-title">${child.title}</div>
                    <div class="list-desc">${child.desc || ""}</div>
                  </div>
                  <i class="fas fa-chevron-right list-arrow"></i>
              </div>
          `;
  });
  html += `</div>`;
  return html;
}

function renderLogEntry(item) {
  let html = `
          <div class="shelf-header">
              <h1 style="margin-bottom:0.5rem">${item.title}</h1>
              <p style="color:var(--text-secondary)">${item.desc || "Latest updates and logs."}</p>
          </div>
          <div class="log-container">
      `;

  const content = item.content || "";

  // Custom Parser: Split by H1 (#), H2 (##) or H3 (###) headers
  // We use a regex with capturing group to keep the delimiter and the rest
  // Regex: start of line, 1, 2 or 3 hashes, space, rest of line

  const chunks = content.split(/(^#{1,3}\s+.*$)/gm);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i].trim();
    if (!chunk) continue;

    // Check if it's a header line
    if (chunk.startsWith('#')) {
      const headerLevel = chunk.startsWith('### ') ? 3 : (chunk.startsWith('## ') ? 2 : 1);
      const title = chunk.replace(/^#+\s+/, '').trim();

      // Get the immediately following content body (next index)
      let bodyRaw = "";
      // Check if the next chunk exists and is not another header
      if (i + 1 < chunks.length && !chunks[i + 1].trim().startsWith('#')) {
        bodyRaw = chunks[i + 1].trim();
        i++; // Skip next iteration as we consumed it
      }

      if (headerLevel === 1) {
        // --- H1 (Page Title) ---
        // IGNORE THE TITLE (it is already rendered by the shelf-header)
        // But render the body (intro text) if any
        if (bodyRaw) {
          html += renderMarkdown(bodyRaw);
        }

      } else if (headerLevel === 2) {
        // --- RENDER SECTION HEADER ---
        html += `<h2 class="log-section-title">${title}</h2>`;

        // If body exists after H2 (intro text), render it
        if (bodyRaw) {
          html += renderMarkdown(bodyRaw);
        }

      } else {
        // --- RENDER NEWS CARD (H3) ---

        // 1. Extract Image (first image tag in body)
        let image = null;
        let date = null;
        let bodyClean = bodyRaw;

        const imgMatch = bodyRaw.match(/!\[(.*?)\]\((.*?)\)/);
        if (imgMatch) {
          image = imgMatch[2];
          // Remove image from body
          bodyClean = bodyRaw.replace(imgMatch[0], '').trim();
        }

        // 2. Extract Date (Date: YYYY-MM-DD)
        // Case insensitive match for line starting with Date:
        const dateMatch = bodyClean.match(/^Date:\s*(.*)$/im);
        if (dateMatch) {
          const rawDate = dateMatch[1].trim();
          // Parse and format: YYYY-MM-DD -> Month Dayth, Year
          // We split manually to avoid timezone issues with new Date(string)
          const parts = rawDate.split('-');
          if (parts.length === 3) {
            const year = parseInt(parts[0]);
            const monthIndex = parseInt(parts[1]) - 1;
            const day = parseInt(parts[2]);

            // Get Month Name
            const dateObj = new Date(year, monthIndex, day);
            const monthName = dateObj.toLocaleString('default', { month: 'long' });

            // Get Ordinal Suffix
            const getSuffix = (d) => {
              if (d > 3 && d < 21) return 'th';
              switch (d % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
              }
            };

            date = `${monthName} ${day}${getSuffix(day)}, ${year}`;
          } else {
            // Fallback if not standard format
            date = rawDate;
          }

          // Remove date line from body
          bodyClean = bodyClean.replace(dateMatch[0], '').trim();
        }

        // 3. Fix WikiLinks
        const wikiLinkRegex = /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/g;
        const processedBody = bodyClean.replace(
          wikiLinkRegex,
          (match, id, _, label) => {
            const linkText = label || id;
            return `[${linkText}](${id.trim()})`;
          }
        );

        const renderedBody = renderMarkdown(processedBody);
        const imageStyle = image ? `background-image: url('${image}')` : '';

        html += `
                <div class="news-container ${image ? '' : 'no-image'}">
                    <div class="news-header-box" onclick="toggleNewsBody(this)">
                        ${image ? `<div class="news-thumb-small" style="${imageStyle}"></div>` : ''}
                        <div class="news-title-wrapper">
                            <div class="news-title-text">${title}</div>
                            ${date ? `<div class="news-date-badge">${date}</div>` : ''}
                        </div>
                        <i class="fas fa-chevron-down news-toggle-icon"></i>
                    </div>
                    <div class="news-body-content" style="display:none;">
                        ${renderedBody}
                    </div>
                </div>
            `;
      }
    } else {
      // Content appearing before any header? Render it normally
      if (i === 0) {
        html += renderMarkdown(chunk);
      }
    }
  }

  html += `</div>`;
  // Tags are handled globally in loadContent

  return html;
}

// Global toggle function
window.toggleNewsBody = function (header) {
  const container = header.closest('.news-container');
  const body = container.querySelector('.news-body-content');
  const icon = container.querySelector('.news-toggle-icon');

  if (body.style.display === 'none') {
    body.style.display = 'block';
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
    container.classList.add('expanded');
  } else {
    body.style.display = 'none';
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
    container.classList.remove('expanded');
  }
};



// ==========================================
// 🔍 DEEP SEARCH ENGINE
// ==========================================

// ==========================================
// 🔍 FUSE.JS SEARCH ENGINE
// ==========================================
let fuse;

function initFuse() {
  if (typeof Fuse === "undefined") {
    console.error("Fuse.js not loaded!");
    return;
  }

  // Flatten the wikiData for Fuse indexing
  const flatData = [];

  function flatten(items) {
    items.forEach((item) => {
      // Add item to index
      flatData.push({
        id: item.id,
        title: item.title,
        desc: item.desc || "",
        content: item.content || "",
        tags: item.tags || [],
        icon: item.icon,
      });

      // Recurse
      if (item.children) {
        flatten(item.children);
      }
    });
  }

  // Start flattening from root categories
  Object.keys(wikiData).forEach((key) => {
    if (wikiData[key].items) {
      flatten(wikiData[key].items);
    }
  });

  // Configure Fuse
  const options = {
    includeScore: true,
    threshold: 0.3, // 0.0 = Perfect match, 1.0 = Match anything. 0.3 is good for typos.
    keys: [
      { name: "title", weight: 3 }, // Title is most important
      { name: "tags", weight: 2 },  // Tags are second
      { name: "desc", weight: 1 },  // Description is third
      { name: "content", weight: 0.5 }, // Content is least important (noise)
    ],
  };

  fuse = new Fuse(flatData, options);
}

function toggleSearch() {
  const overlay = document.getElementById("searchOverlay");
  overlay.classList.toggle("active");
  const input = document.getElementById("mobileSearchInput");
  const resultsContainer = document.getElementById("mobileSearchResults");

  if (overlay.classList.contains("active")) {
    input.focus();
    if (!input.value.trim()) {
      resultsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search empty-state-icon"></i>
                <div class="empty-state-title">Search Second Brain</div>
                <div class="empty-state-desc">Find notes, definitions, and concepts instantly. Press 'Ctrl+K' anywhere to focus.</div>
            </div>`;
    }
  } else {
    input.value = "";
    resultsContainer.innerHTML = "";
  }
}

function handleMobileSearch(query) {
  const term = query.toLowerCase().trim();
  const resultsContainer = document.getElementById("mobileSearchResults");

  if (term.length < 2) {
    resultsContainer.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-search empty-state-icon"></i>
            <div class="empty-state-title">Search Second Brain</div>
            <div class="empty-state-desc">Find notes, definitions, and concepts instantly. Press '/' anywhere to focus.</div>
        </div>`;
    return;
  }

  // Execute Fuse Search
  const fuseResults = fuse.search(term);

  resultsContainer.innerHTML = "";

  if (fuseResults.length === 0) {
    resultsContainer.innerHTML = `
        <div class="empty-state" style="padding: 40px 20px;">
            <i class="fas fa-ghost empty-state-icon"></i>
            <div class="empty-state-title">No results found</div>
            <div class="empty-state-desc">Try searching for a different keyword or check your spelling.</div>
        </div>`;
    return;
  }

  fuseResults.forEach((result) => {
    const item = result.item;
    const resultItem = document.createElement("div");
    resultItem.className = "nav-item"; // Reuse existing style
    resultItem.style.padding = "10px 0";
    resultItem.style.borderBottom = "1px solid var(--border-color)";
    resultItem.innerHTML = `
            <i class="${item.icon || "far fa-file"}"></i>
            <span>${item.title}</span>
        `;
    resultItem.addEventListener("click", () => {
      loadContent(item.id);
      toggleSearch(); // Close overlay on selection
    });
    resultsContainer.appendChild(resultItem);
  });
}

// ==========================================
// 🎈 HOVER LINK PREVIEWS
// ==========================================
const previewPopover = document.createElement('div');
previewPopover.id = 'link-preview-popover';
document.body.appendChild(previewPopover);

let previewTimeout = null;
let currentPreviewLink = null;

function hidePreview() {
  clearTimeout(previewTimeout);
  previewPopover.classList.remove('visible');
  currentPreviewLink = null;
}

document.body.addEventListener('mouseover', (e) => {
  const link = e.target.closest('a');
  if (!link) {
    // If we are moving NOT over a link and NOT over the popover, we can safely hide
    if (currentPreviewLink && !previewPopover.contains(e.target)) {
      // However, mouseout usually handles this. Mouseover is mostly for showing.
    }
    return;
  }

  const href = link.getAttribute('href');
  if (!href || href.match(/^(http|https|mailto:|#)/)) return;

  const targetId = decodeURIComponent(href);
  const targetData = lookup(targetId);

  if (targetData && targetData.item) {
    // If we're already showing this link, don't restart
    if (currentPreviewLink === link) return;

    // If we're over a DIFFERENT link, hide the old one first
    if (currentPreviewLink) hidePreview();

    currentPreviewLink = link;

    const snippet = (targetData.item.content || "").replace(/[#*`_\[\]()]/g, '').substring(0, 200).trim();

    previewPopover.innerHTML = `
      <div class="popover-title">${htmlEscape(targetData.item.title)}</div>
      <div class="popover-snippet">${htmlEscape(snippet)}...</div>
    `;

    previewPopover.classList.add('visible');

    const rect = link.getBoundingClientRect();
    let popoverTop = rect.top - previewPopover.offsetHeight - 10;

    if (popoverTop < 10) {
      popoverTop = rect.bottom + 10;
    }

    let popoverLeft = rect.left;
    if (popoverLeft + previewPopover.offsetWidth > window.innerWidth - 20) {
      popoverLeft = window.innerWidth - previewPopover.offsetWidth - 20;
    }

    previewPopover.style.top = `${popoverTop}px`;
    previewPopover.style.left = `${popoverLeft}px`;
  }
}, true);

document.body.addEventListener('mouseout', (e) => {
  if (!currentPreviewLink) return;

  // Check if the mouse is truly leaving the current link
  const goingTo = e.relatedTarget;
  if (!goingTo || (!currentPreviewLink.contains(goingTo) && !previewPopover.contains(goingTo))) {
    hidePreview();
  }
}, true);

// Start the Engine
init();
