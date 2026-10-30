// ============================================================
// 🎧 VUNN // SONIC.PROFILE.V35.4 — CẤU HÌNH CÁ NHÂN
// ============================================================
// ✏️ Chỉ cần thay đổi các giá trị bên dưới cho phù hợp với bạn.
// Tất cả đường link, tên người dùng, ảnh đại diện đều nằm ở đây.
// ============================================================
const CONFIG = {
  // --- Đường link Mạng Xã Hội ---
  YOUTUBE_URL: "https://www.youtube.com/channel/UCYABwsH3KS9BPi8rD63wPUw",           // Link kênh YouTube cá nhân
  SPOTIFY_URL: "https://open.spotify.com/user/31d3h322skpdkzylnfqctdik6bku",  // Link Spotify Profile
  STEAM_URL: "https://steamcommunity.com/profiles/76561199201898657",    // Link Steam Profile
  DISCORD_USERNAME: "vuismei",                           // Username Discord (sẽ copy khi bấm)

  // --- Ảnh đại diện (Avatar) ---
  // Thay bằng link ảnh Catbox hoặc bất kỳ URL ảnh nào bạn muốn
  AVATAR_URL: "https://i.pinimg.com/736x/e5/47/31/e54731d74b1e531787d3f64e71e60aa5.jpg",

  // --- File Hồ Sơ tải về ---
  DOCX_FILE_PATH: "./Ho_So_Ban_Than_Book_Edition_V35_4.docx", // Đường dẫn file .docx

  // --- Danh sách phát nhạc nền (Floating Player) ---
  // Thay bằng link file .mp3 hoặc link Catbox của bạn
  PLAYLIST_TRACKS: [
    {
      title: "Hymn to the Decadent Life",
      artist: "Ro2noki",
      src: "https://files.catbox.moe/example1.mp3", // Thay link mp3 thật
      cover: "https://i.pinimg.com/736x/a7/cc/52/a7cc52585bff1ed587eef90e6e3e54ba.jpg"
    },
    {
      title: "AIZO",
      artist: "King Gnu",
      src: "https://files.catbox.moe/example2.mp3", // Thay link mp3 thật
      cover: "https://i.pinimg.com/736x/1a/48/3e/1a483e683d3c1b7b2a7d6f0ec1fae5e0.jpg"
    },
    {
      title: "in the pool",
      artist: "kensuke ushio (Chainsaw Man: Reze Arc OST)",
      src: "https://files.catbox.moe/example3.mp3", // Thay link mp3 thật
      cover: "https://i.pinimg.com/736x/0d/5e/8b/0d5e8b2f2e1a3c4b5d6e7f8a9b0c1d2e.jpg"
    }
  ],

  // --- Nội dung Danh Thiếp Audition (TBL-02) để copy nhanh ---
  AUDITION_BRIEF: `══════════════════════════════════════════════════════
  QUICK-PASTE CONSULTATION BRIEF (TBL-02) — V35.4
══════════════════════════════════════════════════════
Người nghe: VuNn (@vuismei)
Hồ sơ: 10,594.8h streaming | 3,710 entries Foobar2000 (98% Lossless/Hi-Res/DSD)
Phong cách: 80% Analytical / 20% Musicality — KHÔNG EQ

▸ Ưu tiên #1 (24%): Không gian 3D, Âm trường & Tách lớp
▸ Ưu tiên #2 (23%): Chi tiết Vi mô, Họa âm & Độ mở Treble/Air
▸ Ưu tiên #3 (22%): Vocal & Mid trung tính tuyệt đối
▸ Ưu tiên #4 (15%): Độ động Vĩ mô–Vi mô & Nền âm tĩnh
▸ Cổng Đạt/Loại (12%): Transient nhanh, bass tuyến tính (Loại nếu <6/10)
▸ Yếu tố phụ (4%): Không mỏi tai >3h đeo kính cận

Thiết bị hiện tại: FiiO K7 → Moondrop Kadenz (SpinFit W1)
Nhu cầu nâng cấp: Over-ear Planar Magnetic (Closed/Semi-open, tương thích kính cận)
Nguồn phát chính: Foobar2000 ASIO Native DSD + Spotify Very High
Bài test: 16 Track Reference — Miku Symphony, Ayako Ishikawa, King Gnu AIZO, Kobaryo Speedcore
Frisson triggers: (1) Orchestral Tutti, (2) Solo vút lên từ nền tĩnh, (3) Hợp xướng đa bè

Công thức chấm: Σ = 2.4D + 2.3C + 2.2B + 1.5E + 1.2A + 0.4F
══════════════════════════════════════════════════════`
};

// ============================================================
// ⏰ ĐỒNG HỒ THỜI GIAN THỰC — MÚI GIỜ VIỆT NAM (ICT UTC+7)
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
// ✍️ HIỆU ỨNG GÕ CHỮ (TYPEWRITER EFFECT)
// ============================================================
function typeWriter(elementId, text, speed = 45) {
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
// 🔔 THÔNG BÁO TOAST
// ============================================================
function showToast(message, duration = 2500) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

// ============================================================
// 📋 SAO CHÉP VÀO CLIPBOARD
// ============================================================
function copyToClipboard(text, successMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage);
  }).catch(() => {
    // Fallback cho trình duyệt không hỗ trợ
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
  copyToClipboard(CONFIG.DISCORD_USERNAME, `Đã sao chép Discord ID: ${CONFIG.DISCORD_USERNAME}`);
}

function copyAuditionBrief() {
  copyToClipboard(CONFIG.AUDITION_BRIEF, "Đã sao chép Danh Thiếp Audition (TBL-02) vào clipboard!");
}

// ============================================================
// 🗂️ HỆ THỐNG TABS CHUYỂN ĐỔI
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
        if (panel.id === targetTab) {
          panel.classList.add("active");
        }
      });
    });
  });
}

// ============================================================
// 📊 THANH TIẾN TRÌNH — ANIMATION KHI CUỘN TRANG
// ============================================================
function initProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute("data-value");
        setTimeout(() => {
          bar.style.width = targetWidth + "%";
        }, 200);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  progressBars.forEach(bar => {
    bar.style.width = "0%";
    observer.observe(bar);
  });
}

// ============================================================
// 📂 ACCORDION ĐÓNG/MỞ
// ============================================================
function initAccordions() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".accordion-icon");
      const isOpen = content.classList.contains("open");

      // Đóng tất cả
      document.querySelectorAll(".accordion-content").forEach(c => c.classList.remove("open"));
      document.querySelectorAll(".accordion-icon").forEach(i => i.textContent = "+");

      // Mở cái được bấm (nếu trước đó đang đóng)
      if (!isOpen) {
        content.classList.add("open");
        if (icon) icon.textContent = "−";
      }
    });
  });
}

// ============================================================
// 🎵 TRÌNH PHÁT NHẠC NỀN MINI (FLOATING AUDIO PLAYER)
// ============================================================
let currentTrackIndex = 0;
let isPlaying = false;
let audioElement = null;

function initAudioPlayer() {
  audioElement = new Audio();
  audioElement.volume = 0.5;

  audioElement.addEventListener("ended", () => {
    nextTrack();
  });

  audioElement.addEventListener("error", () => {
    // Nếu file không tải được, hiện trạng thái lỗi
    const trackNameEl = document.getElementById("track-name");
    if (trackNameEl) trackNameEl.textContent = "⚠ Không tải được file nhạc";
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
  const playIcon = document.getElementById("play-icon");

  if (trackNameEl) trackNameEl.textContent = track.title;
  if (artistNameEl) artistNameEl.textContent = track.artist;
  if (discArt) discArt.src = track.cover;
  if (playIcon) playIcon.setAttribute("data-lucide", "play");

  // Cập nhật icon
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
      showToast("Bấm Play lần nữa hoặc tương tác với trang trước.");
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
  if (wasPlaying) {
    setTimeout(() => togglePlay(), 100);
  }
}

function toggleMute() {
  if (!audioElement) return;
  audioElement.muted = !audioElement.muted;
  showToast(audioElement.muted ? "🔇 Đã tắt tiếng" : "🔊 Đã bật tiếng");
}

// ============================================================
// ⌨️ PHÍM TẮT BÀN PHÍM
// ============================================================
function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Bỏ qua nếu đang gõ trong input/textarea
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
      case "c":
        copyAuditionBrief();
        break;
    }
  });
}

// ============================================================
// 🔲 HIỆU ỨNG GÓC KHUNG NGẮM (CORNER BRACKETS GLOW ON HOVER)
// ============================================================
function initCornerCards() {
  // Hiệu ứng được xử lý bằng CSS :hover, không cần JS thêm
  // Hàm này dự phòng cho animation nâng cao sau này
}

// ============================================================
// 📊 COUNTER ANIMATION CHO SỐ LIỆU LỚN
// ============================================================
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute("data-target"));
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Easing: ease-out cubic
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
            if (target % 1 !== 0) {
              el.textContent = target.toFixed(1) + suffix;
            } else {
              el.textContent = target.toLocaleString() + suffix;
            }
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
// 🚀 KHỞI CHẠY KHI TRANG TẢI XONG
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  // Khởi tạo tất cả module
  initTabs();
  initProgressBars();
  initAccordions();
  initAudioPlayer();
  initKeyboardShortcuts();
  initCornerCards();
  animateCounters();

  // Hiệu ứng gõ chữ cho dòng archetype
  typeWriter(
    "typewriter-text",
    "> The Spatial & Speed Purist — Dual-Core Listener (80/20) _",
    40
  );

  // Gán sự kiện nút bấm
  const discordBtn = document.getElementById("copy-discord");
  if (discordBtn) discordBtn.addEventListener("click", copyDiscord);

  const briefBtn = document.getElementById("copy-brief");
  if (briefBtn) briefBtn.addEventListener("click", copyAuditionBrief);

  const playBtn = document.getElementById("play-btn");
  if (playBtn) playBtn.addEventListener("click", togglePlay);

  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) nextBtn.addEventListener("click", nextTrack);

  // Gán link avatar
  const avatarImg = document.getElementById("avatar-img");
  if (avatarImg) avatarImg.src = CONFIG.AVATAR_URL;

  // Gán các link mạng xã hội
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
