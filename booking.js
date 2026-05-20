/* ===================================================
   BOOKING FLOW — booking.js
   Manages: step nav, selections, calendar, slots, validation, summary
=================================================== */

const state = {
  step: 1,
  totalSteps: 5,
  service: null, serviceName: '', servicePrice: 0, serviceDuration: '',
  petType: null, petSize: null, petAge: null, petName: '',
  date: null, time: null,
  firstName: '', lastName: '', email: '', phone: '', breed: '', notes: ''
};

// ── Calendar state ──
let calYear, calMonth;

const today = new Date();
calYear  = today.getFullYear();
calMonth = today.getMonth();

// ── DOM refs ──
const steps      = document.querySelectorAll('.bk-step');
const lines      = document.querySelectorAll('.bk-step-line');
const panels     = document.querySelectorAll('.bk-panel');
const nextBtn    = document.getElementById('bk-next');
const backBtn    = document.getElementById('bk-back');
const stepInfo   = document.getElementById('bk-step-info');
const footerNav  = document.getElementById('bk-footer-nav');

// ── Selection strip DOM refs ──
const selStrip    = document.getElementById('bk-sel-strip');
const selService  = document.getElementById('bk-sel-service');
const selSvcText  = document.getElementById('bk-sel-svc-text');
const selSvcPrice = document.getElementById('bk-sel-svc-price');
const selArrow1   = document.getElementById('bk-sel-arrow1');
const selPet      = document.getElementById('bk-sel-pet');
const selPetText  = document.getElementById('bk-sel-pet-text');
const selArrow2   = document.getElementById('bk-sel-arrow2');
const selWhen     = document.getElementById('bk-sel-when');
const selWhenText = document.getElementById('bk-sel-when-text');

// ──────────────────────────────────────────────────────────
// STEP NAVIGATION
// ──────────────────────────────────────────────────────────

function goTo(n) {
  if (n < 1 || n > state.totalSteps + 1) return;

  state.step = n;

  // Update panels
  panels.forEach(p => p.classList.remove('active'));
  const targetPanel = document.getElementById(n <= state.totalSteps ? `bk-step-${n}` : 'bk-success');
  if (targetPanel) targetPanel.classList.add('active');

  // Update stepper
  steps.forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i + 1 < n)      s.classList.add('done');
    if (i + 1 === n)     s.classList.add('active');
  });

  lines.forEach((l, i) => {
    l.classList.toggle('done', i + 1 < n);
  });

  // Update nav buttons
  backBtn.style.visibility = n > 1 ? 'visible' : 'hidden';
  stepInfo.textContent = n <= state.totalSteps ? `Step ${n} of ${state.totalSteps}` : '';
  footerNav.style.display = n > state.totalSteps ? 'none' : '';

  if (n === state.totalSteps) {
    nextBtn.textContent = '';
    nextBtn.innerHTML = 'Confirm booking <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>';
  } else if (n < state.totalSteps) {
    nextBtn.innerHTML = 'Continue <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>';
  }

  // Step-specific setup
  if (n === 5) renderSummary();
  if (n > state.totalSteps) renderSuccess();

  updateSelStrip(n);
  validateStep(n);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateStep(n) {
  let valid = false;
  switch (n) {
    case 1: valid = !!state.service; break;
    case 2: valid = !!state.petType && !!state.petAge; break;
    case 3: valid = !!state.date && !!state.time; break;
    case 4: valid = !!(state.firstName && state.lastName && state.email && state.phone); break;
    case 5: valid = true; break;
    default: valid = false;
  }
  const wasDisabled = nextBtn.disabled;
  nextBtn.disabled = !valid;
  if (wasDisabled && valid) {
    nextBtn.classList.remove('bk-next-pulse');
    void nextBtn.offsetWidth;
    nextBtn.classList.add('bk-next-pulse');
    nextBtn.addEventListener('animationend', () => nextBtn.classList.remove('bk-next-pulse'), { once: true });
  }
}

nextBtn.addEventListener('click', () => {
  if (nextBtn.disabled) return;

  if (state.step === 4) {
    gatherDetails();
    if (!validateDetails()) return;
  }

  if (state.step === state.totalSteps) {
    confirmBooking();
    return;
  }

  goTo(state.step + 1);
});

backBtn.addEventListener('click', () => goTo(state.step - 1));

// ──────────────────────────────────────────────────────────
// STEP 1 — SERVICE SELECTION
// ──────────────────────────────────────────────────────────

document.querySelectorAll('.bk-service-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.bk-service-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    state.service      = card.dataset.service;
    state.serviceName  = card.dataset.name;
    state.servicePrice = parseFloat(card.dataset.price);
    state.serviceDuration = card.dataset.duration;
    validateStep(1);
  });
});

// ──────────────────────────────────────────────────────────
// STEP 2 — PET TYPE / SIZE / AGE
// ──────────────────────────────────────────────────────────

const sizeGroup = document.getElementById('bk-size-group');

document.querySelectorAll('.bk-type-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bk-type-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.petType = btn.dataset.type;
    // Show size selector only for dog or cat
    sizeGroup.style.display = (state.petType === 'dog' || state.petType === 'cat') ? '' : 'none';
    if (state.petType !== 'dog' && state.petType !== 'cat') state.petSize = 'n/a';
    validateStep(2);
  });
});

document.querySelectorAll('.bk-size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bk-size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.petSize = btn.dataset.size;
  });
});

document.querySelectorAll('.bk-age-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bk-age-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.petAge = btn.dataset.age;
    validateStep(2);
  });
});

document.getElementById('bk-pet-name').addEventListener('input', e => {
  state.petName = e.target.value.trim();
});

// ──────────────────────────────────────────────────────────
// STEP 3 — CALENDAR
// ──────────────────────────────────────────────────────────

const MONTH_NAMES = ['January','February','March','April','May','June',
  'July','August','September','October','November','December'];

// Simulate some booked-out dates (for realism)
function isFullyBooked(date) {
  const day = date.getDate();
  return day % 11 === 0; // every 11th day is "fully booked"
}

function renderCalendar() {
  const grid   = document.getElementById('bk-cal-grid');
  const label  = document.getElementById('bk-month-label');
  label.textContent = `${MONTH_NAMES[calMonth]} ${calYear}`;
  grid.innerHTML = '';

  const firstDay = new Date(calYear, calMonth, 1);
  const lastDay  = new Date(calYear, calMonth + 1, 0);

  // Monday-first grid: get offset (0=Mon … 6=Sun)
  let startOffset = (firstDay.getDay() + 6) % 7;

  // Prev month trailing days
  for (let i = 0; i < startOffset; i++) {
    const d = new Date(calYear, calMonth, -startOffset + 1 + i);
    const btn = makeDay(d, true);
    grid.appendChild(btn);
  }

  // Current month days
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const date = new Date(calYear, calMonth, d);
    const btn = makeDay(date, false);
    grid.appendChild(btn);
  }

  // Fill remaining cells
  const filled = startOffset + lastDay.getDate();
  const remaining = (7 - (filled % 7)) % 7;
  for (let i = 1; i <= remaining; i++) {
    const d = new Date(calYear, calMonth + 1, i);
    const btn = makeDay(d, true);
    grid.appendChild(btn);
  }
}

function makeDay(date, otherMonth) {
  const btn = document.createElement('button');
  btn.classList.add('bk-cal-day');
  btn.textContent = date.getDate();

  const isToday = date.toDateString() === today.toDateString();
  const isPast  = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const isSun   = date.getDay() === 0;
  const isBooked = isFullyBooked(date);

  if (otherMonth)       btn.classList.add('other-month');
  if (isToday)          btn.classList.add('today');

  if (isPast || isSun || isBooked || otherMonth) {
    btn.disabled = true;
  } else {
    // Check if this is the selected date
    if (state.date && date.toDateString() === state.date.toDateString()) {
      btn.classList.add('selected');
    }
    btn.addEventListener('click', () => selectDate(date));
  }

  return btn;
}

function selectDate(date) {
  state.date = date;
  state.time = null;
  renderCalendar(); // re-render to update selection
  renderSlots(date);
  validateStep(3);
}

function renderSlots(date) {
  const slotsEmpty  = document.getElementById('bk-slots-empty');
  const slotsWrap   = document.getElementById('bk-slots');

  slotsEmpty.style.display  = 'none';
  slotsWrap.style.display   = '';

  // Brief shimmer before rendering slots
  slotsWrap.innerHTML = `<div class="bk-slots-loading">
    <div class="bk-slots-loading__label skeleton"></div>
    <div class="bk-slots-loading__row">${'<div class="bk-slots-loading__slot skeleton"></div>'.repeat(6)}</div>
    <div class="bk-slots-loading__label skeleton" style="margin-top:8px"></div>
    <div class="bk-slots-loading__row">${'<div class="bk-slots-loading__slot skeleton"></div>'.repeat(6)}</div>
  </div>`;

  setTimeout(() => {
    slotsWrap.innerHTML = `
      <p class="bk-slots__day" id="bk-slots-day"></p>
      <div class="bk-slots__group">
        <span class="bk-slots__label">Morning</span>
        <div class="bk-slot-grid" id="bk-morning-slots"></div>
      </div>
      <div class="bk-slots__group">
        <span class="bk-slots__label">Afternoon</span>
        <div class="bk-slot-grid" id="bk-afternoon-slots"></div>
      </div>`;

    document.getElementById('bk-slots-day').textContent =
      date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    const morning   = ['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM'];
    const afternoon = ['1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM'];
    const seed = date.getDate();
    const fullMorn = [morning[seed % 6]];
    const fullAftn = [afternoon[seed % 8], afternoon[(seed + 3) % 8]];
    const fewMorn  = [morning[(seed + 2) % 6]];
    const fewAftn  = [afternoon[(seed + 1) % 8]];

    const mg = document.getElementById('bk-morning-slots');
    const ag = document.getElementById('bk-afternoon-slots');
    morning.forEach(t   => mg.appendChild(makeSlot(t, fullMorn.includes(t), fewMorn.includes(t))));
    afternoon.forEach(t => ag.appendChild(makeSlot(t, fullAftn.includes(t), fewAftn.includes(t))));
  }, 280);
}

function makeSlot(time, full, few) {
  const btn = document.createElement('button');
  btn.classList.add('bk-slot');
  btn.textContent = time;
  if (full) {
    btn.disabled = true;
    btn.title = 'Fully booked';
  } else {
    if (few) btn.classList.add('bk-slot--few');
    if (state.time === time) btn.classList.add('selected');
    btn.addEventListener('click', () => {
      document.querySelectorAll('.bk-slot').forEach(s => s.classList.remove('selected'));
      btn.classList.add('selected');
      state.time = time;
      validateStep(3);
    });
  }
  return btn;
}

document.getElementById('bk-prev-month').addEventListener('click', () => {
  calMonth--;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
});

document.getElementById('bk-next-month').addEventListener('click', () => {
  calMonth++;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  renderCalendar();
});

// ──────────────────────────────────────────────────────────
// STEP 4 — DETAILS (gather on continue)
// ──────────────────────────────────────────────────────────

// ── FIELD VALIDATION HELPERS ──────────────────────
function setFieldState(id, valid, msg) {
  const input = document.getElementById(id);
  const field = input?.closest('.bk-field-group') || input?.parentElement;
  if (!field) return;
  field.classList.toggle('has-error', !valid);
  field.classList.toggle('has-success', valid && !!input.value.trim());
  const errEl = field.querySelector('.bk-field-error');
  if (errEl) errEl.textContent = valid ? '' : msg;
}

function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function isPhone(v) { return v.replace(/\D/g, '').length >= 7; }

['bk-first','bk-last','bk-email','bk-phone'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;

  el.addEventListener('input', () => {
    state.firstName = document.getElementById('bk-first').value.trim();
    state.lastName  = document.getElementById('bk-last').value.trim();
    state.email     = document.getElementById('bk-email').value.trim();
    state.phone     = document.getElementById('bk-phone').value.trim();
    validateStep(4);
  });

  // Blur: show inline error only after user leaves field
  el.addEventListener('blur', () => {
    const v = el.value.trim();
    if (id === 'bk-first')  setFieldState(id, !!v, 'First name is required');
    if (id === 'bk-last')   setFieldState(id, !!v, 'Last name is required');
    if (id === 'bk-email')  setFieldState(id, isEmail(v), v ? 'Enter a valid email address' : 'Email is required');
    if (id === 'bk-phone')  setFieldState(id, isPhone(v), v ? 'Enter a valid phone number' : 'Phone is required');
  });
});

function gatherDetails() {
  state.firstName = document.getElementById('bk-first').value.trim();
  state.lastName  = document.getElementById('bk-last').value.trim();
  state.email     = document.getElementById('bk-email').value.trim();
  state.phone     = document.getElementById('bk-phone').value.trim();
  state.breed     = document.getElementById('bk-breed').value.trim();
  state.notes     = document.getElementById('bk-notes').value.trim();
}

function validateDetails() {
  gatherDetails();
  let ok = true;
  if (!state.firstName) { setFieldState('bk-first', false, 'First name is required'); ok = false; }
  if (!state.lastName)  { setFieldState('bk-last',  false, 'Last name is required');  ok = false; }
  if (!isEmail(state.email)) { setFieldState('bk-email', false, state.email ? 'Enter a valid email' : 'Email is required'); ok = false; }
  if (!isPhone(state.phone)) { setFieldState('bk-phone', false, state.phone ? 'Enter a valid phone' : 'Phone is required'); ok = false; }
  return ok;
}

// ──────────────────────────────────────────────────────────
// STEP 5 — SUMMARY
// ──────────────────────────────────────────────────────────

function renderSummary() {
  document.getElementById('sum-service').textContent  = state.serviceName || '—';
  document.getElementById('sum-price').textContent    = state.servicePrice ? `From $${state.servicePrice}` : '—';
  document.getElementById('sum-duration').textContent = state.serviceDuration || '';

  const petParts = [
    state.petName ? `"${state.petName}" —` : '',
    capitalize(state.petType || ''),
    state.petSize && state.petSize !== 'n/a' ? `(${capitalize(state.petSize)})` : '',
    capitalize(state.petAge || '')
  ].filter(Boolean).join(' ');
  document.getElementById('sum-pet').textContent = petParts || '—';

  if (state.date && state.time) {
    const d = state.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    document.getElementById('sum-datetime').textContent = `${d} at ${state.time}`;
  }

  document.getElementById('sum-name').textContent  = `${state.firstName} ${state.lastName}`.trim() || '—';
  document.getElementById('sum-email').textContent = state.email || '—';
  document.getElementById('sum-phone').textContent = state.phone || '—';
  document.getElementById('sum-total').textContent = state.servicePrice ? `From $${state.servicePrice}` : '—';
}

// ──────────────────────────────────────────────────────────
// CONFIRM WITH LOADING STATE
// ──────────────────────────────────────────────────────────

function confirmBooking() {
  const original = nextBtn.innerHTML;
  nextBtn.disabled = true;
  nextBtn.innerHTML = '<span class="spinner spinner-sm"></span> Confirming…';

  setTimeout(() => {
    nextBtn.innerHTML = original;
    goTo(6);
  }, 1400);
}

// ──────────────────────────────────────────────────────────
// SUCCESS
// ──────────────────────────────────────────────────────────

function renderSuccess() {
  document.getElementById('success-email').textContent = state.email || 'your email';
  const d = state.date ? state.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '';
  const petStr = [capitalize(state.petType), state.petName ? `"${state.petName}"` : ''].filter(Boolean).join(' ');
  document.getElementById('success-details').innerHTML =
    `<strong>${state.serviceName}</strong><br>${d ? d + ' at ' + state.time + '<br>' : ''}${petStr}<br>${state.firstName} ${state.lastName} &nbsp;·&nbsp; ${state.phone}`;
  selStrip && (selStrip.style.display = 'none');
}

// ──────────────────────────────────────────────────────────
// UTILS
// ──────────────────────────────────────────────────────────

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

// ──────────────────────────────────────────────────────────
// SELECTION STRIP
// ──────────────────────────────────────────────────────────

function show(el) { if (el) el.style.display = ''; }
function hide(el) { if (el) el.style.display = 'none'; }

function updateSelStrip(n) {
  if (!selStrip) return;
  if (n <= 1 || n > state.totalSteps) { hide(selStrip); return; }
  show(selStrip);

  // Service chip
  if (state.serviceName) {
    selSvcText.textContent  = state.serviceName;
    selSvcPrice.textContent = `From $${state.servicePrice}`;
    show(selService);
  } else {
    hide(selService);
  }

  // Pet chip (visible from step 3+)
  if (n >= 3 && state.petType) {
    const petLabel = [capitalize(state.petType), state.petName ? `"${state.petName}"` : ''].filter(Boolean).join(' · ');
    selPetText.textContent = petLabel;
    show(selArrow1);
    show(selPet);
  } else {
    hide(selArrow1);
    hide(selPet);
  }

  // Date/time chip (visible from step 4+)
  if (n >= 4 && state.date && state.time) {
    const dateShort = state.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    selWhenText.textContent = `${dateShort} · ${state.time}`;
    show(selArrow2);
    show(selWhen);
  } else {
    hide(selArrow2);
    hide(selWhen);
  }
}

// ── INIT ──
renderCalendar();
goTo(1);
