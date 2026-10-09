/* ==========================================================================
   AI-Based Road Damage Detection & Geospatial Mapping System
   Interactive Application Script (GIS Map, YOLO Simulator, Accordion)
   ========================================================================== */

// Simulated Realistic Road Distress Detections around Pune / Lohegaon / ADYPU Region
const roadDetectionsData = [
  {
    id: "RD-2026-001",
    class: "Pothole",
    code: "D40",
    confidence: 0.96,
    severity: "High",
    lat: 18.59854,
    lon: 73.91682,
    road: "ADYPU Campus Entrance Road, Lohegaon",
    bbox: { x: 280, y: 210, w: 180, h: 110 },
    areaPct: "12.8%",
    timestamp: "2026-09-23 10:14:22",
    recommendedAction: "Cold-mix emergency asphalt patch within 48h",
    surfaceCondition: "Bituminous Wear & Water Infiltration"
  },
  {
    id: "RD-2026-002",
    class: "Alligator Crack",
    code: "D20",
    confidence: 0.93,
    severity: "High",
    lat: 18.60120,
    lon: 73.92145,
    road: "Lohegaon-Wagholi Main Link Road",
    bbox: { x: 190, y: 290, w: 340, h: 150 },
    areaPct: "18.4%",
    timestamp: "2026-09-23 10:17:05",
    recommendedAction: "Full-depth asphalt milling and base stabilization",
    surfaceCondition: "Severe Structural Fatigue"
  },
  {
    id: "RD-2026-003",
    class: "Longitudinal Crack",
    code: "D00",
    confidence: 0.88,
    severity: "Medium",
    lat: 18.59540,
    lon: 73.91310,
    road: "Porwal Road Junction, Dhanori",
    bbox: { x: 380, y: 180, w: 60, h: 260 },
    areaPct: "6.2%",
    timestamp: "2026-09-23 10:20:41",
    recommendedAction: "Bituminous crack-seal injection",
    surfaceCondition: "Thermal Joint Shrinkage"
  },
  {
    id: "RD-2026-004",
    class: "Pothole",
    code: "D40",
    confidence: 0.94,
    severity: "High",
    lat: 18.60410,
    lon: 73.92780,
    road: "Wagholi Road Sector 4",
    bbox: { x: 310, y: 240, w: 140, h: 90 },
    areaPct: "9.5%",
    timestamp: "2026-09-23 10:24:19",
    recommendedAction: "Deep pothole leveling & compaction",
    surfaceCondition: "Impact Depression"
  },
  {
    id: "RD-2026-005",
    class: "Transverse Crack",
    code: "D10",
    confidence: 0.85,
    severity: "Low",
    lat: 18.59120,
    lon: 73.90870,
    road: "Dhanori Road Transit Strip",
    bbox: { x: 120, y: 310, w: 420, h: 45 },
    areaPct: "4.8%",
    timestamp: "2026-09-23 10:29:50",
    recommendedAction: "Routine periodic inspection log",
    surfaceCondition: "Sub-base Sub-grade Settlement"
  },
  {
    id: "RD-2026-006",
    class: "Alligator Crack",
    code: "D20",
    confidence: 0.91,
    severity: "High",
    lat: 18.58620,
    lon: 73.92210,
    road: "Viman Nagar Outer Ring",
    bbox: { x: 230, y: 260, w: 280, h: 120 },
    areaPct: "14.1%",
    timestamp: "2026-09-23 10:35:12",
    recommendedAction: "Surface overlay resurfacing required",
    surfaceCondition: "Heavy Axle Traffic Degradation"
  },
  {
    id: "RD-2026-007",
    class: "Pothole",
    code: "D40",
    confidence: 0.89,
    severity: "Medium",
    lat: 18.58190,
    lon: 73.91890,
    road: "Airport Road Corridor",
    bbox: { x: 340, y: 280, w: 120, h: 80 },
    areaPct: "7.1%",
    timestamp: "2026-09-23 10:41:04",
    recommendedAction: "Slurry seal patch treatment",
    surfaceCondition: "Monsoon Pavement Stripping"
  },
  {
    id: "RD-2026-008",
    class: "Longitudinal Crack",
    code: "D00",
    confidence: 0.82,
    severity: "Low",
    lat: 18.57750,
    lon: 73.93120,
    road: "Pune-Nagar Highway Entry Ramp",
    bbox: { x: 410, y: 150, w: 50, h: 290 },
    areaPct: "5.1%",
    timestamp: "2026-09-23 10:48:33",
    recommendedAction: "Monitor next inspection cycle",
    surfaceCondition: "Pavement Joint Shift"
  },
  {
    id: "RD-2026-009",
    class: "Pothole",
    code: "D40",
    confidence: 0.97,
    severity: "High",
    lat: 18.57320,
    lon: 73.93850,
    road: "Pune-Nagar Highway KM 14",
    bbox: { x: 250, y: 220, w: 210, h: 130 },
    areaPct: "15.3%",
    timestamp: "2026-09-23 10:55:18",
    recommendedAction: "URGENT: Hazardous high-speed pothole repair",
    surfaceCondition: "Severe Hydraulic Cavitation"
  },
  {
    id: "RD-2026-010",
    class: "Transverse Crack",
    code: "D10",
    confidence: 0.87,
    severity: "Medium",
    lat: 18.56910,
    lon: 73.94520,
    road: "Kharadi Bypass Arterial",
    bbox: { x: 140, y: 330, w: 380, h: 50 },
    areaPct: "6.9%",
    timestamp: "2026-09-23 11:02:40",
    recommendedAction: "Elastic joint sealant application",
    surfaceCondition: "Thermal Contraction Gap"
  },
  {
    id: "RD-2026-011",
    class: "Alligator Crack",
    code: "D20",
    confidence: 0.89,
    severity: "Medium",
    lat: 18.59980,
    lon: 73.91120,
    road: "Charholi-Lohegaon Connector",
    bbox: { x: 200, y: 270, w: 250, h: 110 },
    areaPct: "10.2%",
    timestamp: "2026-09-23 11:10:05",
    recommendedAction: "Scheduled milling and repaving",
    surfaceCondition: "Sub-base Moisture Weakening"
  },
  {
    id: "RD-2026-012",
    class: "Pothole",
    code: "D40",
    confidence: 0.92,
    severity: "High",
    lat: 18.60850,
    lon: 73.92340,
    road: "Northern ADYPU Boundary Track",
    bbox: { x: 300, y: 230, w: 160, h: 100 },
    areaPct: "11.0%",
    timestamp: "2026-09-23 11:15:22",
    recommendedAction: "Immediate gravel and asphalt filling",
    surfaceCondition: "Surface Breakaway"
  }
];

// Global Leaflet Map Variables
let map = null;
let markersLayer = null;
let currentActiveMarker = null;

// Initialize when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  initSimulator();
  initAccordions();
  updateLiveSummaryStats();
});

/* ==========================================================================
   Leaflet GIS Map Integration
   ========================================================================== */
function initMap() {
  const mapElement = document.getElementById("map-container");
  if (!mapElement) return;

  // Center on Ajeenkya DY Patil University, Lohegaon, Pune
  const defaultCenter = [18.59854, 73.91682];
  map = L.map("map-container", {
    center: defaultCenter,
    zoom: 13,
    zoomControl: true,
    scrollWheelZoom: false
  });

  // Dark Futuristic Tile Layer (CartoDB DarkMatter)
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map);

  // Render initial points
  renderMarkers(roadDetectionsData);

  // Event Listeners for Filters
  document.getElementById("damageFilter").addEventListener("change", applyFilters);
  document.getElementById("severityFilter").addEventListener("change", applyFilters);

  // Route Preset Buttons
  document.getElementById("btnPune").addEventListener("click", () => {
    setActiveRouteButton("btnPune");
    map.flyTo([18.59854, 73.91682], 14, { duration: 1.2 });
  });

  document.getElementById("btnHighway").addEventListener("click", () => {
    setActiveRouteButton("btnHighway");
    map.flyTo([18.57320, 73.93850], 14, { duration: 1.2 });
  });

  document.getElementById("btnResetView").addEventListener("click", () => {
    map.flyTo(defaultCenter, 13, { duration: 1.0 });
    document.getElementById("damageFilter").value = "ALL";
    document.getElementById("severityFilter").value = "ALL";
    applyFilters();
  });
}

function setActiveRouteButton(btnId) {
  document.querySelectorAll(".gis-btn").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById(btnId);
  if (btn) btn.classList.add("active");
}

function getMarkerColor(severity) {
  switch (severity) {
    case "High": return "#ef4444";
    case "Medium": return "#f59e0b";
    case "Low": return "#10b981";
    default: return "#00f0ff";
  }
}

function renderMarkers(items) {
  if (!markersLayer) return;
  markersLayer.clearLayers();

  items.forEach(defect => {
    const color = getMarkerColor(defect.severity);
    
    // Custom pulsing SVG circle marker
    const marker = L.circleMarker([defect.lat, defect.lon], {
      radius: defect.severity === "High" ? 9 : 7,
      fillColor: color,
      color: "#ffffff",
      weight: 2,
      opacity: 0.9,
      fillOpacity: 0.85
    });

    marker.on("click", () => {
      displayDefectDetails(defect);
      map.panTo([defect.lat, defect.lon]);
    });

    marker.bindTooltip(`<strong>${defect.class} (${defect.code})</strong><br>Severity: ${defect.severity} | Conf: ${(defect.confidence * 100).toFixed(0)}%`, {
      className: "custom-leaflet-tooltip"
    });

    markersLayer.addLayer(marker);
  });

  // Update badge count
  const badge = document.getElementById("detectionCountBadge");
  if (badge) badge.innerText = `${items.length} Records`;
}

function applyFilters() {
  const typeFilter = document.getElementById("damageFilter").value;
  const sevFilter = document.getElementById("severityFilter").value;

  const filtered = roadDetectionsData.filter(item => {
    const matchType = (typeFilter === "ALL") || (item.class === typeFilter);
    const matchSev = (sevFilter === "ALL") || (item.severity === sevFilter);
    return matchType && matchSev;
  });

  renderMarkers(filtered);
}

function displayDefectDetails(defect) {
  const detailBox = document.getElementById("selectedDefectCard");
  if (!detailBox) return;

  const sevClass = defect.severity.toLowerCase();

  detailBox.innerHTML = `
    <div class="active-defect-details">
      <div class="defect-badge-row">
        <span class="defect-type-title"><i class="fa-solid fa-triangle-exclamation"></i> ${defect.class}</span>
        <span class="sev-badge ${sevClass}">${defect.severity} Severity</span>
      </div>
      
      <table class="detail-table">
        <tbody>
          <tr><td>Distress Code</td><td>${defect.code} (RDD2022)</td></tr>
          <tr><td>Confidence Score</td><td>${(defect.confidence * 100).toFixed(1)}%</td></tr>
          <tr><td>GPS Latitude</td><td>${defect.lat.toFixed(5)}° N</td></tr>
          <tr><td>GPS Longitude</td><td>${defect.lon.toFixed(5)}° E</td></tr>
          <tr><td>Corridor / Road</td><td>${defect.road}</td></tr>
          <tr><td>Bounding Area</td><td>${defect.areaPct} of lane</td></tr>
          <tr><td>Capture Time</td><td>${defect.timestamp}</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(0,240,255,0.06); border: 1px solid rgba(0,240,255,0.2); padding: 0.6rem; border-radius: 6px; font-size: 0.78rem;">
        <strong style="color: var(--cyan-primary); display:block; margin-bottom: 2px;"><i class="fa-solid fa-wrench"></i> Maintenance Prescription:</strong>
        <span style="color: #e5e7eb;">${defect.recommendedAction}</span>
      </div>
    </div>
  `;
}

function updateLiveSummaryStats() {
  const potholes = roadDetectionsData.filter(d => d.class === "Pothole").length;
  const alligators = roadDetectionsData.filter(d => d.class === "Alligator Crack").length;
  const linears = roadDetectionsData.filter(d => d.class.includes("Crack") && d.class !== "Alligator Crack").length;

  const pEl = document.getElementById("potholeCount");
  const aEl = document.getElementById("alligatorCount");
  const lEl = document.getElementById("linearCount");

  if (pEl) pEl.innerText = `${potholes} incidents`;
  if (aEl) aEl.innerText = `${alligators} incidents`;
  if (lEl) lEl.innerText = `${linears} incidents`;
}

function exportGeoJSON() {
  const geojson = {
    type: "FeatureCollection",
    name: "AI_Road_Damage_Geospatial_Export",
    crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    features: roadDetectionsData.map(d => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [d.lon, d.lat]
      },
      properties: {
        id: d.id,
        class: d.class,
        code: d.code,
        confidence: d.confidence,
        severity: d.severity,
        road: d.road,
        timestamp: d.timestamp,
        recommendation: d.recommendedAction
      }
    }))
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(geojson, null, 2));
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `road_damage_geospatial_${Date.now()}.geojson`);
  dlAnchor.click();
}

function exportCSV() {
  let csv = "ID,Class,Code,Confidence,Severity,Latitude,Longitude,Road,Timestamp,Action\n";
  roadDetectionsData.forEach(d => {
    csv += `"${d.id}","${d.class}","${d.code}",${d.confidence},"${d.severity}",${d.lat},${d.lon},"${d.road}","${d.timestamp}","${d.recommendedAction}"\n`;
  });

  const dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `road_damage_audit_${Date.now()}.csv`);
  dlAnchor.click();
}

/* ==========================================================================
   Interactive YOLO Inference Simulator
   ========================================================================== */
function initSimulator() {
  const canvas = document.getElementById("cvCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const confSlider = document.getElementById("confSlider");
  const iouSlider = document.getElementById("iouSlider");
  const confVal = document.getElementById("confVal");
  const iouVal = document.getElementById("iouVal");

  let currentSample = "pothole";
  let confThreshold = 0.45;
  let iouThreshold = 0.50;

  // Preset sample configurations
  const sampleConfigs = {
    pothole: {
      name: "Severe Pothole",
      classCode: "Pothole (D40)",
      boxes: [
        { label: "Pothole (D40)", conf: 0.96, x: 260, y: 190, w: 260, h: 140, color: "#ef4444", sev: "HIGH" },
        { label: "Longitudinal Crack", conf: 0.68, x: 540, y: 160, w: 90, h: 220, color: "#38bdf8", sev: "LOW" }
      ],
      severityText: "HIGH (Priority 1)",
      latency: "21.4 ms",
      asphaltType: "Wet Asphalt Aggregate"
    },
    alligator: {
      name: "Alligator Cracking",
      classCode: "Alligator Crack (D20)",
      boxes: [
        { label: "Alligator Crack (D20)", conf: 0.94, x: 210, y: 220, w: 380, h: 180, color: "#f59e0b", sev: "HIGH" }
      ],
      severityText: "HIGH (Fatigue Failure)",
      latency: "22.8 ms",
      asphaltType: "Weathered Flexible Pavement"
    },
    longitudinal: {
      name: "Longitudinal Joint",
      classCode: "Longitudinal Crack (D00)",
      boxes: [
        { label: "Longitudinal Crack (D00)", conf: 0.88, x: 390, y: 130, w: 70, h: 290, color: "#38bdf8", sev: "LOW" }
      ],
      severityText: "LOW (Preventive Seal)",
      latency: "19.6 ms",
      asphaltType: "High-Speed Highway Lane"
    },
    healthy: {
      name: "Pristine Asphalt",
      classCode: "None (Healthy)",
      boxes: [],
      severityText: "OPTIMAL (No Action)",
      latency: "18.2 ms",
      asphaltType: "Newly Laid Dense Bituminous Macadam"
    }
  };

  function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Simulated Dashcam Road Perspective
    // Sky
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 200);
    skyGrad.addColorStop(0, "#1e293b");
    skyGrad.addColorStop(1, "#334155");
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, canvas.width, 200);

    // Distant Hills / Trees
    ctx.fillStyle = "#0f172a";
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(150, 160);
    ctx.lineTo(320, 185);
    ctx.lineTo(480, 155);
    ctx.lineTo(650, 180);
    ctx.lineTo(800, 165);
    ctx.lineTo(800, 200);
    ctx.closePath();
    ctx.fill();

    // Road Surface (Dark Asphalt Perspective)
    const roadGrad = ctx.createLinearGradient(0, 200, 0, canvas.height);
    roadGrad.addColorStop(0, "#18212f");
    roadGrad.addColorStop(1, "#0c111a");
    ctx.fillStyle = roadGrad;
    ctx.beginPath();
    ctx.moveTo(320, 200);
    ctx.lineTo(480, 200);
    ctx.lineTo(800, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();

    // Road Markings (Perspective dashed line)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.lineWidth = 4;
    ctx.setLineDash([20, 30]);
    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(400, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Edge lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(330, 200);
    ctx.lineTo(60, canvas.height);
    ctx.moveTo(470, 200);
    ctx.lineTo(740, canvas.height);
    ctx.stroke();

    // Draw defect texture on asphalt based on sample
    drawSimulatedDefectTexture(ctx, currentSample);

    // Filter boxes by confidence slider
    const cfg = sampleConfigs[currentSample];
    const visibleBoxes = cfg.boxes.filter(b => b.conf >= confThreshold);

    // Draw HUD Cyber Bounding Boxes
    visibleBoxes.forEach(b => {
      ctx.save();
      ctx.strokeStyle = b.color;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = b.color;
      ctx.shadowBlur = 12;

      // Outer Box
      ctx.strokeRect(b.x, b.y, b.w, b.h);

      // Cyber Corner Accents
      const corner = 14;
      ctx.lineWidth = 4;
      // Top-Left
      ctx.beginPath();
      ctx.moveTo(b.x, b.y + corner);
      ctx.lineTo(b.x, b.y);
      ctx.lineTo(b.x + corner, b.y);
      ctx.stroke();
      // Top-Right
      ctx.beginPath();
      ctx.moveTo(b.x + b.w - corner, b.y);
      ctx.lineTo(b.x + b.w, b.y);
      ctx.lineTo(b.x + b.w, b.y + corner);
      ctx.stroke();
      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(b.x, b.y + b.h - corner);
      ctx.lineTo(b.x, b.y + b.h);
      ctx.lineTo(b.x + corner, b.y + b.h);
      ctx.stroke();
      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(b.x + b.w - corner, b.y + b.h);
      ctx.lineTo(b.x + b.w, b.y + b.h);
      ctx.lineTo(b.x + b.w, b.y + b.h - corner);
      ctx.stroke();

      // Label Banner
      ctx.fillStyle = "rgba(10, 15, 25, 0.9)";
      ctx.fillRect(b.x, b.y - 28, b.w > 180 ? b.w : 180, 24);

      ctx.fillStyle = b.color;
      ctx.font = "bold 12px 'JetBrains Mono', monospace";
      ctx.fillText(`${b.label} [${(b.conf * 100).toFixed(0)}%]`, b.x + 8, b.y - 12);

      ctx.restore();
    });

    // Update Telemetry Panel
    document.getElementById("telemLatency").innerText = cfg.latency;
    document.getElementById("telemCount").innerText = visibleBoxes.length;
    document.getElementById("telemClass").innerText = visibleBoxes.length > 0 ? visibleBoxes[0].label : "None";
    document.getElementById("telemSeverity").innerText = visibleBoxes.length > 0 ? cfg.severityText : "OPTIMAL (0)";
  }

  function drawSimulatedDefectTexture(context, sampleKey) {
    context.save();
    if (sampleKey === "pothole") {
      // Dark depression
      context.fillStyle = "#05070a";
      context.beginPath();
      context.ellipse(390, 260, 110, 55, 0, 0, Math.PI * 2);
      context.fill();

      // Rough asphalt edges
      context.strokeStyle = "#475569";
      context.lineWidth = 3;
      context.stroke();

      // Water reflection sheen
      const sheenGrad = context.createLinearGradient(350, 240, 420, 280);
      sheenGrad.addColorStop(0, "rgba(56, 189, 248, 0.3)");
      sheenGrad.addColorStop(1, "rgba(0, 0, 0, 0.8)");
      context.fillStyle = sheenGrad;
      context.beginPath();
      context.ellipse(390, 260, 70, 30, -0.2, 0, Math.PI * 2);
      context.fill();
    } else if (sampleKey === "alligator") {
      // Web of fatigue cracks
      context.strokeStyle = "#090d16";
      context.lineWidth = 2.5;
      const startX = 230;
      const startY = 240;
      for (let i = 0; i < 6; i++) {
        context.beginPath();
        context.moveTo(startX + i * 50, startY);
        context.lineTo(startX + i * 50 + 20, startY + 80);
        context.lineTo(startX + i * 50 - 10, startY + 140);
        context.stroke();
      }
      for (let j = 0; j < 4; j++) {
        context.beginPath();
        context.moveTo(startX, startY + j * 35);
        context.lineTo(startX + 320, startY + j * 35 + 15);
        context.stroke();
      }
    } else if (sampleKey === "longitudinal") {
      // Long straight fracture along lane seam
      context.strokeStyle = "#080c14";
      context.lineWidth = 3.5;
      context.beginPath();
      context.moveTo(425, 140);
      context.lineTo(430, 230);
      context.lineTo(422, 340);
      context.lineTo(428, 420);
      context.stroke();
    }
    context.restore();
  }

  // Trigger scan line animation
  function triggerScan() {
    const scanner = document.getElementById("scannerLine");
    if (scanner) {
      scanner.classList.remove("scanning");
      void scanner.offsetWidth; // re-flow
      scanner.classList.add("scanning");
    }
  }

  // Slider events
  confSlider.addEventListener("input", (e) => {
    confThreshold = parseFloat(e.target.value);
    confVal.innerText = confThreshold.toFixed(2);
    drawCanvas();
  });

  iouSlider.addEventListener("input", (e) => {
    iouThreshold = parseFloat(e.target.value);
    iouVal.innerText = iouThreshold.toFixed(2);
    drawCanvas();
  });

  // Preset button click
  document.querySelectorAll(".btn-preset").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-preset").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSample = btn.dataset.sample;
      triggerScan();
      appendLogEntry(currentSample);
      drawCanvas();
    });
  });

  function appendLogEntry(sample) {
    const stream = document.getElementById("logStream");
    if (!stream) return;
    const cfg = sampleConfigs[sample];
    const timestamp = new Date().toTimeString().split(" ")[0];

    const entry = document.createElement("div");
    entry.className = "log-entry match";
    entry.innerText = `[${timestamp}] Testbed switched to '${cfg.name}'. Model inferred ${cfg.boxes.length} distress objects. Latency: ${cfg.latency}`;
    stream.appendChild(entry);
    stream.scrollTop = stream.scrollHeight;
  }

  // Initial draw & scan
  triggerScan();
  drawCanvas();
}

/* ==========================================================================
   Accordion Component
   ========================================================================== */
function initAccordions() {
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // Close all others
      document.querySelectorAll(".accordion-item").forEach(other => {
        other.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}
