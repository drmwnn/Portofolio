/* ===============================================
   PORTFOLIO — MAIN JAVASCRIPT
   =============================================== */

(() => {
  'use strict';

  /* ---------- DOM ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const header     = $('#header');
  const hamburger  = $('#hamburger');
  const mobileNav  = $('#mobileNav');
  const mobileClose = $('#mobileClose');
  const themeToggle = $('#themeToggle');
  const themeToggleMobile = $('#themeToggleMobile');
  const themeIcon  = themeToggle?.querySelector('i');
  const themeIconMobile = themeToggleMobile?.querySelector('i');
  const navLinks   = $$('.nav__link');
  const sections   = $$('section[id]');
  const contactForm = $('#contactForm');

  /* =========================================
     THEME
     ========================================= */
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');

  if (saved) {
    root.setAttribute('data-theme', saved);
    updateIcon(saved);
  }

  function toggleTheme() {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  }

  themeToggle?.addEventListener('click', toggleTheme);
  themeToggleMobile?.addEventListener('click', toggleTheme);

  function updateIcon(theme) {
    const cls = theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
    if (themeIcon) themeIcon.className = cls;
    if (themeIconMobile) themeIconMobile.className = cls;
  }

  /* =========================================
     HEADER SCROLL + AUTO-HIDE + BACK TO TOP
     ========================================= */
  const backToTop = $('#backToTop');
  let lastScrollY = 0;
  let ticking = false;

  function onScroll() {
    const sy = window.scrollY;

    if (sy > 40) header?.classList.add('scrolled');
    else header?.classList.remove('scrolled');

    if (sy > 300 && sy > lastScrollY + 10 && !mobileNav?.classList.contains('open')) {
      header?.classList.add('header--hidden');
    } else if (sy < lastScrollY - 10 || sy <= 300) {
      header?.classList.remove('header--hidden');
    }

    lastScrollY = sy;

    if (sy > 600) backToTop?.classList.add('visible');
    else backToTop?.classList.remove('visible');

    const scrollPos = window.pageYOffset + 200;
    for (const sec of sections) {
      const top = sec.offsetTop;
      const h   = sec.offsetHeight;
      const id  = sec.id;
      if (scrollPos >= top && scrollPos < top + h) {
        navLinks.forEach(l => l.classList.remove('active'));
        $(`.nav__link[href="#${id}"]`)?.classList.add('active');
      }
    }
  }
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* =========================================
     MOBILE NAV
     ========================================= */
  $$('.mobile-nav__link').forEach((link, i) => {
    link.style.transitionDelay = `${0.05 + i * 0.05}s`;
  });

  function openMobileNav() {
    hamburger?.classList.add('active');
    mobileNav?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    hamburger?.classList.remove('active');
    mobileNav?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    mobileNav?.classList.contains('open') ? closeMobileNav() : openMobileNav();
  });

  mobileClose?.addEventListener('click', closeMobileNav);

  $$('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileNav();
      const target = $(link.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* =========================================
     SMOOTH SCROLL (all anchors)
     ========================================= */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href === '#') return window.scrollTo({ top: 0, behavior: 'smooth' });
      $(href)?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* =========================================
     MIXITUP
     ========================================= */
  let mixer;
  const grid = $('#projectGrid');
  if (grid && typeof mixitup !== 'undefined') {
    mixer = mixitup(grid, {
      selectors: { target: '.card' },
      animation: {
        duration: 350,
        nudge: true,
        reverseOut: false,
        effects: 'fade translateY(16px) stagger(30ms)'
      }
    });
  }

  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /* =========================================
     CONTACT FORM → Google Sheets
     ========================================= */
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwzW0i80mQWTN4HIhfAF3Led2z9Q6NjUUWWhkgOMSDC1xBJLm3mgL08MJShbPL8hKPHvw/exec';

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    if (!fd.get('nama') || !fd.get('email') || !fd.get('pesan')) {
      return swalTheme('error', 'Oops...', 'Please fill in all fields.');
    }

    Swal.fire({
      title: 'Sending…',
      allowOutsideClick: false,
      showConfirmButton: false,
      ...swalColors(),
      willOpen: () => Swal.showLoading()
    });

    fetch(scriptURL, { method: 'POST', body: fd })
      .then(() => {
        swalTheme('success', 'Sent!', "Thank you! I'll get back to you soon.");
        contactForm.reset();
      })
      .catch(() => swalTheme('error', 'Error', 'Something went wrong. Try again later.'));
  });

  function swalColors() {
    const s = getComputedStyle(document.documentElement);
    return {
      background: s.getPropertyValue('--c-surface').trim(),
      color: s.getPropertyValue('--c-heading').trim(),
    };
  }
  function swalTheme(icon, title, text) {
    Swal.fire({ icon, title, text, confirmButtonColor: '#6366f1', ...swalColors() });
  }

  /* =========================================
     SCROLL REVEAL (Intersection Observer)
     ========================================= */
  function initReveal() {
    const targets = [
      '.hero__content', '.hero__visual',
      '.about__text', '.info-card',
      '.skill-category',
      '.card',
      '.contact__info', '.contact__form',
      '.contact__link',
      '.section-title',
    ].join(',');

    $$(targets).forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal').forEach(el => observer.observe(el));
  }

  requestAnimationFrame(() => requestAnimationFrame(initReveal));

  /* =========================================
     SUBTLE TILT ON CARDS
     ========================================= */
  $$('.info-card, .skill-category').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* =========================================
     CONSOLE
     ========================================= */
  console.log('%c👋 Hello!', 'font-size:20px;color:#818cf8;font-weight:bold');
  console.log('%cLet\'s build something great together.', 'font-size:14px;color:#a78bfa');
  console.log('%c📧 asep.darmawan879@gmail.com', 'font-size:12px;color:#34d399');

})();