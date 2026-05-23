/* ===============================================
   PORTFOLIO — INTERNATIONALISATION (i18n)
   Supports: English (en) | Indonesian (id)
   =============================================== */

(() => {
  'use strict';

  /* ---------- Translations ---------- */
  const translations = {
    en: {
      /* Nav */
      'nav.home':       'Home',
      'nav.about':      'About',
      'nav.experience': 'Experience',
      'nav.skills':     'Skills',
      'nav.projects':   'Projects',
      'nav.contact':    'Contact',

      /* Hero */
      'hero.available': 'Available for work',
      'hero.greeting':  "I'm",
      'hero.role':      'a <em>Full Stack</em> Developer.',
      'hero.text':      'I build polished web & mobile applications with clean architecture, modern technologies, and a keen eye for user experience.',
      'hero.cta1':      'View Projects',
      'hero.cta2':      'Get in Touch',

      /* About */
      'about.title':      'About',
      'about.titleSpan':  'Me',
      'about.bio1':       '<strong>Computer Science</strong> graduate from <strong>Tarumanagara University</strong> with experience in web and mobile application development. Worked as a <strong>Full-Stack Developer</strong> at <strong>BSSN</strong>, building an end-to-end IT Security Assessment platform including vulnerability management, ticketing, and reporting systems.',
      'about.bio2':       'Also developed mobile applications with geolocation tracking, face recognition, and internal portal systems for organizational use.',
      'about.stat1label': 'Computer Science',
      'about.stat2label': 'Projects',
      'about.stat2sub':   'Web, Mobile, Desktop & Games',
      'about.stat3label': 'Technologies',
      'about.stat3sub':   'Full Stack Development',

      /* Experience */
      'exp.title':      'Work',
      'exp.titleSpan':  'Experience',
      'exp.current':    'Current',
      'exp.completed':  'Completed',
      'exp1.role':      'Full Stack Developer',
      'exp1.company':   'Badan Siber dan Sandi Negara (BSSN)',
      'exp1.date':      'Nov 2025 — May 2026',
      'exp1.task1':     'Built an end-to-end IT Security Assessment platform — managing PSE, asset inventory, and scheduling.',
      'exp1.task2':     'Developed a vulnerability management & ticketing system for tracking findings, severity classification, and remediation.',
      'exp1.task3':     'Implemented centralized reporting, multi-user collaboration with RBAC, and real-time notifications.',
      'exp2.role':      'Mobile Developer',
      'exp2.company':   'The House of Representatives, Republic of Indonesia (DPR RI)',
      'exp2.date':      'Feb 2024 — Jun 2024',
      'exp2.task1':     'Developed a mobile attendance app with geolocation tracking and face recognition.',
      'exp2.task2':     'Built a portal app displaying agendas, profiles, dashboards, news, and announcements for DPR members & staff.',

      /* Skills */
      'skills.title':     'Tech',
      'skills.titleSpan': 'Stack',

      /* Projects */
      'projects.title':     'Featured',
      'projects.titleSpan': 'Projects',

      /* Filter */
      'filter.all': 'All',

      /* Card Tags */
      'tag.mobile':      'Mobile App',
      'tag.website':     'Website',
      'tag.webapp':      'Web App',
      'tag.desktop':     'Desktop',
      'tag.webplatform': 'Web Platform',
      'tag.mobileapp':   'Mobile',
      'tag.game':        'Game',

      /* Project Descriptions */
      'proj1.desc':  'Mobile portal for DPR RI members & ASN parliament staff.',
      'proj2.desc':  'Company profile website for CV Star Ayres Indonesia.',
      'proj3.desc':  'Attendance app with facial recognition & geolocation tracking.',
      'proj4.desc':  'Game top-up platform built with Node.js, MongoDB, and EJS.',
      'proj5.desc':  'Online food ordering with Java Spring & MySQL.',
      'proj6.desc':  'Comprehensive hospital management with JavaFX and MySQL.',
      'proj7.desc':  'Gaming top-up platform with modern UI.',
      'proj8.desc':  'Social media app built with Dart & Flutter.',
      'proj9.desc':  'Unity-based 2D game built with C#.',
      'proj10.desc': 'Movie search app powered by TMDB API.',
      'proj11.desc': 'JavaFX desktop application for game top-ups.',
      'proj12.desc': 'Unity game development project.',

      /* CV */
      'cv.title': 'Download My',
      'cv.text':  'Get a detailed overview of my skills, experience, and qualifications in a single document.',

      /* Contact */
      'contact.title':     "Let's",
      'contact.titleSpan': 'Connect',
      'contact.lead':      "Have a project in mind or just want to say hello? I'd love to hear from you.",
      'contact.name':      'Your Name',
      'contact.email':     'Email Address',
      'contact.message':   'Message',
      'contact.send':      'Send Message',

      /* Footer */
      'footer.text': 'Built with ☕ and passion.',
    },

    id: {
      /* Nav */
      'nav.home':       'Beranda',
      'nav.about':      'Tentang',
      'nav.experience': 'Pengalaman',
      'nav.skills':     'Keahlian',
      'nav.projects':   'Proyek',
      'nav.contact':    'Kontak',

      /* Hero */
      'hero.available': 'Tersedia untuk bekerja',
      'hero.greeting':  'Saya',
      'hero.role':      'seorang Developer <em>Full Stack</em>.',
      'hero.text':      'Saya membangun aplikasi web & mobile yang rapi dengan arsitektur bersih, teknologi modern, dan perhatian penuh pada pengalaman pengguna.',
      'hero.cta1':      'Lihat Proyek',
      'hero.cta2':      'Hubungi Saya',

      /* About */
      'about.title':      'Tentang',
      'about.titleSpan':  'Saya',
      'about.bio1':       'Lulusan <strong>Teknik Informatika</strong> dari <strong>Universitas Tarumanagara</strong> dengan pengalaman di bidang pengembangan aplikasi web dan mobile. Pernah bekerja sebagai <strong>Full-Stack Developer</strong> di <strong>BSSN</strong>, membangun platform IT Security Assessment secara end-to-end mencakup manajemen kerentanan, tiket, dan pelaporan.',
      'about.bio2':       'Juga mengembangkan aplikasi mobile dengan pelacakan geolokasi, pengenalan wajah, dan sistem portal internal untuk keperluan organisasi.',
      'about.stat1label': 'Teknik Informatika',
      'about.stat2label': 'Proyek',
      'about.stat2sub':   'Web, Mobile, Desktop & Game',
      'about.stat3label': 'Teknologi',
      'about.stat3sub':   'Pengembangan Full Stack',

      /* Experience */
      'exp.title':      'Pengalaman',
      'exp.titleSpan':  'Kerja',
      'exp.current':    'Aktif',
      'exp.completed':  'Selesai',
      'exp1.role':      'Full Stack Developer',
      'exp1.company':   'Badan Siber dan Sandi Negara (BSSN)',
      'exp1.date':      'Nov 2025 — Mei 2026',
      'exp1.task1':     'Membangun platform IT Security Assessment — mengelola PSE, inventaris aset, penjadwalan, dan koordinasi multi-organisasi.',
      'exp1.task2':     'Mengembangkan sistem manajemen kerentanan & tiket untuk melacak temuan, klasifikasi tingkat keparahan, dan remediasi.',
      'exp1.task3':     'Mengimplementasikan pelaporan terpusat, kolaborasi multi-pengguna dengan RBAC, dan notifikasi real-time.',
      'exp2.role':      'Mobile Developer',
      'exp2.company':   'Dewan Perwakilan Rakyat Republik Indonesia (DPR RI)',
      'exp2.date':      'Feb 2024 — Jun 2024',
      'exp2.task1':     'Mengembangkan aplikasi absensi mobile dengan fitur geolocation dan pengenalan wajah.',
      'exp2.task2':     'Membangun aplikasi portal yang menampilkan agenda, profil, dasbor, berita, dan pengumuman untuk anggota dan staf DPR.',

      /* Skills */
      'skills.title':     'Teknologi',
      'skills.titleSpan': 'yang Digunakan',

      /* Projects */
      'projects.title':     'Proyek',
      'projects.titleSpan': 'Unggulan',

      /* Filter */
      'filter.all': 'Semua',

      /* Card Tags */
      'tag.mobile':      'Aplikasi Mobile',
      'tag.website':     'Website',
      'tag.webapp':      'Aplikasi Web',
      'tag.desktop':     'Desktop',
      'tag.webplatform': 'Platform Web',
      'tag.mobileapp':   'Mobile',
      'tag.game':        'Game',

      /* Project Descriptions */
      'proj1.desc':  'Portal mobile untuk anggota DPR RI dan staf ASN parlemen.',
      'proj2.desc':  'Website company profile untuk CV Star Ayres Indonesia.',
      'proj3.desc':  'Aplikasi absensi dengan pengenalan wajah & pelacakan geolokasi.',
      'proj4.desc':  'Platform top-up game dibangun dengan Node.js, MongoDB, dan EJS.',
      'proj5.desc':  'Sistem pemesanan makanan online dengan Java Spring & MySQL.',
      'proj6.desc':  'Manajemen rumah sakit komprehensif dengan JavaFX dan MySQL.',
      'proj7.desc':  'Platform top-up game dengan tampilan UI modern.',
      'proj8.desc':  'Aplikasi media sosial dibangun dengan Dart & Flutter.',
      'proj9.desc':  'Game 2D berbasis Unity dibangun dengan C#.',
      'proj10.desc': 'Aplikasi pencarian film berbasis TMDB API.',
      'proj11.desc': 'Aplikasi desktop JavaFX untuk top-up game.',
      'proj12.desc': 'Proyek pengembangan game Unity.',

      /* CV */
      'cv.title': 'Unduh',
      'cv.text':  'Dapatkan gambaran lengkap mengenai keterampilan, pengalaman, dan kualifikasi saya dalam satu dokumen.',

      /* Contact */
      'contact.title':     'Mari',
      'contact.titleSpan': 'Terhubung',
      'contact.lead':      'Punya proyek atau sekadar ingin menyapa? Saya senang mendengar dari Anda.',
      'contact.name':      'Nama Anda',
      'contact.email':     'Alamat Email',
      'contact.message':   'Pesan',
      'contact.send':      'Kirim Pesan',

      /* Footer */
      'footer.text': 'Dibuat dengan ☕ dan semangat.',
    }
  };

  /* Keys that render HTML (innerHTML) instead of plain text */
  const htmlKeys = new Set([
    'hero.role', 'about.bio1', 'about.bio2'
  ]);

  /* ---------- State ---------- */
  const root      = document.documentElement;
  const savedLang = localStorage.getItem('lang') || 'en';
  let currentLang = savedLang;

  /* ---------- Apply translations ---------- */
  function applyLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;
      if (htmlKeys.has(key)) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    /* html attributes */
    root.setAttribute('lang', lang);
    root.setAttribute('data-lang', lang);

    /* Update toggle labels */
    const display  = lang === 'en' ? 'EN' : 'ID';
    const labelEl  = document.getElementById('langLabel');
    const labelElM = document.getElementById('langLabelMobile');
    if (labelEl)  labelEl.textContent  = display;
    if (labelElM) labelElM.textContent = display;

    currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  /* ---------- Toggle ---------- */
  function toggleLang() {
    applyLang(currentLang === 'en' ? 'id' : 'en');
  }

  /* ---------- Bind ---------- */
  document.getElementById('langToggle')?.addEventListener('click', toggleLang);
  document.getElementById('langToggleMobile')?.addEventListener('click', toggleLang);

  /* ---------- Init ---------- */
  applyLang(currentLang);

})();
