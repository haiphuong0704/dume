/* ===================================================
   SHOP PAGE — shop.js
   Category filter, cart wiring, add-to-cart animation
=================================================== */

// ── CATEGORY FILTER ───────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    const filter = btn.dataset.filter;

    productCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
      // Reset animation so cards re-enter smoothly
      if (match) {
        card.style.animation = 'none';
        void card.offsetWidth;
        card.style.animation = '';
      }
    });
  });
});

// Set aria-pressed on init
filterBtns.forEach(btn => {
  btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
});

// ── CART BUTTONS ──────────────────────────────────
const CART_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;
const CHECK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><polyline points="20 6 9 17 4 12"/></svg>`;

document.querySelectorAll('.cart-btn[data-id]').forEach(btn => {
  // Stamp initial icon
  if (!btn.querySelector('svg')) {
    btn.innerHTML = `${CART_ICON} ${btn.textContent.trim() || 'Add to cart'}`;
  }

  btn.addEventListener('click', () => {
    if (btn.disabled) return;

    const card = btn.closest('.product-card');
    cart.add({
      id:    btn.dataset.id,
      name:  btn.dataset.name,
      price: parseFloat(btn.dataset.price),
      img:   btn.dataset.img || card?.querySelector('img')?.src || ''
    });

    // Success state
    const original = btn.innerHTML;
    btn.innerHTML = `${CHECK_ICON} Added`;
    btn.classList.add('btn-added');
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = original;
      btn.classList.remove('btn-added');
      btn.disabled = false;
    }, 1800);
  });
});
