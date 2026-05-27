/* ===================================================
   GLOBAL — global.js
   Navbar · Mobile menu · Fade-up · Active nav
   Toast system · Newsletter · Floating chat widget
=================================================== */

// ── PAGE TRANSITIONS ─────────────────────────────
// PRIMARY: View Transitions API is active in Chrome 126+.
// CSS @view-transition + view-transition-name: navbar handles
// everything — no JS needed. Return early immediately.
//
// FALLBACK: browsers without VT support use the pcs-in system.
// @supports not (view-transition-name: none) in CSS already
// guards the content opacity rules to fallback browsers only.
(function () {
  // Primary path: View Transitions API present — CSS handles navigation.
  // Do not intercept clicks, do not manage content visibility.
  if ('startViewTransition' in document) return;

  // Fallback path — no View Transitions API.
  var STANDALONE = ['booking.html', 'appointment-booking.html', 'membership.html'];
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var de = document.documentElement;

  if (STANDALONE.indexOf(page) !== -1) {
    de.classList.add('pcs-in');
    return;
  }

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var raf = window.requestAnimationFrame || function (fn) { setTimeout(fn, 16); };

  if (prefersReduced) {
    de.classList.add('pcs-in');
  } else {
    raf(function () { raf(function () { de.classList.add('pcs-in'); }); });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (
      !href ||
      href.indexOf('://') !== -1 ||
      href.indexOf('//') === 0 ||
      href.charAt(0) === '#' ||
      href.indexOf('mailto:') === 0 ||
      href.indexOf('tel:') === 0 ||
      href.indexOf('javascript:') === 0 ||
      link.target === '_blank' ||
      link.hasAttribute('download') ||
      e.ctrlKey || e.metaKey || e.shiftKey || e.altKey
    ) return;

    e.preventDefault();
    if (!prefersReduced) de.classList.remove('pcs-in');
    setTimeout(function () { window.location.href = href; }, prefersReduced ? 0 : 160);
  });
})();

// ── NAVBAR SCROLL SHADOW ──────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar(); // apply correct shadow state immediately on load (e.g. browser back/restore)
}

// ── ACTIVE NAV LINK ───────────────────────────────
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar__nav a, .navbar__mobile-menu a').forEach(a => {
  const href = a.getAttribute('href')?.split('/').pop()?.split('?')[0] || '';
  if (href === currentPath || (currentPath === 'index.html' && href === '') || (currentPath === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
// Highlight dropdown parent when a child link is active
document.querySelectorAll('.navbar__nav li.has-dropdown').forEach(li => {
  if (li.querySelector('a.active')) {
    const parentLink = li.querySelector(':scope > a');
    if (parentLink) parentLink.classList.add('is-active');
  }
});

// ── MOBILE MENU TOGGLE ───────────────────────────
const navToggle  = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      navToggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}

// ── MOBILE SUBMENU ACCORDION ─────────────────────
document.querySelectorAll('.mobile-has-submenu').forEach(btn => {
  btn.addEventListener('click', () => {
    const sub = btn.nextElementSibling;
    if (!sub?.classList.contains('mobile-submenu')) return;
    const isOpen = sub.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });
});
// Auto-expand and mark active when a child page is current
document.querySelectorAll('.mobile-submenu').forEach(sub => {
  if (sub.querySelector('a.active')) {
    const trigger = sub.previousElementSibling;
    if (trigger?.classList.contains('mobile-has-submenu')) {
      trigger.classList.add('is-active', 'open');
      sub.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  }
});

// ── FADE-UP SCROLL ANIMATION ─────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ── TOAST SYSTEM ──────────────────────────────────
const PCS = window.PCS || {};
window.PCS = PCS;

PCS.toast = (() => {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'false');
    document.body.appendChild(container);
  }

  const ICONS = {
    default: `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
    success: `<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    error:   `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info:    `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  };

  function show(message, type = 'default', duration = 3200) {
    const el = document.createElement('div');
    el.className = `toast${type !== 'default' ? ` toast-${type}` : ''}`;
    el.setAttribute('role', 'status');
    el.innerHTML = `${ICONS[type] || ICONS.default}<span>${message}</span>`;
    container.appendChild(el);

    const leave = () => {
      el.classList.add('toast-leaving');
      el.addEventListener('animationend', () => el.remove(), { once: true });
    };
    setTimeout(leave, duration);
    return { dismiss: leave };
  }

  return {
    show,
    success: (msg, dur) => show(msg, 'success', dur),
    error:   (msg, dur) => show(msg, 'error', dur),
    info:    (msg, dur) => show(msg, 'info', dur),
  };
})();

// ── LANGUAGE SELECTOR ────────────────────────────
(function () {
  const navToggle = document.querySelector('.navbar__toggle');
  if (!navToggle) return; // Skip minimal-header pages (booking, appointment-booking)

  const LANG_KEY = 'pcs_lang';
  const saved = localStorage.getItem(LANG_KEY) || 'EN';

  let sel = document.getElementById('langSel');
  if (!sel) {
    // Fallback: create and inject for any page without static HTML
    sel = document.createElement('div');
    sel.className = 'lang-sel';
    sel.id = 'langSel';
    sel.innerHTML = `
    <button class="lang-sel__btn" aria-haspopup="listbox" aria-expanded="false" aria-label="Select language">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span class="lang-sel__cur">${saved}</span>
      <svg class="lang-sel__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="lang-sel__drop" role="listbox" aria-label="Language options">
      <button class="lang-sel__opt${saved === 'EN' ? ' lang-sel__opt--active' : ''}" data-lang="EN" role="option" aria-selected="${saved === 'EN'}">EN — English</button>
      <button class="lang-sel__opt${saved === 'VI' ? ' lang-sel__opt--active' : ''}" data-lang="VI" role="option" aria-selected="${saved === 'VI'}">VI — Tiếng Việt</button>
    </div>
  `;
    navToggle.parentElement.insertBefore(sel, navToggle);
  } else {
    // Static HTML present — sync localStorage state without touching the DOM
    const curEl = sel.querySelector('.lang-sel__cur');
    if (curEl) curEl.textContent = saved;
    sel.querySelectorAll('.lang-sel__opt').forEach(o => {
      o.classList.toggle('lang-sel__opt--active', o.dataset.lang === saved);
      o.setAttribute('aria-selected', o.dataset.lang === saved);
    });
  }

  const btn  = sel.querySelector('.lang-sel__btn');
  const drop = sel.querySelector('.lang-sel__drop');
  const cur  = sel.querySelector('.lang-sel__cur');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = sel.classList.toggle('lang-sel--open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  drop.querySelectorAll('.lang-sel__opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.dataset.lang;
      localStorage.setItem(LANG_KEY, lang);
      cur.textContent = lang;
      drop.querySelectorAll('.lang-sel__opt').forEach(o => {
        o.classList.toggle('lang-sel__opt--active', o.dataset.lang === lang);
        o.setAttribute('aria-selected', o.dataset.lang === lang);
      });
      sel.classList.remove('lang-sel--open');
      btn.setAttribute('aria-expanded', 'false');
      PCS.i18n?.apply(lang);
    });
  });

  document.addEventListener('click', () => {
    if (sel.classList.contains('lang-sel--open')) {
      sel.classList.remove('lang-sel--open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && sel.classList.contains('lang-sel--open')) {
      sel.classList.remove('lang-sel--open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
})();

// ── FLOATING CHAT WIDGET ─────────────────────────
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const excluded = ['booking', 'appointment-booking.html'];
  if (excluded.includes(page)) return;

  const widget = document.createElement('div');
  widget.className = 'fcw';
  widget.setAttribute('aria-label', 'Contact us');
  widget.innerHTML = `
    <div class="fcw__popup" role="menu">
      <a class="fcw__link fcw__link--whatsapp" href="https://wa.me/847816047387" target="_blank" rel="noopener" role="menuitem" aria-label="Chat on WhatsApp">
        <span class="fcw__link-icon">
          <img src="assets/icons/whatsapp.svg" width="18" height="18" alt="" aria-hidden="true">
        </span>
        WhatsApp
      </a>
      <a class="fcw__link fcw__link--zalo" href="https://zalo.me/07816047387" target="_blank" rel="noopener" role="menuitem" aria-label="Chat on Zalo">
        <span class="fcw__link-icon">
          <img src="assets/icons/zalo.svg" width="18" height="18" alt="" aria-hidden="true">
        </span>
        Zalo
      </a>
      <a class="fcw__link fcw__link--messenger" href="https://m.me/petcarespa" target="_blank" rel="noopener" role="menuitem" aria-label="Chat on Messenger">
        <span class="fcw__link-icon">
          <img src="assets/icons/messenger.svg" width="18" height="18" alt="" aria-hidden="true">
        </span>
        Messenger
      </a>
    </div>
    <button class="fcw__trigger" aria-label="Open chat options" aria-expanded="false" aria-haspopup="true">
      <svg class="fcw__icon-chat" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <svg class="fcw__icon-close" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  `;
  document.body.appendChild(widget);

  const trigger = widget.querySelector('.fcw__trigger');
  trigger.addEventListener('click', () => {
    const isOpen = widget.classList.toggle('fcw--open');
    trigger.setAttribute('aria-expanded', isOpen);
    trigger.setAttribute('aria-label', isOpen ? 'Close chat options' : 'Open chat options');
    document.querySelector('.btt')?.classList.toggle('btt--fcw-open', isOpen);
  });

  document.addEventListener('click', e => {
    if (widget.classList.contains('fcw--open') && !widget.contains(e.target)) {
      widget.classList.remove('fcw--open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.setAttribute('aria-label', 'Open chat options');
      document.querySelector('.btt')?.classList.remove('btt--fcw-open');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && widget.classList.contains('fcw--open')) {
      widget.classList.remove('fcw--open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.setAttribute('aria-label', 'Open chat options');
      trigger.focus();
      document.querySelector('.btt')?.classList.remove('btt--fcw-open');
    }
  });
})();

// ── NEWSLETTER FORMS ──────────────────────────────
document.querySelectorAll('.sf-nl, form[data-newsletter]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"], .sf-nl-input');
    const btn   = form.querySelector('button[type="submit"], .sf-nl-btn');
    if (!input?.value.trim()) return;

    const original = btn?.innerHTML;
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner spinner-sm"></span>';
    }

    setTimeout(() => {
      input.value = '';
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = original;
      }
      PCS.toast.success('You\'re on the list! We\'ll be in touch.');
    }, 900);
  });
});

// ── PROMO POPUP (Home page only) ──────────────────
(function () {
  // ── DEV MODE ──────────────────────────────────
  // Set to true  → popup fires on every page reload (no localStorage blocking).
  // Set to false → production behaviour (cooldown / "don't show again" respected).
  // Flip to false (or remove) before going live.
  const DEV_ALWAYS_SHOW_PROMO = false;

  // Guard: prevent double initialization if script is ever loaded twice
  if (window.__pcsPromoInit) return;
  window.__pcsPromoInit = true;

  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (page !== 'index.html' && page !== '') return;

  // ── Config ─────────────────────────────────────
  const PROMO_DELAY  = 2500;  // ms before popup appears
  const DISMISS_DAYS = 1;     // days to hide after "Maybe later"  (24 h)
  const CLAIM_DAYS   = 30;    // days to hide after claiming offer

  // ── Storage keys ───────────────────────────────
  const LS_TS       = 'pcs_promo_ts';       // timestamp when cooldown started
  const LS_DUR      = 'pcs_promo_dur';      // cooldown duration in ms
  const LS_DISABLED = 'pcs_promo_disabled'; // permanent "don't show again" flag

  // ── Gate checks (bypassed when DEV_ALWAYS_SHOW_PROMO = true) ──────────────
  if (!DEV_ALWAYS_SHOW_PROMO) {
    if (localStorage.getItem(LS_DISABLED)) return;
    const lastTs  = parseInt(localStorage.getItem(LS_TS)  || '0', 10);
    const lastDur = parseInt(localStorage.getItem(LS_DUR) || '0', 10) || (DISMISS_DAYS * 864e5);
    if (lastTs && Date.now() - lastTs < lastDur) return;
    if (lastTs) { localStorage.removeItem(LS_TS); localStorage.removeItem(LS_DUR); }
  }

  // ── DOM ────────────────────────────────────────
  const popup = document.getElementById('promoPopup');
  if (!popup) return;

  // ── Scroll lock (iOS-safe) ─────────────────────
  let _scrollY = 0;
  function lockScroll() {
    _scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top      = `-${_scrollY}px`;
    document.body.style.width    = '100%';
  }
  function unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top      = '';
    document.body.style.width    = '';
    window.scrollTo(0, _scrollY);
  }

  // ── Focus trap ─────────────────────────────────
  const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let _prevFocus  = null;

  function handleKeydown(e) {
    if (e.key === 'Escape') { maybeLater(); return; }
    if (e.key !== 'Tab') return;

    const els   = Array.from(popup.querySelectorAll(FOCUSABLE)).filter(el => el.offsetWidth > 0);
    const first = els[0];
    const last  = els[els.length - 1];
    if (!els.length) return;

    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }

  // ── Open ───────────────────────────────────────
  function openPopup() {
    _prevFocus = document.activeElement;
    popup.style.display = 'flex';
    lockScroll();

    // Double rAF: ensures display:flex is painted before transition begins
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        popup.classList.add('promo-popup--open');
        popup.setAttribute('aria-hidden', 'false');
        (document.getElementById('promoClose') ?? popup).focus();
        document.addEventListener('keydown', handleKeydown);
      });
    });
  }

  // ── Close ──────────────────────────────────────
  function closePopup() {
    popup.classList.remove('promo-popup--open');
    popup.setAttribute('aria-hidden', 'true');
    unlockScroll();
    document.removeEventListener('keydown', handleKeydown);
    // Wait for CSS transition (0.38 s) before hiding
    setTimeout(() => {
      popup.style.display = 'none';
      _prevFocus?.focus();
    }, 420);
  }

  // ── Dismiss actions ────────────────────────────
  function maybeLater() {
    if (!DEV_ALWAYS_SHOW_PROMO) {
      localStorage.setItem(LS_TS,  Date.now().toString());
      localStorage.setItem(LS_DUR, (DISMISS_DAYS * 864e5).toString());
    }
    closePopup();
  }

  function disableForever() {
    if (!DEV_ALWAYS_SHOW_PROMO) {
      localStorage.setItem(LS_DISABLED, 'true');
    }
    closePopup();
  }

  function claimOffer() {
    if (!DEV_ALWAYS_SHOW_PROMO) {
      localStorage.setItem(LS_TS,  Date.now().toString());
      localStorage.setItem(LS_DUR, (CLAIM_DAYS * 864e5).toString());
    }
    closePopup();
  }

  // ── Schedule show ──────────────────────────────
  setTimeout(openPopup, PROMO_DELAY);

  // ── Event listeners ────────────────────────────
  document.getElementById('promoClose')?.addEventListener('click',    maybeLater);
  document.getElementById('promoSkip')?.addEventListener('click',     maybeLater);
  document.getElementById('promoBackdrop')?.addEventListener('click', maybeLater);
  document.getElementById('promoDisable')?.addEventListener('click',  disableForever);

  document.getElementById('promoForm')?.addEventListener('submit', e => {
    e.preventDefault();
    claimOffer();
    PCS.toast.success('Offer claimed! Your 20% discount code is on its way.');
  });
})();

// ── ADD TO CART BUTTONS ───────────────────────
document.querySelectorAll('.p-card__add').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.closest('.p-card')?.querySelector('.p-card__name')?.textContent?.trim() || 'Item';
    PCS.toast.success(`${name} added to cart.`);
    btn.textContent = '✓';
    btn.style.background = 'var(--mint, #68D4BF)';
    btn.style.color = '#fff';
    btn.style.borderColor = 'var(--mint, #68D4BF)';
    setTimeout(() => {
      btn.textContent = '+';
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 1800);
  });
});

// ── PAGE LOADER ───────────────────────────────
(function () {
  if (document.getElementById('pcs-loader')) return;

  const loader = document.createElement('div');
  loader.id = 'pcs-loader';
  loader.innerHTML = '<div class="pcs-loader__bar"></div>';
  document.body.appendChild(loader);

  // Show loader on same-page navigation clicks
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#' || href.indexOf('://') !== -1 ||
        href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 ||
        link.getAttribute('target') === '_blank' || link.hasAttribute('download')) return;
    loader.classList.add('pcs-loader--active');
  });

  // Hide loader when page fully shows (handles back/forward cache too)
  window.addEventListener('pageshow', function () {
    loader.classList.remove('pcs-loader--active');
    loader.classList.add('pcs-loader--done');
    setTimeout(function () { loader.classList.remove('pcs-loader--done'); }, 600);
  });

  // Immediate hide if page already loaded
  if (document.readyState === 'complete') {
    loader.classList.add('pcs-loader--done');
    setTimeout(function () { loader.classList.remove('pcs-loader--done'); }, 600);
  }
})();

// ── BACK TO TOP ───────────────────────────────
(function () {
  // Guard: prevent duplicate if global.js is ever loaded twice
  if (document.querySelector('.btt')) return;

  const btn = document.createElement('button');
  btn.className = 'btt';
  btn.setAttribute('aria-label', 'Scroll back to top');
  btn.setAttribute('type', 'button');
  btn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polyline points="18 15 12 9 6 15"/></svg>`;
  document.body.appendChild(btn);

  // Show/hide based on scroll depth
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        btn.classList.toggle('btt--visible', window.scrollY > 360);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  // Run once on load in case page loads mid-scroll
  onScroll();

  // Scroll to top — with graceful fallback for older browsers
  btn.addEventListener('click', () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (_) {
      window.scrollTo(0, 0);
    }
  });
})();

// ── IMAGE LAZY REVEAL ─────────────────────────────
// Adds a smooth opacity fade-in to content images on load.
// Only activates when JS is present (.js class on <html>).
(function () {
  const SELECTORS = [
    '.blg-card img', '.blg-featured img', '.blg-editorial img',
    '.blg-stories img', '.blg-reel-card img', '.blg-list-card img',
    '.p-card img', '.abt-hero__image img', '.abt-story__image img',
    '.abt-team-card__img img', '.abt-film__thumb img',
    '.pm-hero__photo img', '.pm-why__photo img', '.pm-kitchen__photo img',
    '.pm-video__thumb img', '.pm-packaging__photo img',
    '.pm-ingredients__showcase-img img', '.pm-nutrition__image img',
    '.blg-nl-image img',
  ].join(', ');

  document.querySelectorAll(SELECTORS).forEach(img => {
    img.classList.add('img-reveal');
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('img-reveal--loaded');
    } else {
      img.addEventListener('load',  () => img.classList.add('img-reveal--loaded'), { once: true });
      img.addEventListener('error', () => img.classList.add('img-reveal--loaded'), { once: true });
    }
  });
})();

// ── SMOOTH CARD INTERACTION ELEVATION ─────────────
// Adds the .card-interactive class to any card that doesn't already
// have a dedicated hover transform so they all get consistent lift.
(function () {
  const cards = document.querySelectorAll(
    '.abt-value-card, .pm-delivery-step, .pm-process-step'
  );
  cards.forEach(c => c.classList.add('card-interactive'));
})();

// ── FAQ ACCORDION ──────────────────────────────────
(function () {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(function (item) {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    // Wire up initial ARIA state
    const isInitiallyActive = item.classList.contains('active');
    btn.setAttribute('aria-expanded', isInitiallyActive ? 'true' : 'false');
    if (!answer.id) answer.id = 'faq-ans-' + Math.random().toString(36).slice(2, 7);
    btn.setAttribute('aria-controls', answer.id);

    btn.addEventListener('click', function () {
      const wasActive = item.classList.contains('active');

      // Collapse all
      items.forEach(function (el) {
        el.classList.remove('active');
        const b = el.querySelector('.faq-question');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      // Expand this one if it wasn't already open
      if (!wasActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard: Space / Enter already fire click on <button>; also support Escape
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        btn.blur();
      }
    });
  });
})();

// ── LAZY IMAGE FADE-IN ─────────────────────────────
// Marks lazy images as .loaded after they finish loading so CSS can fade them in
(function () {
  var lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  lazyImgs.forEach(function (img) {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function () { img.classList.add('loaded'); });
      img.addEventListener('error', function () { img.classList.add('loaded'); }); // don't block on error
    }
  });
})();

// ── GLOBAL CART INJECTION ──────────────────────────
(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (['booking', 'appointment-booking.html', 'membership.html'].includes(page)) return;
  var actions = document.querySelector('.navbar__actions');
  if (!actions) return;
  if (document.getElementById('cartToggle')) return; // already present (e.g. shop.html)

  // Inject cart button before the language selector (after Book Appointment)
  var langSel  = actions.querySelector('#langSel');
  var navToggle = actions.querySelector('.navbar__toggle');
  var anchor   = langSel || navToggle;
  var cartBtn = document.createElement('button');
  cartBtn.className = 'navbar__cart';
  cartBtn.id = 'cartToggle';
  cartBtn.setAttribute('aria-label', 'Open cart');
  cartBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>' +
      '<line x1="3" y1="6" x2="21" y2="6"/>' +
      '<path d="M16 10a4 4 0 0 1-8 0"/>' +
    '</svg>' +
    '<span class="navbar__cart-count" id="cartCount" style="display:none">0</span>';
  actions.insertBefore(cartBtn, anchor);

  // Inject cart overlay + drawer
  var tpl = document.createElement('template');
  tpl.innerHTML =
    '<div class="cart-overlay" id="cartOverlay"></div>' +
    '<aside class="cart-drawer" id="cartDrawer" aria-label="Shopping cart">' +
      '<div class="cart-drawer__header">' +
        '<h3>Your Cart <span class="cart-drawer__count" id="drawerCount"></span></h3>' +
        '<button class="cart-drawer__close" id="cartClose" aria-label="Close cart">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="cart-drawer__body" id="cartBody">' +
        '<div class="cart-drawer__empty" id="cartEmpty">' +
          '<div class="cart-empty-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>' +
          '<p class="cart-empty-title">Your cart is empty</p>' +
          '<p class="cart-empty-sub">Add some products from our shop!</p>' +
          '<a href="/shop" class="btn btn-primary btn-sm">Browse Shop</a>' +
        '</div>' +
        '<ul class="cart-items" id="cartItems"></ul>' +
      '</div>' +
      '<div class="cart-drawer__footer" id="cartFooter" style="display:none">' +
        '<div class="cart-drawer__subtotal">' +
          '<span>Subtotal</span>' +
          '<strong id="cartTotal">0 ₫</strong>' +
        '</div>' +
        '<button class="btn btn-primary" id="cartCheckout">Checkout</button>' +
      '</div>' +
    '</aside>';
  document.body.appendChild(tpl.content);

  // Dynamically load cart.js
  var s = document.createElement('script');
  s.src = 'cart.js?v=12';
  document.body.appendChild(s);
})();
