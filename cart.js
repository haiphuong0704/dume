/* ===================================================
   CART — cart.js
   Shared cart state, drawer UI, localStorage, ARIA.
   Include on any page that has a cart drawer.
=================================================== */

function formatVND(amount) {
  return Math.round(amount).toLocaleString('vi-VN') + '&#8363;';
}

// ── STATE ──────────────────────────────────────────
const cart = (() => {
  let items = JSON.parse(localStorage.getItem('pcs_cart') || '[]');

  function save() {
    localStorage.setItem('pcs_cart', JSON.stringify(items));
  }

  function add(product) {
    const existing = items.find(i => i.id === product.id && i.size === (product.size || ''));
    if (existing) {
      existing.qty = Math.min(existing.qty + 1, 10);
    } else {
      items.push({ ...product, qty: 1, size: product.size || '' });
    }
    save();
    render();
    open();
    pulseBadge();
  }

  function remove(id, size) {
    items = items.filter(i => !(i.id === id && i.size === size));
    save();
    render();
  }

  function updateQty(id, size, delta) {
    const item = items.find(i => i.id === id && i.size === size);
    if (!item) return;
    item.qty = Math.max(1, Math.min(item.qty + delta, 10));
    save();
    render();
  }

  function total() {
    return items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function count() {
    return items.reduce((sum, i) => sum + i.qty, 0);
  }

  function open()  { openDrawer(); }
  function close() { closeDrawer(); }

  return { add, remove, updateQty, total, count, items: () => items, save, render: () => render() };
})();

// ── BADGE PULSE ────────────────────────────────────
function pulseBadge() {
  const badge = document.getElementById('cartCount');
  if (!badge) return;
  badge.classList.remove('pulse');
  void badge.offsetWidth; // reflow
  badge.classList.add('pulse');
  badge.addEventListener('animationend', () => badge.classList.remove('pulse'), { once: true });
}

// ── DRAWER TOGGLE ──────────────────────────────────
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer  = document.getElementById('cartDrawer');
const cartToggle  = document.getElementById('cartToggle');
const cartClose   = document.getElementById('cartClose');

function openDrawer() {
  if (!cartDrawer) return;
  cartDrawer.classList.add('open');
  cartOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
  cartDrawer.setAttribute('aria-hidden', 'false');
  cartClose?.focus();
}

function closeDrawer() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove('open');
  cartOverlay?.classList.remove('open');
  document.body.style.overflow = '';
  cartDrawer.setAttribute('aria-hidden', 'true');
  cartToggle?.focus();
}

cartToggle?.addEventListener('click', openDrawer);
cartClose?.addEventListener('click', closeDrawer);
cartOverlay?.addEventListener('click', closeDrawer);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && cartDrawer?.classList.contains('open')) {
    closeDrawer();
  }
});

// ── RENDER ─────────────────────────────────────────
function render() {
  const items     = cart.items();
  const total     = cart.total();
  const countVal  = cart.count();
  const body      = document.getElementById('cartBody');
  const footer    = document.getElementById('cartFooter');
  const empty     = document.getElementById('cartEmpty');
  const itemsList = document.getElementById('cartItems');
  const totalEl   = document.getElementById('cartTotal');
  const countEl   = document.getElementById('cartCount');
  const drawerCount = document.getElementById('drawerCount');
  const checkoutBtn = document.getElementById('cartCheckout');

  if (!body) return;

  const hasItems = items.length > 0;

  if (empty)      empty.style.display    = hasItems ? 'none' : '';
  if (itemsList)  itemsList.style.display = hasItems ? '' : 'none';
  if (footer)     footer.style.display   = hasItems ? '' : 'none';

  if (countEl) {
    countEl.style.display = countVal > 0 ? '' : 'none';
    countEl.textContent   = countVal > 9 ? '9+' : countVal;
    countEl.setAttribute('aria-label', `${countVal} item${countVal !== 1 ? 's' : ''} in cart`);
  }

  if (drawerCount) {
    drawerCount.textContent = countVal > 0
      ? `· ${countVal} item${countVal !== 1 ? 's' : ''}`
      : '';
  }

  if (totalEl) totalEl.innerHTML = formatVND(total);

  if (checkoutBtn) {
    checkoutBtn.disabled = !hasItems;
  }

  if (!itemsList) return;

  // Rebuild list
  itemsList.innerHTML = '';
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.setAttribute('data-id', item.id);
    el.setAttribute('data-size', item.size || '');

    const img = item.img || 'assets/images/products/product-grooming.jpg';

    el.innerHTML = `
      <div class="cart-item__img">
        <img src="${img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="cart-item__info">
        <p class="cart-item__name">${item.name}${item.size ? `<span class="cart-item__size">${item.size}</span>` : ''}</p>
        <div class="cart-item__qty-row">
          <button class="cart-item__qty-btn" data-action="dec"
            aria-label="Decrease quantity of ${item.name}"
            data-id="${item.id}" data-size="${item.size || ''}"
            ${item.qty <= 1 ? 'disabled' : ''}>−</button>
          <span class="cart-item__qty-num" aria-live="polite">${item.qty}</span>
          <button class="cart-item__qty-btn" data-action="inc"
            aria-label="Increase quantity of ${item.name}"
            data-id="${item.id}" data-size="${item.size || ''}"
            ${item.qty >= 10 ? 'disabled' : ''}>+</button>
        </div>
        <button class="cart-item__remove"
          aria-label="Remove ${item.name} from cart"
          data-id="${item.id}" data-size="${item.size || ''}">Remove</button>
      </div>
      <p class="cart-item__price">${formatVND(item.price * item.qty)}</p>
    `;
    itemsList.appendChild(el);
  });

  // Event delegation
  itemsList.querySelectorAll('.cart-item__qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const delta = btn.dataset.action === 'inc' ? 1 : -1;
      cart.updateQty(btn.dataset.id, btn.dataset.size, delta);
    });
  });

  itemsList.querySelectorAll('.cart-item__remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.cart-item');
      row?.classList.add('removing');
      row?.addEventListener('transitionend', () => {
        cart.remove(btn.dataset.id, btn.dataset.size);
      }, { once: true });
    });
  });
}

// ── CHECKOUT ──────────────────────────────────────
document.addEventListener('click', e => {
  if (e.target.id !== 'cartCheckout' && !e.target.closest('#cartCheckout')) return;
  if (typeof PCS !== 'undefined' && PCS.toast) {
    PCS.toast.info('Secure checkout coming soon. Your cart has been saved.');
  }
});

// ── INIT ───────────────────────────────────────────
if (cartDrawer) cartDrawer.setAttribute('aria-hidden', 'true');
render();
