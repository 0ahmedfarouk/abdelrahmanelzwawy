/* app.js — Farouk */
/* الشيخ عبد الرحمن الزواوي — Vanilla JS Static Site */ /* Farouk */

/* =============================================
   DATA — 114 SURAHS
   ============================================= */ /* Farouk */
var SURAHS = [ /* Farouk */
  {id:1,  name:'الفاتحة',    en:'Al-Fatiha',      v:7,   t:'مكية'}, /* Farouk */
  {id:2,  name:'البقرة',     en:'Al-Baqarah',     v:286, t:'مدنية'}, /* Farouk */
  {id:3,  name:'آل عمران',   en:'Al-Imran',       v:200, t:'مدنية'}, /* Farouk */
  {id:4,  name:'النساء',     en:'An-Nisa',        v:176, t:'مدنية'}, /* Farouk */
  {id:5,  name:'المائدة',    en:'Al-Maidah',      v:120, t:'مدنية'}, /* Farouk */
  {id:6,  name:'الأنعام',    en:'Al-Anam',        v:165, t:'مكية'}, /* Farouk */
  {id:7,  name:'الأعراف',    en:'Al-Araf',        v:206, t:'مكية'}, /* Farouk */
  {id:8,  name:'الأنفال',    en:'Al-Anfal',       v:75,  t:'مدنية'}, /* Farouk */
  {id:9,  name:'التوبة',     en:'At-Tawbah',      v:129, t:'مدنية'}, /* Farouk */
  {id:10, name:'يونس',       en:'Yunus',          v:109, t:'مكية'}, /* Farouk */
  {id:11, name:'هود',        en:'Hud',            v:123, t:'مكية'}, /* Farouk */
  {id:12, name:'يوسف',       en:'Yusuf',          v:111, t:'مكية'}, /* Farouk */
  {id:13, name:'الرعد',      en:'Ar-Rad',         v:43,  t:'مدنية'}, /* Farouk */
  {id:14, name:'إبراهيم',    en:'Ibrahim',        v:52,  t:'مكية'}, /* Farouk */
  {id:15, name:'الحجر',      en:'Al-Hijr',        v:99,  t:'مكية'}, /* Farouk */
  {id:16, name:'النحل',      en:'An-Nahl',        v:128, t:'مكية'}, /* Farouk */
  {id:17, name:'الإسراء',    en:'Al-Isra',        v:111, t:'مكية'}, /* Farouk */
  {id:18, name:'الكهف',      en:'Al-Kahf',        v:110, t:'مكية'}, /* Farouk */
  {id:19, name:'مريم',       en:'Maryam',         v:98,  t:'مكية'}, /* Farouk */
  {id:20, name:'طه',         en:'Taha',           v:135, t:'مكية'}, /* Farouk */
  {id:21, name:'الأنبياء',   en:'Al-Anbiya',      v:112, t:'مكية'}, /* Farouk */
  {id:22, name:'الحج',       en:'Al-Hajj',        v:78,  t:'مدنية'}, /* Farouk */
  {id:23, name:'المؤمنون',   en:'Al-Muminun',     v:118, t:'مكية'}, /* Farouk */
  {id:24, name:'النور',      en:'An-Nur',         v:64,  t:'مدنية'}, /* Farouk */
  {id:25, name:'الفرقان',    en:'Al-Furqan',      v:77,  t:'مكية'}, /* Farouk */
  {id:26, name:'الشعراء',    en:'Ash-Shuara',     v:227, t:'مكية'}, /* Farouk */
  {id:27, name:'النمل',      en:'An-Naml',        v:93,  t:'مكية'}, /* Farouk */
  {id:28, name:'القصص',      en:'Al-Qasas',       v:88,  t:'مكية'}, /* Farouk */
  {id:29, name:'العنكبوت',   en:'Al-Ankabut',     v:69,  t:'مكية'}, /* Farouk */
  {id:30, name:'الروم',      en:'Ar-Rum',         v:60,  t:'مكية'}, /* Farouk */
  {id:31, name:'لقمان',      en:'Luqman',         v:34,  t:'مكية'}, /* Farouk */
  {id:32, name:'السجدة',     en:'As-Sajdah',      v:30,  t:'مكية'}, /* Farouk */
  {id:33, name:'الأحزاب',    en:'Al-Ahzab',       v:73,  t:'مدنية'}, /* Farouk */
  {id:34, name:'سبأ',        en:'Saba',           v:54,  t:'مكية'}, /* Farouk */
  {id:35, name:'فاطر',       en:'Fatir',          v:45,  t:'مكية'}, /* Farouk */
  {id:36, name:'يس',         en:'Ya-Sin',         v:83,  t:'مكية'}, /* Farouk */
  {id:37, name:'الصافات',    en:'As-Saffat',      v:182, t:'مكية'}, /* Farouk */
  {id:38, name:'ص',          en:'Sad',            v:88,  t:'مكية'}, /* Farouk */
  {id:39, name:'الزمر',      en:'Az-Zumar',       v:75,  t:'مكية'}, /* Farouk */
  {id:40, name:'غافر',       en:'Ghafir',         v:85,  t:'مكية'}, /* Farouk */
  {id:41, name:'فصلت',       en:'Fussilat',       v:54,  t:'مكية'}, /* Farouk */
  {id:42, name:'الشورى',     en:'Ash-Shura',      v:53,  t:'مكية'}, /* Farouk */
  {id:43, name:'الزخرف',     en:'Az-Zukhruf',     v:89,  t:'مكية'}, /* Farouk */
  {id:44, name:'الدخان',     en:'Ad-Dukhan',      v:59,  t:'مكية'}, /* Farouk */
  {id:45, name:'الجاثية',    en:'Al-Jathiyah',    v:37,  t:'مكية'}, /* Farouk */
  {id:46, name:'الأحقاف',    en:'Al-Ahqaf',       v:35,  t:'مكية'}, /* Farouk */
  {id:47, name:'محمد',       en:'Muhammad',       v:38,  t:'مدنية'}, /* Farouk */
  {id:48, name:'الفتح',      en:'Al-Fath',        v:29,  t:'مدنية'}, /* Farouk */
  {id:49, name:'الحجرات',    en:'Al-Hujurat',     v:18,  t:'مدنية'}, /* Farouk */
  {id:50, name:'ق',          en:'Qaf',            v:45,  t:'مكية'}, /* Farouk */
  {id:51, name:'الذاريات',   en:'Adh-Dhariyat',   v:60,  t:'مكية'}, /* Farouk */
  {id:52, name:'الطور',      en:'At-Tur',         v:49,  t:'مكية'}, /* Farouk */
  {id:53, name:'النجم',      en:'An-Najm',        v:62,  t:'مكية'}, /* Farouk */
  {id:54, name:'القمر',      en:'Al-Qamar',       v:55,  t:'مكية'}, /* Farouk */
  {id:55, name:'الرحمن',     en:'Ar-Rahman',      v:78,  t:'مدنية'}, /* Farouk */
  {id:56, name:'الواقعة',    en:'Al-Waqiah',      v:96,  t:'مكية'}, /* Farouk */
  {id:57, name:'الحديد',     en:'Al-Hadid',       v:29,  t:'مدنية'}, /* Farouk */
  {id:58, name:'المجادلة',   en:'Al-Mujadila',    v:22,  t:'مدنية'}, /* Farouk */
  {id:59, name:'الحشر',      en:'Al-Hashr',       v:24,  t:'مدنية'}, /* Farouk */
  {id:60, name:'الممتحنة',   en:'Al-Mumtahanah',  v:13,  t:'مدنية'}, /* Farouk */
  {id:61, name:'الصف',       en:'As-Saf',         v:14,  t:'مدنية'}, /* Farouk */
  {id:62, name:'الجمعة',     en:'Al-Jumuah',      v:11,  t:'مدنية'}, /* Farouk */
  {id:63, name:'المنافقون',  en:'Al-Munafiqun',   v:11,  t:'مدنية'}, /* Farouk */
  {id:64, name:'التغابن',    en:'At-Taghabun',    v:18,  t:'مدنية'}, /* Farouk */
  {id:65, name:'الطلاق',     en:'At-Talaq',       v:12,  t:'مدنية'}, /* Farouk */
  {id:66, name:'التحريم',    en:'At-Tahrim',      v:12,  t:'مدنية'}, /* Farouk */
  {id:67, name:'الملك',      en:'Al-Mulk',        v:30,  t:'مكية'}, /* Farouk */
  {id:68, name:'القلم',      en:'Al-Qalam',       v:52,  t:'مكية'}, /* Farouk */
  {id:69, name:'الحاقة',     en:'Al-Haqqah',      v:52,  t:'مكية'}, /* Farouk */
  {id:70, name:'المعارج',    en:'Al-Maarij',      v:44,  t:'مكية'}, /* Farouk */
  {id:71, name:'نوح',        en:'Nuh',            v:28,  t:'مكية'}, /* Farouk */
  {id:72, name:'الجن',       en:'Al-Jinn',        v:28,  t:'مكية'}, /* Farouk */
  {id:73, name:'المزمل',     en:'Al-Muzzammil',   v:20,  t:'مكية'}, /* Farouk */
  {id:74, name:'المدثر',     en:'Al-Muddathir',   v:56,  t:'مكية'}, /* Farouk */
  {id:75, name:'القيامة',    en:'Al-Qiyamah',     v:40,  t:'مكية'}, /* Farouk */
  {id:76, name:'الإنسان',    en:'Al-Insan',       v:31,  t:'مدنية'}, /* Farouk */
  {id:77, name:'المرسلات',   en:'Al-Mursalat',    v:50,  t:'مكية'}, /* Farouk */
  {id:78, name:'النبأ',      en:'An-Naba',        v:40,  t:'مكية'}, /* Farouk */
  {id:79, name:'النازعات',   en:'An-Naziat',      v:46,  t:'مكية'}, /* Farouk */
  {id:80, name:'عبس',        en:'Abasa',          v:42,  t:'مكية'}, /* Farouk */
  {id:81, name:'التكوير',    en:'At-Takwir',      v:29,  t:'مكية'}, /* Farouk */
  {id:82, name:'الانفطار',   en:'Al-Infitar',     v:19,  t:'مكية'}, /* Farouk */
  {id:83, name:'المطففين',   en:'Al-Mutaffifin',  v:36,  t:'مكية'}, /* Farouk */
  {id:84, name:'الانشقاق',   en:'Al-Inshiqaq',    v:25,  t:'مكية'}, /* Farouk */
  {id:85, name:'البروج',     en:'Al-Buruj',       v:22,  t:'مكية'}, /* Farouk */
  {id:86, name:'الطارق',     en:'At-Tariq',       v:17,  t:'مكية'}, /* Farouk */
  {id:87, name:'الأعلى',     en:'Al-Ala',         v:19,  t:'مكية'}, /* Farouk */
  {id:88, name:'الغاشية',    en:'Al-Ghashiyah',   v:26,  t:'مكية'}, /* Farouk */
  {id:89, name:'الفجر',      en:'Al-Fajr',        v:30,  t:'مكية'}, /* Farouk */
  {id:90, name:'البلد',      en:'Al-Balad',       v:20,  t:'مكية'}, /* Farouk */
  {id:91, name:'الشمس',      en:'Ash-Shams',      v:15,  t:'مكية'}, /* Farouk */
  {id:92, name:'الليل',      en:'Al-Layl',        v:21,  t:'مكية'}, /* Farouk */
  {id:93, name:'الضحى',      en:'Ad-Duha',        v:11,  t:'مكية'}, /* Farouk */
  {id:94, name:'الشرح',      en:'Ash-Sharh',      v:8,   t:'مكية'}, /* Farouk */
  {id:95, name:'التين',      en:'At-Tin',         v:8,   t:'مكية'}, /* Farouk */
  {id:96, name:'العلق',      en:'Al-Alaq',        v:19,  t:'مكية'}, /* Farouk */
  {id:97, name:'القدر',      en:'Al-Qadr',        v:5,   t:'مكية'}, /* Farouk */
  {id:98, name:'البينة',     en:'Al-Bayyinah',    v:8,   t:'مدنية'}, /* Farouk */
  {id:99, name:'الزلزلة',    en:'Az-Zalzalah',    v:8,   t:'مدنية'}, /* Farouk */
  {id:100,name:'العاديات',   en:'Al-Adiyat',      v:11,  t:'مكية'}, /* Farouk */
  {id:101,name:'القارعة',    en:'Al-Qariah',      v:11,  t:'مكية'}, /* Farouk */
  {id:102,name:'التكاثر',    en:'At-Takathur',    v:8,   t:'مكية'}, /* Farouk */
  {id:103,name:'العصر',      en:'Al-Asr',         v:3,   t:'مكية'}, /* Farouk */
  {id:104,name:'الهمزة',     en:'Al-Humazah',     v:9,   t:'مكية'}, /* Farouk */
  {id:105,name:'الفيل',      en:'Al-Fil',         v:5,   t:'مكية'}, /* Farouk */
  {id:106,name:'قريش',       en:'Quraysh',        v:4,   t:'مكية'}, /* Farouk */
  {id:107,name:'الماعون',    en:'Al-Maun',        v:7,   t:'مكية'}, /* Farouk */
  {id:108,name:'الكوثر',     en:'Al-Kawthar',     v:3,   t:'مكية'}, /* Farouk */
  {id:109,name:'الكافرون',   en:'Al-Kafirun',     v:6,   t:'مكية'}, /* Farouk */
  {id:110,name:'النصر',      en:'An-Nasr',        v:3,   t:'مدنية'}, /* Farouk */
  {id:111,name:'المسد',      en:'Al-Masad',       v:5,   t:'مكية'}, /* Farouk */
  {id:112,name:'الإخلاص',    en:'Al-Ikhlas',      v:4,   t:'مكية'}, /* Farouk */
  {id:113,name:'الفلق',      en:'Al-Falaq',       v:5,   t:'مكية'}, /* Farouk */
  {id:114,name:'الناس',      en:'An-Nas',         v:6,   t:'مكية'} /* Farouk */
]; /* Farouk */

function audioUrl(id) { /* Farouk */
  return 'https://server8.mp3quran.net/afs/' + String(id).padStart(3,'0') + '.mp3'; /* Farouk */
} /* Farouk */

/* =============================================
   STATE
   ============================================= */ /* Farouk */
var state = { /* Farouk */
  page:         'home', /* Farouk */
  dark:         false, /* Farouk */
  menuOpen:     false, /* Farouk */
  /* Audio player state */ /* Farouk */
  surahIdx:     0,    /* index in SURAHS array */ /* Farouk */
  playing:      false, /* Farouk */
  repeat:       false, /* Farouk */
  volume:       1, /* Farouk */
  speed:        1, /* Farouk */
  /* Quran page state */ /* Farouk */
  qSearch:      '', /* Farouk */
  qFilter:      'all', /* Farouk */
  qActiveSurah: null  /* surah id or null */ /* Farouk */
}; /* Farouk */

/* =============================================
   DOM REFS
   ============================================= */ /* Farouk */
var audio        = document.getElementById('global-audio'); /* Farouk */
var playBtn      = document.getElementById('play-btn'); /* Farouk */
var seekRange    = document.getElementById('seek-range'); /* Farouk */
var volRange     = document.getElementById('vol-range'); /* Farouk */
var timeEl       = document.getElementById('time-current'); /* Farouk */
var durEl        = document.getElementById('time-duration'); /* Farouk */
var playerTitle  = document.getElementById('player-surah-name'); /* Farouk */
var playerMeta   = document.getElementById('player-surah-meta'); /* Farouk */
var playerDlLink = document.getElementById('player-dl'); /* Farouk */

/* =============================================
   NAVIGATION
   ============================================= */ /* Farouk */
function showPage(pageId) { /* Farouk */
  state.page = pageId; /* Farouk */
  document.querySelectorAll('.page').forEach(function(p) { /* Farouk */
    p.classList.toggle('active', p.id === 'page-' + pageId); /* Farouk */
  }); /* Farouk */
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function(a) { /* Farouk */
    a.classList.toggle('active', a.dataset.page === pageId); /* Farouk */
  }); /* Farouk */
  closeMobileMenu(); /* Farouk */
  window.scrollTo({top: 0, behavior: 'smooth'}); /* Farouk */
  if (pageId === 'quran') renderQuranGrid(); /* Farouk */
} /* Farouk */

document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function(a) { /* Farouk */
  a.addEventListener('click', function() { showPage(a.dataset.page); }); /* Farouk */
}); /* Farouk */

/* =============================================
   MOBILE MENU
   ============================================= */ /* Farouk */
function toggleMobileMenu() { /* Farouk */
  state.menuOpen = !state.menuOpen; /* Farouk */
  document.getElementById('mobile-menu').classList.toggle('open', state.menuOpen); /* Farouk */
  document.getElementById('btn-menu').textContent = state.menuOpen ? '✕' : '☰'; /* Farouk */
} /* Farouk */

function closeMobileMenu() { /* Farouk */
  state.menuOpen = false; /* Farouk */
  document.getElementById('mobile-menu').classList.remove('open'); /* Farouk */
  document.getElementById('btn-menu').textContent = '☰'; /* Farouk */
} /* Farouk */

document.getElementById('btn-menu').addEventListener('click', toggleMobileMenu); /* Farouk */

/* =============================================
   DARK MODE
   ============================================= */ /* Farouk */
function applyTheme() { /* Farouk */
  document.body.classList.toggle('dark', state.dark); /* Farouk */
  document.getElementById('btn-theme').textContent = state.dark ? '☀️' : '🌙'; /* Farouk */
  try { localStorage.setItem('sheikh-theme', state.dark ? 'dark' : 'light'); } catch(e) {} /* Farouk */
} /* Farouk */

(function() { /* Farouk */
  try { /* Farouk */
    var saved = localStorage.getItem('sheikh-theme'); /* Farouk */
    if (saved === 'dark') state.dark = true; /* Farouk */
    else if (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches) state.dark = true; /* Farouk */
  } catch(e) {} /* Farouk */
  applyTheme(); /* Farouk */
})(); /* Farouk */

document.getElementById('btn-theme').addEventListener('click', function() { /* Farouk */
  state.dark = !state.dark; /* Farouk */
  applyTheme(); /* Farouk */
}); /* Farouk */

/* =============================================
   TYPING ANIMATION
   ============================================= */ /* Farouk */
(function() { /* Farouk */
  var texts = ['قارئ القرآن الكريم', 'إمام المسجد', 'معلم القرآن', 'صوت القرآن الكريم']; /* Farouk */
  var el    = document.getElementById('typing-text'); /* Farouk */
  if (!el) return; /* Farouk */
  var idx = 0, charIdx = 0, deleting = false; /* Farouk */

  function tick() { /* Farouk */
    var current = texts[idx]; /* Farouk */
    if (!deleting && charIdx < current.length) { /* Farouk */
      el.textContent = current.slice(0, charIdx + 1); /* Farouk */
      charIdx++; /* Farouk */
      setTimeout(tick, 80); /* Farouk */
    } else if (!deleting && charIdx === current.length) { /* Farouk */
      setTimeout(function() { deleting = true; tick(); }, 1600); /* Farouk */
    } else if (deleting && charIdx > 0) { /* Farouk */
      el.textContent = current.slice(0, charIdx - 1); /* Farouk */
      charIdx--; /* Farouk */
      setTimeout(tick, 40); /* Farouk */
    } else { /* Farouk */
      deleting = false; /* Farouk */
      idx = (idx + 1) % texts.length; /* Farouk */
      setTimeout(tick, 200); /* Farouk */
    } /* Farouk */
  } /* Farouk */
  tick(); /* Farouk */
})(); /* Farouk */

/* =============================================
   PARTICLES
   ============================================= */ /* Farouk */
(function() { /* Farouk */
  var container = document.getElementById('hero-particles'); /* Farouk */
  if (!container) return; /* Farouk */
  for (var i = 0; i < 20; i++) { /* Farouk */
    var p = document.createElement('div'); /* Farouk */
    p.className = 'particle'; /* Farouk */
    p.style.right = (Math.random() * 100) + '%'; /* Farouk */
    p.style.bottom = '0'; /* Farouk */
    p.style.animationDuration = (8 + Math.random() * 12) + 's'; /* Farouk */
    p.style.animationDelay    = (Math.random() * 8) + 's'; /* Farouk */
    p.style.opacity = 0.3 + Math.random() * 0.4; /* Farouk */
    container.appendChild(p); /* Farouk */
  } /* Farouk */
})(); /* Farouk */

/* =============================================
   AUDIO PLAYER
   ============================================= */ /* Farouk */
function loadSurah(idx, autoPlay) { /* Farouk */
  state.surahIdx = idx; /* Farouk */
  var s = SURAHS[idx]; /* Farouk */
  var url = audioUrl(s.id); /* Farouk */

  /* Update display */ /* Farouk */
  if (playerTitle) playerTitle.textContent = 'سورة ' + s.name; /* Farouk */
  if (playerMeta)  playerMeta.textContent  = s.v + ' آية — ' + s.t; /* Farouk */
  if (playerDlLink) { /* Farouk */
    playerDlLink.href     = url; /* Farouk */
    playerDlLink.download = 'surah-' + s.name + '.mp3'; /* Farouk */
  } /* Farouk */

  /* Update quran page player too */ /* Farouk */
  var qt = document.getElementById('q-player-title'); /* Farouk */
  var qm = document.getElementById('q-player-meta'); /* Farouk */
  var qd = document.getElementById('q-player-dl'); /* Farouk */
  if (qt) qt.textContent = 'سورة ' + s.name; /* Farouk */
  if (qm) qm.textContent = s.v + ' آية — ' + s.t; /* Farouk */
  if (qd) { qd.href = url; qd.download = 'surah-' + s.name + '.mp3'; } /* Farouk */

  /* Reset audio */ /* Farouk */
  audio.src = url; /* Farouk */
  audio.load(); /* Farouk */
  state.playing = false; /* Farouk */
  updatePlayBtn(false, true); /* Farouk */
  if (seekRange) { seekRange.value = 0; updateSeekGradient(0, 100); } /* Farouk */
  if (timeEl)  timeEl.textContent  = '00:00'; /* Farouk */
  if (durEl)   durEl.textContent   = '--:--'; /* Farouk */

  /* Also update q-player seek/dl refs */ /* Farouk */
  var qs = document.getElementById('q-seek-range'); /* Farouk */
  if (qs) { qs.value = 0; updateSeekGradient(0, 100, true); } /* Farouk */

  if (autoPlay) { /* Farouk */
    audio.play().then(function() { state.playing = true; updatePlayBtn(true, false); }).catch(function(){}); /* Farouk */
  } /* Farouk */

  updatePlaylistHighlight(); /* Farouk */
  updateSurahCardHighlight(); /* Farouk */
} /* Farouk */

function updatePlayBtn(playing, loading) { /* Farouk */
  var btns = [document.getElementById('play-btn'), document.getElementById('q-play-btn')]; /* Farouk */
  btns.forEach(function(btn) { /* Farouk */
    if (!btn) return; /* Farouk */
    if (loading) { btn.innerHTML = '<div class="spinner"></div>'; return; } /* Farouk */
    btn.innerHTML = playing ? '⏸' : '▶'; /* Farouk */
  }); /* Farouk */
} /* Farouk */

function updateSeekGradient(current, duration, forQ) { /* Farouk */
  var pct = duration > 0 ? (current / duration * 100) : 0; /* Farouk */
  var grad = 'linear-gradient(to left, var(--primary) ' + pct + '%, var(--muted) ' + pct + '%)'; /* Farouk */
  if (!forQ && seekRange)  seekRange.style.background  = grad; /* Farouk */
  var qs = document.getElementById('q-seek-range'); /* Farouk */
  if (qs) qs.style.background = grad; /* Farouk */
} /* Farouk */

function formatTime(t) { /* Farouk */
  if (!isFinite(t) || isNaN(t)) return '00:00'; /* Farouk */
  var m = Math.floor(t / 60); /* Farouk */
  var s = Math.floor(t % 60); /* Farouk */
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s; /* Farouk */
} /* Farouk */

/* Audio events */ /* Farouk */
audio.addEventListener('timeupdate', function() { /* Farouk */
  var cur = audio.currentTime, dur = audio.duration || 0; /* Farouk */
  if (seekRange) seekRange.value = cur; /* Farouk */
  var qs = document.getElementById('q-seek-range'); /* Farouk */
  if (qs) qs.value = cur; /* Farouk */
  if (timeEl) timeEl.textContent = formatTime(cur); /* Farouk */
  var qt = document.getElementById('q-time-current'); /* Farouk */
  if (qt) qt.textContent = formatTime(cur); /* Farouk */
  updateSeekGradient(cur, dur); /* Farouk */
}); /* Farouk */

audio.addEventListener('loadedmetadata', function() { /* Farouk */
  var dur = audio.duration; /* Farouk */
  if (seekRange) { seekRange.max = dur; } /* Farouk */
  var qs = document.getElementById('q-seek-range'); /* Farouk */
  if (qs) qs.max = dur; /* Farouk */
  if (durEl) durEl.textContent = formatTime(dur); /* Farouk */
  var qd2 = document.getElementById('q-time-duration'); /* Farouk */
  if (qd2) qd2.textContent = formatTime(dur); /* Farouk */
}); /* Farouk */

audio.addEventListener('canplay', function() { /* Farouk */
  updatePlayBtn(state.playing, false); /* Farouk */
}); /* Farouk */

audio.addEventListener('ended', function() { /* Farouk */
  if (state.repeat) { /* Farouk */
    audio.currentTime = 0; /* Farouk */
    audio.play().catch(function(){}); /* Farouk */
  } else { /* Farouk */
    state.playing = false; /* Farouk */
    updatePlayBtn(false, false); /* Farouk */
    var nextIdx = Math.min(state.surahIdx + 1, SURAHS.length - 1); /* Farouk */
    loadSurah(nextIdx, true); /* Farouk */
  } /* Farouk */
}); /* Farouk */

/* Play/Pause toggle — works for both home and quran page buttons */ /* Farouk */
function togglePlay() { /* Farouk */
  if (state.playing) { /* Farouk */
    audio.pause(); /* Farouk */
    state.playing = false; /* Farouk */
    updatePlayBtn(false, false); /* Farouk */
  } else { /* Farouk */
    audio.play().then(function() { /* Farouk */
      state.playing = true; /* Farouk */
      updatePlayBtn(true, false); /* Farouk */
    }).catch(function(){}); /* Farouk */
  } /* Farouk */
} /* Farouk */

document.getElementById('play-btn').addEventListener('click', togglePlay); /* Farouk */
document.getElementById('q-play-btn') && document.getElementById('q-play-btn').addEventListener('click', togglePlay); /* Farouk */

/* Seek */ /* Farouk */
if (seekRange) { /* Farouk */
  seekRange.addEventListener('input', function() { /* Farouk */
    audio.currentTime = Number(seekRange.value); /* Farouk */
  }); /* Farouk */
} /* Farouk */

document.getElementById('q-seek-range') && document.getElementById('q-seek-range').addEventListener('input', function() { /* Farouk */
  audio.currentTime = Number(document.getElementById('q-seek-range').value); /* Farouk */
}); /* Farouk */

/* Volume */ /* Farouk */
if (volRange) { /* Farouk */
  volRange.addEventListener('input', function() { /* Farouk */
    state.volume  = Number(volRange.value); /* Farouk */
    audio.volume  = state.volume; /* Farouk */
    var qv = document.getElementById('q-vol-range'); /* Farouk */
    if (qv) qv.value = state.volume; /* Farouk */
  }); /* Farouk */
} /* Farouk */

document.getElementById('q-vol-range') && document.getElementById('q-vol-range').addEventListener('input', function() { /* Farouk */
  state.volume = Number(document.getElementById('q-vol-range').value); /* Farouk */
  audio.volume = state.volume; /* Farouk */
  if (volRange) volRange.value = state.volume; /* Farouk */
}); /* Farouk */

/* Prev / Next */ /* Farouk */
function prevSurah() { loadSurah(Math.max(state.surahIdx - 1, 0), state.playing); } /* Farouk */
function nextSurah() { loadSurah(Math.min(state.surahIdx + 1, SURAHS.length - 1), state.playing); } /* Farouk */

document.getElementById('btn-prev').addEventListener('click', prevSurah); /* Farouk */
document.getElementById('btn-next').addEventListener('click', nextSurah); /* Farouk */
document.getElementById('q-btn-prev') && document.getElementById('q-btn-prev').addEventListener('click', prevSurah); /* Farouk */
document.getElementById('q-btn-next') && document.getElementById('q-btn-next').addEventListener('click', nextSurah); /* Farouk */

/* Repeat */ /* Farouk */
function toggleRepeat(btnId) { /* Farouk */
  state.repeat = !state.repeat; /* Farouk */
  var btn = document.getElementById(btnId); /* Farouk */
  if (btn) btn.classList.toggle('active', state.repeat); /* Farouk */
  var otherBtnId = btnId === 'btn-repeat' ? 'q-btn-repeat' : 'btn-repeat'; /* Farouk */
  var other = document.getElementById(otherBtnId); /* Farouk */
  if (other) other.classList.toggle('active', state.repeat); /* Farouk */
} /* Farouk */

document.getElementById('btn-repeat').addEventListener('click', function() { toggleRepeat('btn-repeat'); }); /* Farouk */
document.getElementById('q-btn-repeat') && document.getElementById('q-btn-repeat').addEventListener('click', function() { toggleRepeat('q-btn-repeat'); }); /* Farouk */

/* Speed buttons */ /* Farouk */
document.querySelectorAll('.speed-btn').forEach(function(btn) { /* Farouk */
  btn.addEventListener('click', function() { /* Farouk */
    var s = Number(btn.dataset.speed); /* Farouk */
    state.speed = s; /* Farouk */
    audio.playbackRate = s; /* Farouk */
    document.querySelectorAll('.speed-btn').forEach(function(b) { /* Farouk */
      b.classList.toggle('active', Number(b.dataset.speed) === s); /* Farouk */
    }); /* Farouk */
  }); /* Farouk */
}); /* Farouk */

/* =============================================
   HOME PLAYLIST (first 10 surahs)
   ============================================= */ /* Farouk */
var homePlaylist = SURAHS.slice(0, 10); /* Farouk */

function updatePlaylistHighlight() { /* Farouk */
  document.querySelectorAll('.playlist-item').forEach(function(item) { /* Farouk */
    item.classList.toggle('active', Number(item.dataset.idx) === state.surahIdx); /* Farouk */
  }); /* Farouk */
} /* Farouk */

function updateSurahCardHighlight() { /* Farouk */
  document.querySelectorAll('.surah-card').forEach(function(card) { /* Farouk */
    var id = Number(card.dataset.id); /* Farouk */
    var active = SURAHS[state.surahIdx].id === id; /* Farouk */
    card.classList.toggle('playing', active); /* Farouk */
  }); /* Farouk */
  document.querySelectorAll('.surah-play-btn').forEach(function(btn) { /* Farouk */
    var id = Number(btn.dataset.id); /* Farouk */
    var active = SURAHS[state.surahIdx].id === id; /* Farouk */
    btn.classList.toggle('playing', active); /* Farouk */
    btn.textContent = active ? '⏸ يعزف الآن' : '▶ تشغيل'; /* Farouk */
  }); /* Farouk */
} /* Farouk */

/* Build home playlist */ /* Farouk */
(function() { /* Farouk */
  var container = document.getElementById('home-playlist'); /* Farouk */
  if (!container) return; /* Farouk */
  homePlaylist.forEach(function(s, i) { /* Farouk */
    var btn = document.createElement('button'); /* Farouk */
    btn.className = 'playlist-item'; /* Farouk */
    btn.dataset.idx = i; /* Farouk */
    btn.innerHTML = /* Farouk */
      '<div class="pl-item-left"><div class="pl-num">' + s.id + '</div><span>سورة ' + s.name + '</span></div>' + /* Farouk */
      '<span class="pl-verses">' + s.v + ' آية</span>'; /* Farouk */
    btn.addEventListener('click', function() { /* Farouk */
      loadSurah(i, true); /* Farouk */
    }); /* Farouk */
    container.appendChild(btn); /* Farouk */
  }); /* Farouk */
  updatePlaylistHighlight(); /* Farouk */
})(); /* Farouk */

/* =============================================
   QURAN PAGE
   ============================================= */ /* Farouk */
function renderQuranGrid() { /* Farouk */
  var search = state.qSearch.trim().toLowerCase(); /* Farouk */
  var filter = state.qFilter; /* Farouk */
  var list   = SURAHS.filter(function(s) { /* Farouk */
    var matchSearch = !search || s.name.includes(search) || s.en.toLowerCase().includes(search); /* Farouk */
    var matchFilter = filter === 'all' || s.t === filter; /* Farouk */
    return matchSearch && matchFilter; /* Farouk */
  }); /* Farouk */

  var grid = document.getElementById('surah-grid'); /* Farouk */
  if (!grid) return; /* Farouk */
  grid.innerHTML = ''; /* Farouk */

  var stats = document.getElementById('surah-stats'); /* Farouk */
  if (stats) stats.textContent = 'يعرض ' + list.length + ' سورة'; /* Farouk */

  list.forEach(function(s) { /* Farouk */
    var url   = audioUrl(s.id); /* Farouk */
    var isActive = SURAHS[state.surahIdx].id === s.id; /* Farouk */
    var card  = document.createElement('div'); /* Farouk */
    card.className = 'surah-card glow-card' + (isActive ? ' playing' : ''); /* Farouk */
    card.dataset.id = s.id; /* Farouk */
    card.innerHTML = /* Farouk */
      '<div class="surah-top">' + /* Farouk */
        '<div class="surah-info">' + /* Farouk */
          '<div class="surah-num">' + s.id + '</div>' + /* Farouk */
          '<div><div class="surah-name">سورة ' + s.name + '</div>' + /* Farouk */
          '<div class="surah-meta">' + s.v + ' آية — ' + s.t + '</div></div>' + /* Farouk */
        '</div>' + /* Farouk */
        '<span class="surah-badge ' + (s.t === 'مكية' ? 'badge-makki' : 'badge-madani') + '">' + s.t + '</span>' + /* Farouk */
      '</div>' + /* Farouk */
      '<div class="surah-actions">' + /* Farouk */
        '<button class="surah-play-btn' + (isActive ? ' playing' : '') + '" data-id="' + s.id + '">' + /* Farouk */
          (isActive ? '⏸ يعزف الآن' : '▶ تشغيل') + /* Farouk */
        '</button>' + /* Farouk */
        '<a class="surah-dl-btn" href="' + url + '" download="surah-' + s.name + '.mp3" title="تحميل">⬇</a>' + /* Farouk */
      '</div>'; /* Farouk */

    card.querySelector('.surah-play-btn').addEventListener('click', function() { /* Farouk */
      var idx = SURAHS.findIndex(function(x) { return x.id === s.id; }); /* Farouk */
      if (SURAHS[state.surahIdx].id === s.id && state.playing) { /* Farouk */
        togglePlay(); /* Farouk */
      } else { /* Farouk */
        loadSurah(idx, true); /* Farouk */
        if (state.page === 'quran') { /* Farouk */
          document.getElementById('q-player-section').classList.remove('hidden'); /* Farouk */
        } /* Farouk */
      } /* Farouk */
    }); /* Farouk */

    grid.appendChild(card); /* Farouk */
  }); /* Farouk */
} /* Farouk */

/* Quran search & filter */ /* Farouk */
document.getElementById('surah-search') && document.getElementById('surah-search').addEventListener('input', function() { /* Farouk */
  state.qSearch = this.value; /* Farouk */
  renderQuranGrid(); /* Farouk */
}); /* Farouk */

document.querySelectorAll('.filter-btn').forEach(function(btn) { /* Farouk */
  btn.addEventListener('click', function() { /* Farouk */
    state.qFilter = btn.dataset.filter; /* Farouk */
    document.querySelectorAll('.filter-btn').forEach(function(b) { /* Farouk */
      b.classList.toggle('active', b.dataset.filter === state.qFilter); /* Farouk */
    }); /* Farouk */
    renderQuranGrid(); /* Farouk */
  }); /* Farouk */
}); /* Farouk */

/* =============================================
   QUICK NAV CARDS (home page)
   ============================================= */ /* Farouk */
document.querySelectorAll('[data-goto]').forEach(function(el) { /* Farouk */
  el.addEventListener('click', function() { showPage(el.dataset.goto); }); /* Farouk */
}); /* Farouk */

/* =============================================
   INIT — load first surah on startup
   ============================================= */ /* Farouk */
loadSurah(0, false); /* Farouk */
showPage('home'); /* Farouk */
