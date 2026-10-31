// ============================================================
// 🎧 VUNN // SONIC.PROFILE.V35.4 — CẤU HÌNH CÁ NHÂN
// ============================================================
// ✏️ Chỉ cần thay đổi các giá trị bên dưới cho phù hợp với bạn.
// ============================================================
const CONFIG = {
  // --- Đường link Mạng Xã Hội ---
  YOUTUBE_URL: "https://www.youtube.com/channel/UCYABwsH3KS9BPi8rD63wPUw",           // Link kênh YouTube
  SPOTIFY_URL: "https://open.spotify.com/user/31d3h322skpdkzylnfqctdik6bku",  // Link Spotify Profile
  STEAM_URL: "https://steamcommunity.com/profiles/76561199201898657",    // Link Steam Profile
  DISCORD_USERNAME: "vuismei",                           // Username Discord (copy khi bấm)

  // --- Ảnh đại diện (Avatar) ---
  AVATAR_URL: "https://i.pinimg.com/736x/e5/47/31/e54731d74b1e531787d3f64e71e60aa5.jpg",

  // --- File Hồ Sơ tải về ---
  DOCX_FILE_PATH: "./Ho_So_Ban_Than_Book_Edition_V35_4.docx",

  // --- Danh sách phát nhạc nền ---
  // Thay bằng link file .mp3 thật hoặc link Catbox
  PLAYLIST_TRACKS: [
    {
      title: "Hymn to the Decadent Life",
      artist: "Ro2noki",
      src: "https://files.catbox.moe/example1.mp3",
      cover: "https://i.pinimg.com/736x/a7/cc/52/a7cc52585bff1ed587eef90e6e3e54ba.jpg"
    },
    {
      title: "AIZO",
      artist: "King Gnu",
      src: "https://files.catbox.moe/example2.mp3",
      cover: "https://i.pinimg.com/736x/1a/48/3e/1a483e683d3c1b7b2a7d6f0ec1fae5e0.jpg"
    },
    {
      title: "in the pool",
      artist: "kensuke ushio (Reze Arc OST)",
      src: "https://files.catbox.moe/example3.mp3",
      cover: "https://i.pinimg.com/736x/0d/5e/8b/0d5e8b2f2e1a3c4b5d6e7f8a9b0c1d2e.jpg"
    }
  ]
};

// ============================================================
// ✨ HIỆU ỨNG SPARKLE NỀN (giống bio Discord)
// ============================================================
function initSparkles() {
  const canvas = document.getElementById("sparkle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = [];
  const PARTICLE_COUNT = 45;

  class Sparkle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.15;
      this.speedY = (Math.random() - 0.5) * 0.15;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.fadeSpeed = Math.random() * 0.008 + 0.003;
      this.growing = Math.random() > 0.5;
      // Sakura pink hoặc lavender
      const colors = [
        [244, 114, 182],  // sakura
        [192, 132, 252],  // lavender
        [249, 168, 212],  // sakura soft
        [216, 180, 254],  // lavender bright
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.growing) {
        this.opacity += this.fadeSpeed;
        if (this.opacity >= 0.6) this.growing = false;
      } else {
        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0.02) this.reset();
      }

      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      const [r, g, b] = this.color;
      ctx.save();
      ctx.globalAlpha = this.opacity;

      // Glow
      ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.6)`;
      ctx.shadowBlur = this.size * 6;

      // Star shape
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.beginPath();

      const spikes = 4;
      const outerR = this.size;
      const innerR = this.size * 0.35;
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerR : innerR;
        const angle = (i * Math.PI) / spikes - Math.PI / 2;
        const x = this.x + Math.cos(angle) * radius;
        const y = this.y + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Sparkle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================================
// ⏰ ĐỒNG HỒ THỜI GIAN THỰC — ICT (UTC+7)
// ============================================================
function updateClock() {
  const clockEl = document.getElementById("clock");
  if (!clockEl) return;
  const now = new Date();
  const options = {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };
  const timeStr = now.toLocaleTimeString("en-GB", options);
  clockEl.textContent = `${timeStr} ICT (UTC+7)`;
}
setInterval(updateClock, 1000);
updateClock();

// ============================================================
// ✍️ TYPEWRITER
// ============================================================
function typeWriter(elementId, text, speed = 42) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      el.classList.add("blink-cursor");
    }
  }
  type();
}

// ============================================================
// 🔔 TOAST
// ============================================================
function showToast(message, duration = 2800) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}

// ============================================================
// 📋 CLIPBOARD
// ============================================================
function copyToClipboard(text, successMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage);
  }).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast(successMessage);
  });
}

function copyDiscord() {
  copyToClipboard(CONFIG.DISCORD_USERNAME, `✅ Đã sao chép Discord ID: ${CONFIG.DISCORD_USERNAME}`);
}

// ============================================================
// 🗂️ TABS
// ============================================================
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tabPanels.forEach(panel => {
        panel.classList.remove("active");
        if (panel.id === targetTab) panel.classList.add("active");
      });
    });
  });
}

// ============================================================
// 📊 COUNTER ANIMATION
// ============================================================
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute("data-target"));
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 2200;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;

          if (target % 1 !== 0) {
            el.textContent = current.toFixed(1) + suffix;
          } else {
            el.textContent = Math.floor(current).toLocaleString() + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = (target % 1 !== 0 ? target.toFixed(1) : target.toLocaleString()) + suffix;
          }
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

// ============================================================
// 📂 ACCORDION
// ============================================================
function initAccordions() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".accordion-icon");
      const isOpen = content.classList.contains("open");

      document.querySelectorAll(".accordion-content").forEach(c => c.classList.remove("open"));
      document.querySelectorAll(".accordion-icon").forEach(i => i.textContent = "+");

      if (!isOpen) {
        content.classList.add("open");
        if (icon) icon.textContent = "−";
      }
    });
  });
}

// ============================================================
// 🎵 FLOATING AUDIO PLAYER
// ============================================================
let currentTrackIndex = 0;
let isPlaying = false;
let audioElement = null;

function initAudioPlayer() {
  audioElement = new Audio();
  audioElement.volume = 0.5;
  audioElement.addEventListener("ended", () => nextTrack());
  audioElement.addEventListener("error", () => {
    const trackNameEl = document.getElementById("track-name");
    if (trackNameEl) trackNameEl.textContent = "⚠ File nhạc không khả dụng";
  });
  loadTrack(currentTrackIndex);
}

function loadTrack(index) {
  if (!CONFIG.PLAYLIST_TRACKS || CONFIG.PLAYLIST_TRACKS.length === 0) return;
  currentTrackIndex = index % CONFIG.PLAYLIST_TRACKS.length;
  const track = CONFIG.PLAYLIST_TRACKS[currentTrackIndex];

  audioElement.src = track.src;
  audioElement.load();

  const trackNameEl = document.getElementById("track-name");
  const artistNameEl = document.getElementById("artist-name");
  const discArt = document.getElementById("disc-art");

  if (trackNameEl) trackNameEl.textContent = track.title;
  if (artistNameEl) artistNameEl.textContent = track.artist;
  if (discArt) discArt.src = track.cover;

  const playIcon = document.getElementById("play-icon");
  if (playIcon) playIcon.setAttribute("data-lucide", "play");
  if (typeof lucide !== "undefined") lucide.createIcons();

  const disc = document.getElementById("disc-art");
  if (disc) disc.classList.remove("disc-spinning");
  isPlaying = false;
}

function togglePlay() {
  if (!audioElement) return;
  const playIcon = document.getElementById("play-icon");
  const disc = document.getElementById("disc-art");

  if (isPlaying) {
    audioElement.pause();
    if (playIcon) playIcon.setAttribute("data-lucide", "play");
    if (disc) disc.classList.remove("disc-spinning");
    isPlaying = false;
  } else {
    audioElement.play().catch(() => {
      showToast("🎵 Bấm Play lần nữa hoặc tương tác với trang trước.");
    });
    if (playIcon) playIcon.setAttribute("data-lucide", "pause");
    if (disc) disc.classList.add("disc-spinning");
    isPlaying = true;
  }
  if (typeof lucide !== "undefined") lucide.createIcons();
}

function nextTrack() {
  const wasPlaying = isPlaying;
  loadTrack(currentTrackIndex + 1);
  if (wasPlaying) setTimeout(() => togglePlay(), 150);
}

function toggleMute() {
  if (!audioElement) return;
  audioElement.muted = !audioElement.muted;
  showToast(audioElement.muted ? "🔇 Đã tắt tiếng" : "🔊 Đã bật tiếng");
}

// ============================================================
// ⌨️ PHÍM TẮT
// ============================================================
function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    switch (e.key.toLowerCase()) {
      case " ":
        e.preventDefault();
        togglePlay();
        break;
      case "m":
        toggleMute();
        break;
      case "n":
        nextTrack();
        break;
    }
  });
}

// ============================================================
// 🚀 KHỞI CHẠY
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  // Sparkle particles
  initSparkles();

  // Modules
  initTabs();
  initAccordions();
  initAudioPlayer();
  initKeyboardShortcuts();
  animateCounters();

  // Typewriter
  typeWriter(
    "typewriter-text",
    "> The Spatial & Speed Purist — Dual-Core Listener (80/20) _",
    40
  );

  // Event bindings
  const discordBtn = document.getElementById("copy-discord");
  if (discordBtn) discordBtn.addEventListener("click", copyDiscord);

  const playBtn = document.getElementById("play-btn");
  if (playBtn) playBtn.addEventListener("click", togglePlay);

  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) nextBtn.addEventListener("click", nextTrack);

  // Avatar & Links
  const avatarImg = document.getElementById("avatar-img");
  if (avatarImg) avatarImg.src = CONFIG.AVATAR_URL;

  const ytLink = document.getElementById("link-youtube");
  if (ytLink) ytLink.href = CONFIG.YOUTUBE_URL;

  const spLink = document.getElementById("link-spotify");
  if (spLink) spLink.href = CONFIG.SPOTIFY_URL;

  const stLink = document.getElementById("link-steam");
  if (stLink) stLink.href = CONFIG.STEAM_URL;

  const dlLink = document.getElementById("link-docx");
  if (dlLink) dlLink.href = CONFIG.DOCX_FILE_PATH;

  // Lucide icons
  if (typeof lucide !== "undefined") lucide.createIcons();
});
