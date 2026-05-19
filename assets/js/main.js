/* ============================================================
   HONEYBUTTER FARM — Main JavaScript
   ============================================================ */

/* ── Navigation: scroll-triggered background ─────────────── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

/* ── Navigation: mobile hamburger drawer ─────────────────── */
(function () {
  const hamburger = document.querySelector('.nav__hamburger');
  const drawer    = document.querySelector('.nav__drawer');
  const closeBtn  = document.querySelector('.nav__drawer-close');
  if (!hamburger || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });
})();

/* ── Hero background: subtle Ken-Burns entrance ──────────── */
(function () {
  const bg = document.querySelector('.hero__bg');
  if (!bg) return;
  requestAnimationFrame(function () {
    bg.classList.add('loaded');
  });
})();

/* ── Lazy-load images: fade in on entry ──────────────────── */
(function () {
  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  if (!lazyImgs.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        img.addEventListener('load', function () {
          img.classList.add('loaded');
        }, { once: true });
        if (img.complete) img.classList.add('loaded');
        observer.unobserve(img);
      });
    }, { rootMargin: '200px' });

    lazyImgs.forEach(function (img) { observer.observe(img); });
  } else {
    lazyImgs.forEach(function (img) {
      if (img.dataset.src) img.src = img.dataset.src;
      img.classList.add('loaded');
    });
  }
})();

/* ── Gallery Lightbox ────────────────────────────────────── */
(function () {
  const lightbox  = document.querySelector('.lightbox');
  const lbImg     = document.querySelector('.lightbox__img');
  const closeBtn  = document.querySelector('.lightbox__close');
  const prevBtn   = document.querySelector('.lightbox__prev');
  const nextBtn   = document.querySelector('.lightbox__next');
  const items     = Array.from(document.querySelectorAll('.gallery__item'));
  if (!lightbox || !lbImg || !items.length) return;

  let current = 0;

  function getSrc(item) {
    const img = item.querySelector('img');
    return img ? (img.src || img.dataset.src) : null;
  }

  function show(index) {
    current = (index + items.length) % items.length;
    const src = getSrc(items[current]);
    if (src) {
      lbImg.src = src;
      lbImg.alt = items[current].querySelector('img')
        ? items[current].querySelector('img').alt
        : '';
    }
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function hide() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  items.forEach(function (item, i) {
    item.addEventListener('click', function () { show(i); });
  });

  if (closeBtn) closeBtn.addEventListener('click', hide);
  if (prevBtn)  prevBtn.addEventListener('click', function () { show(current - 1); });
  if (nextBtn)  nextBtn.addEventListener('click', function () { show(current + 1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) hide();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     hide();
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
