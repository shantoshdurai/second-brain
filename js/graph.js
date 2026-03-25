// --- GRAPH VIEW LOGIC ---
let cosmographInstance = null;
const categoryColors = {
    ai: "#22C55E",           // Emerald
    cybersecurity: "#E11D48", // Rose/Red
    philosophy: "#9333EA",   // Purple
    psychology: "#0EA5E9",   // Sky Blue
    science: "#F59E0B",      // Amber
    insurance: "#64748B",    // Slate
    general: "#10B981",      // Teal/Emerald
    devops: "#F97316"        // Orange
};

function toggleGraphView() {
    const mainContent = document.querySelector(".main-content");
    const graphContainer = document.getElementById("graphContainer");
    const toggleBtn = document.querySelector(".graph-toggle-btn");

    mainContent.classList.toggle("graph-mode");
    graphContainer.classList.toggle("active");
    if (toggleBtn) {
        toggleBtn.classList.toggle("active");
    }

    if (graphContainer.classList.contains("active")) {
        document.body.classList.remove("stacked-mode");
        renderGraph();
    } else if (cosmographInstance) {
        // We can keep it or destroy it. Keeping it might be faster for next time.
        // But if we want to reset physics/position, we might want to interact with it.
    }
}

function renderGraph() {
    const container = document.getElementById("graphContainer");
    if (!container) return;

    // 1. Data Processing
    const nodes = [];
    const links = [];
    const seenNodes = new Set();
    const connectionCounts = {};

    // Helper to count connections and build nodes/links
    function processItems(items, parentId = null) {
        if (!items) return;
        items.forEach(item => {
            if (!item.id) return;

            if (!seenNodes.has(item.id)) {
                seenNodes.add(item.id);
                connectionCounts[item.id] = (connectionCounts[item.id] || 0);

                let color = "#22C55E";
                if (item.group && categoryColors[item.group.toLowerCase()]) {
                    color = categoryColors[item.group.toLowerCase()];
                }

                nodes.push({
                    id: item.id,
                    label: item.title,
                    category: item.group || "general",
                    color: color,
                    desc: item.desc || item.title
                });
            }

            if (parentId) {
                links.push({ source: parentId, target: item.id, type: 'child' });
                connectionCounts[parentId]++;
                connectionCounts[item.id]++;
            }

            if (item.children) {
                processItems(item.children, item.id);
            }

            if (item.links) {
                item.links.forEach(linkId => {
                    const cleanLinkId = linkId.toLowerCase();
                    // We'll add links later in a second pass to ensure both nodes exist
                });
            }
        });
    }

    // First pass: Build nodes and child links
    Object.keys(wikiData).forEach(key => {
        if (key === 'logs' || key === 'library') return;
        if (wikiData[key] && wikiData[key].items) {
            processItems(wikiData[key].items);
        }
    });

    // Second pass: Cross links
    seenNodes.clear(); // Use for another purpose or just reuse
    function addCrossLinks(items) {
        if (!items) return;
        items.forEach(item => {
            if (item.id && item.links) {
                item.links.forEach(linkId => {
                    const cleanLinkId = linkId.toLowerCase();
                    if (lookup(cleanLinkId)) {
                        links.push({ source: item.id, target: cleanLinkId, type: 'link' });
                        connectionCounts[item.id] = (connectionCounts[item.id] || 0) + 1;
                        connectionCounts[cleanLinkId] = (connectionCounts[cleanLinkId] || 0) + 1;
                    }
                });
            }
            if (item.children) addCrossLinks(item.children);
        });
    }
    Object.keys(wikiData).forEach(key => {
        if (key === 'logs' || key === 'library') return;
        if (wikiData[key] && wikiData[key].items) {
            addCrossLinks(wikiData[key].items);
        }
    });

    // Subtle size scaling — capped to keep the graph clean
    nodes.forEach(node => {
        node.size = 3 + Math.min(Math.sqrt(connectionCounts[node.id] || 0) * 1.5, 6);
    });

    // 2. D3 Initialization
    const style = getComputedStyle(document.body);
    const labelColor = style.getPropertyValue('--graph-label').trim() || "#96A396";
    const bgColor = style.getPropertyValue('--bg-graph').trim() || "#E5E7E5";

    // Clear previous D3 SVG if exists
    container.innerHTML = "";

    // UI Controls (Close Button & Legend)
    let controls = document.getElementById("graphControls");
    if (!controls) {
        controls = document.createElement("div");
        controls.id = "graphControls";
        controls.className = "graph-controls";
        controls.innerHTML = `
            <button id="closeGraph" class="close-graph-btn"><i class="fas fa-times"></i> Close Graph</button>
        `;
        container.appendChild(controls);
        document.getElementById("closeGraph").onclick = (e) => {
            e.stopPropagation();
            toggleGraphView();
        };

        // Create legend container separately so CSS positioning works relative to full screen
        let legendContainer = document.createElement("div");
        legendContainer.id = "graphLegend";
        legendContainer.className = "graph-legend";
        container.appendChild(legendContainer);
    }

    // Prepare container dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const svg = d3.select(container)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; display: block; cursor: grab;");

    const g = svg.append("g");

    // Standard zoomed behavior — labels fade out when zoomed out
    const LABEL_SHOW_THRESHOLD = 0.75;
    const zoom = d3.zoom()
        .scaleExtent([0.1, 4])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
            const k = event.transform.k;
            // Smoothly fade labels in/out around the threshold
            const labelOpacity = k < LABEL_SHOW_THRESHOLD
                ? Math.max(0, (k - (LABEL_SHOW_THRESHOLD - 0.2)) / 0.2)
                : 1;
            g.selectAll("text.graph-node-label").style("opacity", labelOpacity);
        });

    svg.call(zoom);

    // Clean, spacious circular layout
    const radius = Math.min(width, height) * 0.35;
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(80).strength(0.4))
        .force("charge", d3.forceManyBody().strength(-600))
        .force("center", d3.forceCenter(width / 2, height / 2).strength(0.1))
        .force("radial", d3.forceRadial(radius, width / 2, height / 2).strength(0.12))
        .force("collide", d3.forceCollide().radius(d => d.size + 10).iterations(2));

    // Links — thin and subtle
    const link = g.append("g")
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", "var(--background-modifier-border-focus, #444)")
        .attr("stroke-opacity", 0.25)
        .attr("stroke-width", 0.75);

    // Nodes
    const node = g.append("g")
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", d => d.size)
        .attr("fill", d => d.color)
        .style("cursor", "pointer")
        .call(drag(simulation));

    // Labels — uniform small size, only shown on hover
    const label = g.append("g")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .text(d => d.label)
        .attr("class", "graph-node-label")
        .attr("font-size", 11)
        .attr("fill", "var(--text-primary)")
        .attr("dx", d => d.size + 5)
        .attr("dy", 4)
        .style("pointer-events", "none")
        .style("user-select", "none");

    // Tick update
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        label
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });

    // 3. Interactions
    // Neighbor Map for fast lookup
    const adjacentNodes = {};
    links.forEach(l => {
        const s = l.source.id || l.source;
        const t = l.target.id || l.target;
        if (!adjacentNodes[s]) adjacentNodes[s] = new Set();
        if (!adjacentNodes[t]) adjacentNodes[t] = new Set();
        adjacentNodes[s].add(t);
        adjacentNodes[t].add(s);
    });

    // Hide labels by default — only show on hover
    label.attr("opacity", 0);

    node.on("mouseover", function (event, d) {
        const neighbors = adjacentNodes[d.id] || new Set();
        neighbors.add(d.id);

        node.attr("opacity", n => neighbors.has(n.id) ? 1 : 0.15);
        link
            .attr("stroke", l => (l.source.id === d.id || l.target.id === d.id) ? "var(--text-accent, #7852ee)" : "var(--background-modifier-border-focus, #555)")
            .attr("stroke-opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 0.9 : 0.1)
            .attr("stroke-width", l => (l.source.id === d.id || l.target.id === d.id) ? 2 : 1);
        label
            .attr("opacity", n => neighbors.has(n.id) ? 1 : 0)
            .attr("font-weight", n => n.id === d.id ? "bold" : "normal");
    });

    node.on("mouseout", function () {
        // Reset or use active filter if any
        applyLegendFilter();
    });

    node.on("click", function (event, d) {
        if (event.defaultPrevented) return; // mapped to drag
        toggleGraphView();
        if (typeof loadContent === 'function') {
            loadContent(d.id);
        }
    });

    let activeFilter = null;

    function applyLegendFilter() {
        if (!activeFilter) {
            node.attr("opacity", 1).style("display", "block");
            link.attr("stroke-opacity", 0.4).attr("stroke-width", 1)
                .attr("stroke", "var(--background-modifier-border-focus, #555)")
                .style("display", "block");
            // Always hide labels on reset — only shown on hover
            label.attr("opacity", 0).style("display", "block");
        } else {
            node.attr("opacity", 1)
                .style("display", n => n.category === activeFilter ? "block" : "none");
            link.style("display", l => {
                return (l.source.category === activeFilter && l.target.category === activeFilter) ? "block" : "none";
            });
            label.attr("opacity", 0).style("display", n => n.category === activeFilter ? "block" : "none");
        }
    }

    window.d3GraphFilter = (group) => {
        if (activeFilter === group) {
            activeFilter = null;
        } else {
            activeFilter = group;
        }
        applyLegendFilter();
        return activeFilter;
    };

    // 4. Legend
    setupLegend(nodes, labelColor);

    // Initial Zoom to fit
    setTimeout(() => {
        const bounds = g.node().getBBox();
        const fullWidth = width;
        const fullHeight = height;
        const midX = bounds.x + bounds.width / 2;
        const midY = bounds.y + bounds.height / 2;
        if (bounds.width === 0 || bounds.height === 0) return; // nothing to fit

        const scale = 0.85 / Math.max(bounds.width / fullWidth, bounds.height / fullHeight);
        const translate = [fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY];

        svg.transition().duration(750).call(
            zoom.transform,
            d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
        );
    }, 500);
}

// Drag behavior generator
function drag(simulation) {
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
}

function setupLegend(nodes, labelColor) {
    const legendContainer = document.getElementById("graphLegend");
    if (!legendContainer) return;
    legendContainer.innerHTML = "";

    const activeGroups = [...new Set(nodes.map(n => n.category).filter(Boolean))];

    activeGroups.forEach(group => {
        const item = document.createElement("div");
        item.className = "legend-item";
        const color = categoryColors[group.toLowerCase()] || "#94a3b8";

        item.innerHTML = `
            <div class="legend-color" style="background: ${color}"></div>
            <span>${group.toUpperCase()}</span>
        `;

        item.onclick = (e) => {
            e.stopPropagation();
            const activeFilter = window.d3GraphFilter(group);

            // Update UI
            document.querySelectorAll(".legend-item").forEach(i => i.classList.remove("active"));
            if (activeFilter) item.classList.add("active");
        };

        legendContainer.appendChild(item);
    });
}
