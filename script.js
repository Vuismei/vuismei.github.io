/**
 * ============================================================================
 * 5. CẤU TRÚC BIẾN CONFIG Ở ĐẦU FILE script.js
 * Tích hợp sẵn link Catbox.moe thực tế từ Nhạc.txt & ảnh chụp màn hình của VuNn
 * ============================================================================
 */
const CONFIG = {
  // Link ảnh đại diện chính (anh-chinh.jpg trên Catbox.moe)
  AVATAR_URL: 'https://files.catbox.moe/0r6ro8.jpg',

  // Đường dẫn tải Hồ sơ Bản Dạng V35.4 (.DOCX)
  DOCX_URL: './Ho_So_Ban_Than_Book_Edition_V35_4.docx',

  // Liên kết mạng xã hội chính thức
  LINKS: {
    youtube: 'https://www.youtube.com/channel/UCYABwsH3KS9BPi8rD63wPUw',
    spotify: 'https://open.spotify.com/user/31d3h322skpdkzylnfqctdik6bku',
    steam: 'https://steamcommunity.com/profiles/76561199201898657',
    discord: 'vuismei'
  },

  // Danh sách 5 bài hát Gacha (Đã gắn đầy đủ .mp3 và ảnh bìa từ Catbox.moe của bạn)
  GACHA_PLAYLIST: [
    {
      title: 'Fukashigi no KARTE (不可思議のカルテ)',
      artist: 'Asami Seto — Sakurajima Mai',
      badge: 'Bunny Girl Senpai ED • Spatial Vocal',
      audioUrl: 'https://files.catbox.moe/1dp11t.mp3',
      coverUrl: 'https://files.catbox.moe/6yr9eo.jpg',
      accentColor: '#a855f7'
    },
    {
      title: 'Nyan Nyan (Rock Version)',
      artist: 'High-Speed Anime Rock Session',
      badge: 'Dual-Core 80/20 • Speed Axis',
      audioUrl: 'https://files.catbox.moe/mmsaia.mp3',
      coverUrl: 'https://files.catbox.moe/6pq8mh.png',
      accentColor: '#f43f5e'
    },
    {
      title: 'Platinum Disco (白金ディスコ)',
      artist: 'Yuka Iguchi — Tsukihi Araragi',
      badge: 'Nisemonogatari OP3 • Pure Frisson',
      audioUrl: 'https://files.catbox.moe/f6aslo.mp3',
      coverUrl: 'https://files.catbox.moe/4phbet.png',
      accentColor: '#06b6d4'
    },
    {
      title: 'Renai Circulation (恋愛サーキュレーション)',
      artist: 'Kana Hanazawa — Nadeko Sengoku',
      badge: 'Bakemonogatari OP4 • 100% Nostalgia',
      audioUrl: 'https://files.catbox.moe/mzshho.mp3',
      coverUrl: 'https://files.catbox.moe/mqsu6e.jpg',
      accentColor: '#ec4899'
    },
    {
      title: 'ローリンガール (Rolling Girl)',
      artist: 'wowaka feat. 初音ミク (Hatsune Miku)',
      badge: 'Vocaloid Legend • [ ♥ プロセカ ]',
      audioUrl: 'https://files.catbox.moe/xyxjob.mp3',
      coverUrl: 'https://files.catbox.moe/wdbpfr.jpg',
      accentColor: '#3b82f6'
    }
  ],

  // Bộ 5 bài kỷ lục trong Hồ sơ V35.4 (Dự phòng / Có thể trỏ link Catbox bất kỳ lúc nào)
  V35_RECORD_PRESETS: [
    {
      title: 'AIZO',
      artist: 'King Gnu',
      badge: '642 Plays • 155× Repeat-One',
      audioUrl: '',
      coverUrl: 'https://files.catbox.moe/6yr9eo.jpg',
      accentColor: '#ef4444'
    },
    {
      title: 'in
