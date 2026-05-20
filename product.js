/* ===================================================
   PRODUCT PAGE — product.js
   Gallery, variants, qty, add-to-cart, tabs, wishlist
=================================================== */

// ── GALLERY ───────────────────────────────────────
const heroImg = document.getElementById('pd-hero-img');
document.querySelectorAll('.pd-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    if (heroImg) {
      heroImg.style.opacity = '0';
      setTimeout(() => {
        heroImg.src = thumb.dataset.src;
        heroImg.style.opacity = '1';
      }, 180);
    }
  });
});

// ── VARIANTS ──────────────────────────────────────
let selectedSize  = '2 lbs';
let selectedPrice = 48;
let qty = 1;

document.querySelectorAll('.pd-variant').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pd-variant').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize  = btn.dataset.size;
    selectedPrice = parseFloat(btn.dataset.price);
    const sizeLabel = document.getElementById('selected-size');
    if (sizeLabel) sizeLabel.textContent = selectedSize;
  });
});

// ── QUANTITY ──────────────────────────────────────
const qtyVal   = document.getElementById('qty-val');
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus  = document.getElementById('qty-plus');

qtyMinus?.addEventListener('click', () => {
  if (qty > 1) { qty--; qtyVal.textContent = qty; }
});

qtyPlus?.addEventListener('click', () => {
  if (qty < 10) { qty++; qtyVal.textContent = qty; }
});

// ── ADD TO CART ────────────────────────────────────
const CART_SVG  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;
const CHECK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg>`;

const addBtn = document.getElementById('pd-add-cart');
addBtn?.addEventListener('click', () => {
  if (addBtn.disabled) return;

  // Loading state
  addBtn.disabled = true;
  addBtn.innerHTML = `<span class="spinner spinner-sm"></span> Adding…`;

  setTimeout(() => {
    for (let i = 0; i < qty; i++) {
      cart.add({
        id:    'dog-food',
        name:  'Organic Premium Dog Food',
        price: selectedPrice,
        size:  selectedSize,
        img:   'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=200&auto=format&fit=crop'
      });
    }

    // Success state
    addBtn.innerHTML = `${CHECK_SVG} Added to cart`;
    addBtn.classList.add('added');

    setTimeout(() => {
      addBtn.innerHTML = `${CART_SVG} Add to cart`;
      addBtn.classList.remove('added');
      addBtn.disabled = false;
    }, 2200);
  }, 420);
});

// Related product add buttons
document.querySelectorAll('.related-add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    cart.add({
      id:    btn.dataset.name.toLowerCase().replace(/\s+/g, '-'),
      name:  btn.dataset.name,
      price: parseFloat(btn.dataset.price),
      img:   btn.closest('.product-card')?.querySelector('img')?.src || ''
    });
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ Added';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.disabled = false;
    }, 1600);
  });
});

// ── WISHLIST ───────────────────────────────────────
const wishBtn = document.getElementById('pd-wishlist');
wishBtn?.addEventListener('click', () => {
  wishBtn.classList.toggle('active');
});

// ── TABS ───────────────────────────────────────────
document.querySelectorAll('.pd-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pd-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.pd-tab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById(`tab-${tab.dataset.tab}`);
    if (panel) panel.classList.add('active');
  });
});
