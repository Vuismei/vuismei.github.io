// ============================================================
// 🎧 VUNN // SONIC.PROFILE.V35.4 — CẤU HÌNH CÁ NHÂN
// ============================================================
// ✏️ Thay link của bạn vào đây. Chỉ cần sửa object CONFIG.
// ============================================================
const CONFIG = {
  // --- Mạng xã hội ---
  YOUTUBE_URL: "https://www.youtube.com/channel/UCYABwsH3KS9BPi8rD63wPUw",
  SPOTIFY_URL: "https://open.spotify.com/user/31d3h322skpdkzylnfqctdik6bku",
  STEAM_URL: "https://steamcommunity.com/profiles/76561199201898657",
  DISCORD_USERNAME: "vuismei",

  // --- Ảnh đại diện (anh-chinh.jpg) ---
  AVATAR_URL: "https://files.catbox.moe/0r6ro8.jpg",

  // --- File Hồ Sơ ---
  DOCX_FILE_PATH: "./Ho_So_Ban_Than_Book_Edition_V35_4.docx",

  // --- 5 bài nhạc cho Gacha Player (Đã ghép đúng từng bài và bìa album) ---
  PLAYLIST: [
    {
      title: "Fukashigi no KARTE",
      artist: "Asami Seto",
      src: "https://files.catbox.moe/1dp11t.mp3",
      cover: "https://files.catbox.moe/6yr9eo.jpg" // bunny girlsenpai.jpg
    },
    {
      title: "Nyan Nyan (Rock Version)",
      artist: "Various Artists",
      src: "https://files.catbox.moe/mmsaia.mp3",
      cover: "https://files.catbox.moe/6pq8mh.png" // nyan nyan.png
    },
    {
      title: "Platinum Disco",
      artist: "Tsukihi Araragi (Yuka Iguchi)",
      src: "https://files.catbox.moe/f6aslo.mp3",
      cover: "https://files.catbox.moe/4phbet.png" // platinium discopng.png
    },
    {
      title: "Renai Circulation",
      artist: "Nadeko Sengoku (Kana Hanazawa)",
      src: "https://files.catbox.moe/mzshho.mp3",
      cover: "https://files.catbox.moe/mqsu6e.jpg" // Renai Circulation.jpg
    },
    {
      title: "Rolling Girl (ローリンガール)",
      artist: "wowaka feat. 初音ミク",
      src: "https://files.catbox.moe/xyxjob.mp3",
      cover: "https://files.catbox.moe/wdbpfr.jpg" // rolling girl.jpg
    }
  ]
};

// ============================================================
// 🎨 APPLE MUSIC DYNAMIC BACKGROUND
// ============================================================
function updateDynamicBackground(coverUrl, instant = false) {
  const blobs = document.querySelectorAll(".bg-blob");
  if (!blobs.length) return;

  if (instant) {
    blobs.forEach(b => {
      b.style.backgroundImage = `url('${coverUrl}')`;
    });
    return;
  }

  // Smooth crossfade dip
  blobs.forEach(b => b.style.opacity = "0.25");

  setTimeout(() => {
    blobs.forEach(b => {
      b.style.backgroundImage = `url('${coverUrl}')`;
      b.style.opacity = "";
    });
  }, 350);
}

// ============================================================
// ⏰ ĐỒNG HỒ — ICT (UTC+7)
// ============================================================
function updateClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
  });
  el.textContent = `${timeStr} ICT (UTC+7)`;
}
setInterval(updateClock, 1000);
updateClock();

// ============================================================
// ✍️ TYPEWRITER
// ============================================================
function typeWriter(elementId, text, speed = 38) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = "";
  let i = 0;
  function tick() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(tick, speed);
    } else {
      el.classList.add("blink-cursor");
    }
  }
  tick();
}

// ============================================================
// 🔔 TOAST
// ============================================================
function showToast(msg, ms = 2800) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), ms);
}

// ============================================================
// 📋 COPY
// ============================================================
function copyText(text, msg) {
  navigator.clipboard.writeText(text).then(() => showToast(msg)).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast(msg);
  });
}

// ============================================================
// 📊 COUNTER ANIMATION
// ============================================================
function initCounters() {
  const nums = document.querySelectorAll(".stat-num");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || "";
      const dur = 2400;
      const t0 = performance.now();
      function frame(now) {
        const p = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const v = target * ease;
        el.textContent = (target % 1 !== 0 ? v.toFixed(1) : Math.floor(v).toLocaleString()) + suffix;
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = (target % 1 !== 0 ? target.toFixed(1) : target.toLocaleString()) + suffix;
      }
      requestAnimationFrame(frame);
      obs.unobserve(el);
    });
  }, { threshold: 0.25 });
  nums.forEach(n => obs.observe(n));
}

// ============================================================
// 🖼️ AVATAR FALLBACK
// ============================================================
function initAvatar() {
  const img = document.getElementById("avatar-img");
  if (!img) return;
  img.src = CONFIG.AVATAR_URL;
  img.onerror = function () {
    // SVG fallback: abstract anime-style silhouette
    this.onerror = null;
    this.src = "data:image/svg+xml," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f472b6"/>
            <stop offset="100%" stop-color="#c084fc"/>
          </linearGradient>
        </defs>
        <rect width="200" height="200" rx="100" fill="#1a1030"/>
        <circle cx="100" cy="78" r="38" fill="url(#g)" opacity="0.8"/>
        <ellipse cx="100" cy="155" rx="52" ry="35" fill="url(#g)" opacity="0.6"/>
        <text x="100" y="185" text-anchor="middle" fill="#e2e8f0" font-size="14" font-family="sans-serif">VuNn</text>
      </svg>
    `);
  };
}

// ============================================================
// 🎵 GACHA MUSIC PLAYER
// ============================================================
let audio = null;
let playing = false;
let currentIdx = 0;

function initPlayer() {
  audio = new Audio();
  audio.volume = 0.5;
  audio.addEventListener("ended", () => gachaNext());
  audio.addEventListener("error", () => {
    const el = document.getElementById("track-name");
    if (el) el.textContent = "⚠ File nhạc không khả dụng";
  });
  loadTrack(0, true);
}

function loadTrack(idx, instant = false) {
  const list = CONFIG.PLAYLIST;
  if (!list || !list.length) return;
  currentIdx = ((idx % list.length) + list.length) % list.length;
  const t = list[currentIdx];

  audio.src = t.src;
  audio.load();

  const nameEl = document.getElementById("track-name");
  const artistEl = document.getElementById("artist-name");
  const discEl = document.getElementById("disc-art");
  const iconEl = document.getElementById("play-icon");

  if (nameEl) nameEl.textContent = t.title;
  if (artistEl) artistEl.textContent = t.artist;
  if (discEl) {
    discEl.src = t.cover;
    discEl.classList.remove("spinning");
    discEl.onerror = function() {
      this.onerror = null;
      this.src = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#2d2545"/><circle cx="50" cy="50" r="16" fill="#f472b6"/></svg>');
    };
  }
  if (iconEl) iconEl.setAttribute("data-lucide", "play");
  if (typeof lucide !== "undefined") lucide.createIcons();

  // Cập nhật nền Apple Music
  updateDynamicBackground(t.cover, instant);
  playing = false;
}

function togglePlay() {
  if (!audio) return;
  const iconEl = document.getElementById("play-icon");
  const discEl = document.getElementById("disc-art");

  if (playing) {
    audio.pause();
    if (iconEl) iconEl.setAttribute("data-lucide", "play");
    if (discEl) discEl.classList.remove("spinning");
    playing = false;
  } else {
    audio.play().catch(() => showToast("🎵 Bấm Play lần nữa hoặc tương tác trang trước."));
    if (iconEl) iconEl.setAttribute("data-lucide", "pause");
    if (discEl) discEl.classList.add("spinning");
    playing = true;
  }
  if (typeof lucide !== "undefined") lucide.createIcons();
}

function gachaNext() {
  const was = playing;
  // Chọn ngẫu nhiên bài khác bài hiện tại
  let next;
  const len = CONFIG.PLAYLIST.length;
  if (len <= 1) { next = 0; }
  else {
    do { next = Math.floor(Math.random() * len); } while (next === currentIdx);
  }
  loadTrack(next);
  // Hiệu ứng gacha
  showToast(`🎲 Gacha! → ${CONFIG.PLAYLIST[next].title}`);
  if (was) setTimeout(() => togglePlay(), 200);
}

function toggleMute() {
  if (!audio) return;
  audio.muted = !audio.muted;
  showToast(audio.muted ? "🔇 Đã tắt tiếng" : "🔊 Đã bật tiếng");
}

// ============================================================
// ⌨️ PHÍM TẮT
// ============================================================
function initKeys() {
  document.addEventListener("keydown", e => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    switch (e.key.toLowerCase()) {
      case " ": e.preventDefault(); togglePlay(); break;
      case "m": toggleMute(); break;
      case "n": gachaNext(); break;
    }
  });
}

// ============================================================
// 🚀 INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initAvatar();
  initCounters();
  initPlayer();
  initKeys();

  typeWriter("typewriter-text", "> The Spatial & Speed Purist — Dual-Core Listener (80/20) _", 38);

  // Event bindings
  document.getElementById("copy-discord")?.addEventListener("click", () =>
    copyText(CONFIG.DISCORD_USERNAME, `✅ Đã sao chép Discord: ${CONFIG.DISCORD_USERNAME}`)
  );
  document.getElementById("play-btn")?.addEventListener("click", togglePlay);
  document.getElementById("gacha-btn")?.addEventListener("click", gachaNext);

  // Links
  const setHref = (id, url) => { const el = document.getElementById(id); if (el) el.href = url; };
  setHref("link-youtube", CONFIG.YOUTUBE_URL);
  setHref("link-spotify", CONFIG.SPOTIFY_URL);
  setHref("link-steam", CONFIG.STEAM_URL);
  setHref("link-docx", CONFIG.DOCX_FILE_PATH);

  if (typeof lucide !== "undefined") lucide.createIcons();
});
