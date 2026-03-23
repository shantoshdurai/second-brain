// --- GRAPH VIEW LOGIC ---
let graphNetwork = null;
const categoryColors = {
  ai: "#22C55E",           // Emerald 500
  cybersecurity: "#16A34A", // Emerald 600
  general: "#86EFAC",      // Emerald 300
  insurance: "#059669",    // Emerald 600 (Dark)
  philosophy: "#4ADE80",   // Emerald 400
  psychology: "#10B981",   // Emerald 500
  science: "#BBF7D0",      // Emerald 200
  devops: "#065F46"        // Emerald 800
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
    renderGraph();
  } else if (graphNetwork) {
    graphNetwork.destroy();
    graphNetwork = null;
  }
}

function renderGraph() {
  const container = document.getElementById("graphContainer");
  const nodes = [];
  const edges = [];
  const seenNodes = new Set();
  const connectionCounts = {};

  // 1. Pre-process to count connections for scaling
  function countConnections(items) {
    if (!items) return;
    items.forEach(item => {
      if (!item.id || seenNodes.has(item.id)) return;
      seenNodes.add(item.id);
      connectionCounts[item.id] = (connectionCounts[item.id] || 0);

      if (item.children) {
        item.children.forEach(child => {
          connectionCounts[item.id]++;
          connectionCounts[child.id] = (connectionCounts[child.id] || 0) + 1;
          countConnections([child]);
        });
      }

      if (item.links) {
        item.links.forEach(linkId => {
          if (lookup(linkId)) {
            connectionCounts[item.id]++;
            connectionCounts[linkId] = (connectionCounts[linkId] || 0) + 1;
          }
        });
      }
    });
  }

  seenNodes.clear();
  Object.keys(wikiData).forEach(key => {
    if (key === 'logs' || key === 'library') return; // Skip logs and library
    if (wikiData[key] && wikiData[key].items) {
      countConnections(wikiData[key].items);
    }
  });

  // 2. Build items with scaling
  seenNodes.clear();
  const style = getComputedStyle(document.body);
  const labelColor = style.getPropertyValue('--graph-label').trim() || "rgba(255,255,255,0.6)";
  const focusedLabelColor = style.getPropertyValue('--graph-label-focused').trim() || "rgba(255,255,255,1)";

  function processItems(items) {
    if (!items) return;
    items.forEach(item => {
      if (!item.id || seenNodes.has(item.id)) return;
      seenNodes.add(item.id);

      let color = "#94a3b8a0";
      if (item.group && categoryColors[item.group.toLowerCase()]) {
        color = categoryColors[item.group.toLowerCase()];
      }

      // Obsidian-style Scaling: Base size 4, scaling by sqrt of connections
      const size = 6 + Math.sqrt(connectionCounts[item.id] || 0) * 4;

      nodes.push({
        id: item.id,
        label: item.title,
        category: item.group,
        size: size,
        color: {
          background: color,
          border: color,
          highlight: { background: color, border: color },
          hover: { background: color, border: color }
        },
        font: {
          color: labelColor,
          size: 11,
          strokeWidth: 0,
          face: "DM Sans"
        },
        title: item.desc || item.title
      });

      if (item.children) {
        item.children.forEach(child => {
          edges.push({
            id: `child-${item.id}-${child.id}`,
            from: item.id,
            to: child.id,
            color: { opacity: 0.05, color: "#22C55E" },
            width: 1,
            dashes: true
          });
          processItems([child]);
        });
      }

      if (item.links) {
        item.links.forEach(linkId => {
          if (lookup(linkId)) {
            edges.push({
              id: `link-${item.id}-${linkId}`,
              from: item.id,
              to: linkId,
              color: { opacity: 0.08, color: "#22C55E" },
              width: 1
            });
          }
        });
      }
    });
  }

  Object.keys(wikiData).forEach(key => {
    if (key === 'logs' || key === 'library') return; // Skip logs and library
    if (wikiData[key] && wikiData[key].items) {
      processItems(wikiData[key].items);
    }
  });

  // Create a fast lookup map for original edge opacities
  const edgeOpacityMap = {};
  edges.forEach(e => {
    edgeOpacityMap[e.id] = e.color.opacity;
  });

  const data = {
    nodes: new vis.DataSet(nodes),
    edges: new vis.DataSet(edges)
  };

  const options = {
    nodes: {
      shape: "dot",
      borderWidth: 0,
      shadow: { enabled: true, color: "rgba(0,0,0,0.2)", size: 4 },
      font: { multi: true }
    },
    edges: {
      arrows: { to: { enabled: true, scaleFactor: 0.3 } },
      smooth: { type: "continuous" }
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 90,
        springConstant: 0.08
      },
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: {
        enabled: true,
        iterations: 1000,
        updateInterval: 100
      }
    },
    interaction: {
      hover: true,
      tooltipDelay: 300,
      zoomView: true,
      dragView: true
    }
  };

  if (graphNetwork) {
    graphNetwork.destroy();
  }
  graphNetwork = new vis.Network(container, data, options);

  // Stop physics once stabilized to prevent oscillation/floating
  graphNetwork.on("stabilized", function () {
    graphNetwork.setOptions({ physics: { enabled: false } });
  });

  // --- NEIGHBOR HIGHLIGHTING ---
  graphNetwork.on("hoverNode", function (params) {
    const hoveredNodeId = params.node;
    const neighbors = graphNetwork.getConnectedNodes(hoveredNodeId);
    const neighborEdges = graphNetwork.getConnectedEdges(hoveredNodeId);

    // Fade all nodes except neighbors and self
    const nodeUpdate = nodes.map(n => ({
      id: n.id,
      opacity: (neighbors.includes(n.id) || n.id === hoveredNodeId) ? 1 : 0.1,
      font: { color: (neighbors.includes(n.id) || n.id === hoveredNodeId) ? focusedLabelColor : "rgba(255,255,255,0)" }
    }));
    data.nodes.update(nodeUpdate);

    // Fade all edges except connected ones
    const edgeUpdate = data.edges.getIds().map(id => ({
      id: id,
      color: { opacity: neighborEdges.includes(id) ? 0.6 : 0.02 }
    }));
    data.edges.update(edgeUpdate);
  });

  graphNetwork.on("blurNode", function () {
    // Restore everything
    data.nodes.update(nodes.map(n => ({
      id: n.id,
      opacity: 1,
      font: { color: labelColor }
    })));
    data.edges.update(data.edges.getIds().map((id) => ({
      id: id,
      color: { opacity: edgeOpacityMap[id] || 0.1 }
    })));
  });

  // --- ZOOM-AWARE LABELS ---
  graphNetwork.on("zoom", function () {
    const scale = graphNetwork.getScale();
    if (scale < 0.6) {
      data.nodes.update(nodes.map(n => ({ id: n.id, font: { size: 0 } })));
    } else {
      data.nodes.update(nodes.map(n => ({ id: n.id, font: { size: 10 } })));
    }
  });

  graphNetwork.on("click", function (params) {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      toggleGraphView();
      loadContent(nodeId);
    }
  });

  graphNetwork.on("stabilizationIterationsDone", function () {
    graphNetwork.fit();
  });

  setupLegend(nodes, data, labelColor, focusedLabelColor);
}

function setupLegend(nodes, data, labelColor, focusedLabelColor) {
  const legendContainer = document.getElementById("graphLegend");
  if (!legendContainer) return;
  legendContainer.innerHTML = "";

  const activeGroups = [...new Set(nodes.map(n => n.category).filter(Boolean))];
  let activeFilter = null;

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
      const isRemoving = activeFilter === group;
      activeFilter = isRemoving ? null : group;

      // Update UI
      document.querySelectorAll(".legend-item").forEach(i => i.classList.remove("active"));
      if (!isRemoving) item.classList.add("active");

      // Update Graph
      if (!activeFilter) {
        // Restore all
        data.nodes.update(nodes.map(n => ({
          id: n.id,
          opacity: 1,
          font: { color: labelColor }
        })));
        data.edges.update(data.edges.getIds().map(id => ({
          id: id,
          color: { opacity: 0.08 }
        })));
      } else {
        // Focus category
        data.nodes.update(nodes.map(n => ({
          id: n.id,
          opacity: n.category === activeFilter ? 1 : 0.05,
          font: { color: n.category === activeFilter ? focusedLabelColor : "rgba(255,255,255,0)" }
        })));
        data.edges.update(data.edges.getIds().map(id => {
          const edge = data.edges.get(id);
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          const isRelevant = fromNode?.category === activeFilter || toNode?.category === activeFilter;
          return {
            id: id,
            color: { opacity: isRelevant ? 0.4 : 0.01 }
          };
        }));
      }
    };

    legendContainer.appendChild(item);
  });
}
