const albums = [
  { file: "covers/01-heart-mascot-beach.png", title: "Un Verano Sin Ti", artist: "Bad Bunny" },
  { file: "covers/02-white-chairs-banana.png", title: "Debí Tirar Más Fotos", artist: "Bad Bunny" },
  { file: "covers/03-bmx-bike-explosions.png", title: "YHLQMDLG", artist: "Bad Bunny" },
  { file: "covers/04-ozuna-odisea.png", title: "Odisea", artist: "Ozuna" },
  { file: "covers/05-underwater-couch-band.png", title: "Submarine", artist: "The Marías" },
  { file: "covers/06-willie-colon-greatest-hits.png", title: "Greatest Hits", artist: "Willie Colón" },
  { file: "covers/07-karolg-manana-sera-bonito.png", title: "Mañana Será Bonito", artist: "Karol G" },
  { file: "covers/08-karolg-bichota-season.png", title: "Mañana Será Bvnito (Bichota Season)", artist: "Karol G" },
  { file: "covers/09-tyler-igor.png", title: "IGOR", artist: "Tyler, The Creator" },
  { file: "covers/10-man-hat-pointing-bw.png", title: "CHROMAKOPIA", artist: "Tyler, The Creator" },
  { file: "covers/11-tyler-flower-boy.png", title: "Flower Boy", artist: "Tyler, The Creator" },
  { file: "covers/12-cowboy-horse-silhouette.png", title: "Mala Mía", artist: "Fuerza Regida" },
  { file: "covers/13-brunomars-doowops-hooligans.png", title: "Doo-Wops & Hooligans", artist: "Bruno Mars" },
  { file: "covers/14-pitbull-globalization.png", title: "Globalization", artist: "Pitbull" },
  { file: "covers/15-pitbull-rebelution.png", title: "Pitbull Starring in Rebelution", artist: "Pitbull" },
  { file: "covers/16-maroon5-songs-about-jane.png", title: "Songs About Jane (10th Anniversary Edition)", artist: "Maroon 5" },
  { file: "covers/17-michael-jackson-thriller.png", title: "Thriller", artist: "Michael Jackson" },
  { file: "covers/18-grill-teeth-bw.png", title: "Bully (Deluxe)", artist: "Kanye West" },
  { file: "covers/19-kanye-graduation.png", title: "Graduation", artist: "Kanye West" },
  { file: "covers/20-kanye-mbdtf.png", title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West" },
  { file: "covers/21-kanye-college-dropout.png", title: "The College Dropout", artist: "Kanye West" },
  { file: "covers/22-kanye-life-of-pablo.png", title: "The Life of Pablo", artist: "Kanye West" },
  { file: "covers/23-watch-the-throne.png", title: "Watch the Throne", artist: "Jay-Z & Kanye West" },
  { file: "covers/24-kanye-yeezus.png", title: "Yeezus", artist: "Kanye West" },
  { file: "covers/25-kanye-808s-heartbreak.png", title: "808s & Heartbreak", artist: "Kanye West" },
  { file: "covers/26-kanye-late-registration.png", title: "Late Registration", artist: "Kanye West" },
  { file: "covers/27-kanye-jesus-is-king.png", title: "JESUS IS KING", artist: "Kanye West" },
  { file: "covers/28-kanye-ye.png", title: "ye", artist: "Kanye West" },
  { file: "covers/29-smashing-pumpkins-mellon-collie.png", title: "Mellon Collie and the Infinite Sadness", artist: "The Smashing Pumpkins" },
  { file: "covers/30-oasis-morning-glory.png", title: "(What's the Story) Morning Glory?", artist: "Oasis" },
  { file: "covers/31-michael-jackson-off-the-wall.png", title: "Off the Wall", artist: "Michael Jackson" },
  { file: "covers/32-black-eyed-peas-end.png", title: "THE E.N.D.", artist: "The Black Eyed Peas" },
  { file: "covers/33-badbunny-yonaguni.png", title: "Yonaguni", artist: "Bad Bunny" },
  { file: "covers/34-travisscott-utopia.png", title: "UTOPIA", artist: "Travis Scott" },
  { file: "covers/35-travisscott-rodeo.png", title: "Rodeo", artist: "Travis Scott" },
];

const viz = document.getElementById("music-viz");
const resumeBtn = document.getElementById("resume-btn");

const hoverLabel = document.getElementById("hover-label");
const hoverTitle = document.getElementById("hover-title");
const hoverArtist = document.getElementById("hover-artist");
const hoverCoverImg = document.getElementById("hover-cover-img");

const modalOverlay = document.getElementById("album-modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalCoverImg = document.getElementById("modal-cover-img");
const modalTitle = document.getElementById("modal-title");
const modalArtist = document.getElementById("modal-artist");

const nowPlayingImg = document.getElementById("now-playing-img");
const nowPlayingTitle = document.getElementById("now-playing-title");
const nowPlayingArtist = document.getElementById("now-playing-artist");
const speedSlider = document.getElementById("speed-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const playPauseBtn = document.getElementById("playpause-btn");
const iconPause = document.getElementById("icon-pause");
const iconPlay = document.getElementById("icon-play");

let paused = false;
let scrubbing = false;
let speedMultiplier = 1;
let width = 0;
let height = 0;

const COVER_SIZE = 84;

const items = albums.map((album) => {
  const el = document.createElement("img");
  el.src = album.file;
  el.alt = album.title;
  el.className = "cover-item";
  el.draggable = false;
  viz.appendChild(el);

  const size = COVER_SIZE;
  el.style.width = size + "px";
  el.style.height = size + "px";

  const item = {
    el,
    album,
    size,
    x: 0,
    y: 0,
    vx: (Math.random() < 0.5 ? -1 : 1) * (0.5 + Math.random() * 0.9),
    vy: (Math.random() < 0.5 ? -1 : 1) * (0.5 + Math.random() * 0.9),
  };

  el.addEventListener("mouseenter", () => {
    hoverLabel.textContent = "now hovering";
    hoverTitle.textContent = album.title;
    hoverArtist.textContent = album.artist;
    hoverCoverImg.src = album.file;
    hoverCoverImg.hidden = false;
  });

  el.addEventListener("click", (event) => {
    event.stopPropagation();
    modalCoverImg.src = album.file;
    modalTitle.textContent = album.title;
    modalArtist.textContent = album.artist;
    modalOverlay.hidden = false;
  });

  return item;
});

function layout() {
  width = viz.clientWidth;
  height = viz.clientHeight;
  items.forEach((item) => {
    item.x = Math.random() * Math.max(1, width - item.size);
    item.y = Math.random() * Math.max(1, height - item.size);
  });
}

function step() {
  items.forEach((item) => {
    if (!paused && !scrubbing) {
      item.x += item.vx * speedMultiplier;
      item.y += item.vy * speedMultiplier;

      if (item.x <= 0) {
        item.x = 0;
        item.vx = Math.abs(item.vx);
      } else if (item.x + item.size >= width) {
        item.x = width - item.size;
        item.vx = -Math.abs(item.vx);
      }

      if (item.y <= 0) {
        item.y = 0;
        item.vy = Math.abs(item.vy);
      } else if (item.y + item.size >= height) {
        item.y = height - item.size;
        item.vy = -Math.abs(item.vy);
      }
    }

    item.el.style.transform = `translate(${item.x}px, ${item.y}px)`;
  });

  requestAnimationFrame(step);
}

function setPaused(value) {
  paused = value;
  resumeBtn.hidden = !paused;
  iconPause.style.display = paused ? "none" : "block";
  iconPlay.style.display = paused ? "block" : "none";
  playPauseBtn.setAttribute("aria-label", paused ? "Play" : "Pause");
}

viz.addEventListener("click", (event) => {
  if (event.target !== viz) return;
  setPaused(!paused);
});

resumeBtn.addEventListener("click", () => {
  setPaused(false);
});

playPauseBtn.addEventListener("click", () => {
  setPaused(!paused);
});

function updateSpeedFromSlider() {
  const value = Number(speedSlider.value);
  speedMultiplier = 0.2 + (value / 100) * 2.8;
}

speedSlider.addEventListener("pointerdown", () => {
  scrubbing = true;
});

speedSlider.addEventListener("input", () => {
  updateSpeedFromSlider();
});

window.addEventListener("pointerup", () => {
  scrubbing = false;
});

let history = [];
let historyPos = -1;

function showAlbum(index) {
  const album = albums[index];
  nowPlayingImg.src = album.file;
  nowPlayingImg.alt = album.title;
  nowPlayingTitle.textContent = album.title;
  nowPlayingArtist.textContent = album.artist;
}

function goNext() {
  if (historyPos < history.length - 1) {
    historyPos++;
  } else {
    let index;
    do {
      index = Math.floor(Math.random() * albums.length);
    } while (albums.length > 1 && index === history[historyPos]);
    history.push(index);
    historyPos++;
  }
  showAlbum(history[historyPos]);
}

function goPrev() {
  if (historyPos > 0) {
    historyPos--;
    showAlbum(history[historyPos]);
  }
}

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

modalClose.addEventListener("click", () => {
  modalOverlay.hidden = true;
});

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) modalOverlay.hidden = true;
});

window.addEventListener("resize", () => {
  const oldWidth = width || 1;
  const oldHeight = height || 1;
  width = viz.clientWidth;
  height = viz.clientHeight;
  items.forEach((item) => {
    item.x = Math.min(item.x, Math.max(0, width - item.size));
    item.y = Math.min(item.y, Math.max(0, height - item.size));
  });
});

layout();
updateSpeedFromSlider();
history = [Math.floor(Math.random() * albums.length)];
historyPos = 0;
showAlbum(history[historyPos]);
requestAnimationFrame(step);
