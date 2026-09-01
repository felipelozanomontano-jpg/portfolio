const globeEl = document.getElementById("globe-viz");

const beenThere = [
  { name: "Miami, FL", lat: 25.7617, lng: -80.1918, type: "been" },
  { name: "Orlando, FL", lat: 28.5383, lng: -81.3792, type: "been" },
  { name: "Gainesville, FL", lat: 29.6516, lng: -82.3248, type: "been" },
  { name: "Key West, FL", lat: 24.5551, lng: -81.78, type: "been" },
  { name: "San Francisco, CA", lat: 37.7749, lng: -122.4194, type: "been" },
  { name: "Los Angeles, CA", lat: 34.0522, lng: -118.2437, type: "been" },
  { name: "Seattle, WA", lat: 47.6062, lng: -122.3321, type: "been" },
  { name: "Las Vegas, NV", lat: 36.1699, lng: -115.1398, type: "been" },
  { name: "Phoenix, AZ", lat: 33.4484, lng: -112.074, type: "been" },
  { name: "Honolulu, HI", lat: 21.3069, lng: -157.8583, type: "been" },
  { name: "Maui, HI", lat: 20.8783, lng: -156.6825, type: "been" },
  { name: "Chicago, IL", lat: 41.8781, lng: -87.6298, type: "been" },
  { name: "West Lafayette, IN", lat: 40.4259, lng: -86.9081, type: "been" },
  { name: "Gatlinburg, TN", lat: 35.7143, lng: -83.5102, type: "been" },
  { name: "Atlanta, GA", lat: 33.749, lng: -84.388, type: "been" },
  { name: "Charlotte, NC", lat: 35.2271, lng: -80.8431, type: "been" },
  { name: "Virginia", lat: 37.5407, lng: -77.436, type: "been" },
  { name: "New York City, NY", lat: 40.7128, lng: -74.006, type: "been" },
  { name: "Boston, MA", lat: 42.3601, lng: -71.0589, type: "been" },
  { name: "Cancun, Mexico", lat: 21.1619, lng: -86.8515, type: "been" },
  { name: "Tokyo, Japan", lat: 35.6762, lng: 139.6503, type: "been" },
  { name: "Calgary, Canada", lat: 51.0447, lng: -114.0719, type: "been" },
  { name: "Vancouver, Canada", lat: 49.2827, lng: -123.1207, type: "been" },
  { name: "Bogota, Colombia", lat: 4.711, lng: -74.0721, type: "been" },
  { name: "Cali, Colombia", lat: 3.4516, lng: -76.532, type: "been" },
  { name: "Pereira, Colombia", lat: 4.8087, lng: -75.6906, type: "been" },
  { name: "Medellin, Colombia", lat: 6.2442, lng: -75.5812, type: "been" },
  { name: "Kyoto, Japan", lat: 35.0116, lng: 135.7681, type: "been" },
  { name: "Osaka, Japan", lat: 34.6937, lng: 135.5023, type: "been" },
  { name: "Moscow, Russia", lat: 55.7558, lng: 37.6173, type: "been" },
  { name: "Saint Petersburg, Russia", lat: 59.9343, lng: 30.3351, type: "been" },
  { name: "Athens, Greece", lat: 37.9838, lng: 23.7275, type: "been" },
  { name: "Corfu, Greece", lat: 39.6243, lng: 19.9217, type: "been" },
  { name: "Rome, Italy", lat: 41.9028, lng: 12.4964, type: "been" },
  { name: "Madrid, Spain", lat: 40.4168, lng: -3.7038, type: "been" },
  { name: "Pisa, Italy", lat: 43.7228, lng: 10.4017, type: "been" },
  { name: "Paris, France", lat: 48.8566, lng: 2.3522, type: "been" },
  { name: "Normandy, France", lat: 49.1829, lng: -0.3707, type: "been" },
  { name: "Brussels, Belgium", lat: 50.8503, lng: 4.3517, type: "been" },
  { name: "Amsterdam, Netherlands", lat: 52.3676, lng: 4.9041, type: "been" },
  { name: "Munich, Germany", lat: 48.1351, lng: 11.582, type: "been" },
  { name: "Nuremberg, Germany", lat: 49.4521, lng: 11.0767, type: "been" },
  { name: "Berlin, Germany", lat: 52.52, lng: 13.405, type: "been" },
  { name: "Krakow, Poland", lat: 50.0647, lng: 19.945, type: "been" },
  { name: "Zurich, Switzerland", lat: 47.3769, lng: 8.5417, type: "been" },
  { name: "Istanbul, Turkey", lat: 41.0082, lng: 28.9784, type: "been" },
  { name: "London, UK", lat: 51.5072, lng: -0.1276, type: "been" },
].map((d) => ({ ...d, tilt: Math.random() * 16 - 8 }));

const bucketList = [
  { name: "Anchorage, AK", lat: 61.2181, lng: -149.9003, type: "bucket" },
  { name: "Rio de Janeiro, Brazil", lat: -22.9068, lng: -43.1729, type: "bucket" },
  { name: "Sao Paulo, Brazil", lat: -23.5505, lng: -46.6333, type: "bucket" },
  { name: "Buenos Aires, Argentina", lat: -34.6037, lng: -58.3816, type: "bucket" },
  { name: "Lima, Peru", lat: -12.0464, lng: -77.0428, type: "bucket" },
  { name: "Morocco", lat: 31.6295, lng: -7.9811, type: "bucket" },
  { name: "Egypt", lat: 30.0444, lng: 31.2357, type: "bucket" },
  { name: "Cape Town, South Africa", lat: -33.9249, lng: 18.4241, type: "bucket" },
  { name: "Mecca, Saudi Arabia", lat: 21.3891, lng: 39.8579, type: "bucket" },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, type: "bucket" },
  { name: "Qatar", lat: 25.285, lng: 51.531, type: "bucket" },
  { name: "Salzburg, Austria", lat: 47.8095, lng: 13.055, type: "bucket" },
  { name: "Iceland", lat: 64.1466, lng: -21.9426, type: "bucket" },
  { name: "Sweden", lat: 59.3293, lng: 18.0686, type: "bucket" },
  { name: "Norway", lat: 59.9139, lng: 10.7522, type: "bucket" },
  { name: "Denmark", lat: 55.6761, lng: 12.5683, type: "bucket" },
  { name: "Beijing, China", lat: 39.9042, lng: 116.4074, type: "bucket" },
  { name: "Shanghai, China", lat: 31.2304, lng: 121.4737, type: "bucket" },
  { name: "Chongqing, China", lat: 29.4316, lng: 106.9123, type: "bucket" },
  { name: "Seoul, South Korea", lat: 37.5665, lng: 126.978, type: "bucket" },
  { name: "Taiwan", lat: 25.033, lng: 121.5654, type: "bucket" },
  { name: "Vietnam", lat: 21.0278, lng: 105.8342, type: "bucket" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, type: "bucket" },
  { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093, type: "bucket" },
  { name: "New Zealand", lat: -36.8485, lng: 174.7633, type: "bucket" },
];

const markers = [...beenThere, ...bucketList];

const canvas = document.createElement("canvas");
globeEl.appendChild(canvas);
const ctx = canvas.getContext("2d");

const projection = d3.geoOrthographic().clipAngle(90);
const path = d3.geoPath(projection, ctx);
const graticule = d3.geoGraticule();

let width = 0;
let height = 0;
let baseScale = 0;
let rotation = [0, -12, 0];
let dragging = false;
let countriesData = null;

function resize() {
  width = globeEl.clientWidth;
  height = globeEl.clientHeight;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  baseScale = Math.min(width, height) / 2 - 10;
  projection.scale(baseScale).translate([width / 2, height / 2]);
}

function drawCheckmark(x, y, tiltDeg) {
  const s = 15;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((tiltDeg * Math.PI) / 180);
  ctx.translate(-s / 2, -s / 2);
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.fillRect(1.5, 1.5, s, s);
  ctx.fillStyle = "#1f7a37";
  ctx.fillRect(0, 0, s, s);
  ctx.fillStyle = "#2e9e4c";
  ctx.fillRect(1, 1, s - 2, s - 2);
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2.4;
  ctx.lineCap = "square";
  ctx.lineJoin = "miter";
  ctx.beginPath();
  ctx.moveTo(s * 0.2, s * 0.55);
  ctx.lineTo(s * 0.42, s * 0.75);
  ctx.lineTo(s * 0.82, s * 0.25);
  ctx.stroke();
  ctx.restore();
}

function drawPin(x, y) {
  const w = 13;
  const h = 17;
  ctx.save();
  ctx.translate(x - w / 2, y - h);
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.beginPath();
  ctx.ellipse(w / 2 + 1.5, h + 1.5, w * 0.28, w * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#e02424";
  ctx.beginPath();
  ctx.moveTo(w / 2, h);
  ctx.bezierCurveTo(w * 0.15, h * 0.72, 0, h * 0.5, 0, h * 0.32);
  ctx.arc(w / 2, h * 0.32, w / 2, Math.PI, 0, false);
  ctx.bezierCurveTo(w, h * 0.5, w * 0.85, h * 0.72, w / 2, h);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#0a0e1f";
  ctx.beginPath();
  ctx.arc(w / 2, h * 0.34, w * 0.16, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function draw() {
  if (!countriesData) return;
  ctx.clearRect(0, 0, width, height);
  projection.rotate(rotation);

  ctx.beginPath();
  path(graticule());
  ctx.strokeStyle = "rgba(122,132,150,0.35)";
  ctx.lineWidth = 0.5;
  ctx.stroke();

  ctx.beginPath();
  countriesData.features.forEach((f) => path(f));
  ctx.fillStyle = "rgba(180,190,205,0.55)";
  ctx.fill();
  ctx.strokeStyle = "#7a8496";
  ctx.lineWidth = 0.6;
  ctx.stroke();

  const center = [-rotation[0], -rotation[1]];
  markers.forEach((d) => {
    const point = [d.lng, d.lat];
    if (d3.geoDistance(point, center) > Math.PI / 2) return;
    const [x, y] = projection(point);
    if (d.type === "bucket") {
      drawPin(x, y);
    } else {
      drawCheckmark(x, y, d.tilt);
    }
  });
}

function animate() {
  if (!dragging) rotation[0] += 0.18;
  draw();
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  resize();
  draw();
});

d3.select(canvas).call(
  d3
    .drag()
    .on("start", () => {
      dragging = true;
    })
    .on("drag", (event) => {
      const sensitivity = 0.25;
      rotation[0] += event.dx * sensitivity;
      rotation[1] = Math.max(-90, Math.min(90, rotation[1] - event.dy * sensitivity));
    })
    .on("end", () => {
      dragging = false;
    })
);

canvas.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    const current = projection.scale();
    const next = Math.max(baseScale * 0.5, Math.min(baseScale * 3, current - event.deltaY * 0.5));
    projection.scale(next);
  },
  { passive: false }
);

resize();

fetch(
  "https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
)
  .then((res) => res.json())
  .then((countries) => {
    countriesData = countries;
    animate();
  });
