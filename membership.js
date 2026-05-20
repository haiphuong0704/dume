/* ===================================================
   MEMBERSHIP JOIN FLOW — membership.js
=================================================== */

const planData = {
  essential: {
    label: 'Essential',
    price: '$55/mo',
    perks: ['Annual health exam', '2 vet consultations / yr', 'Vaccination review', 'Dental screening', '10% grooming discount', 'Email support']
  },
  premium: {
    label: 'Premium',
    price: '$89/mo',
    perks: ['Quarterly health reviews', '6 vet consultations / yr', 'Nutrition consultation', 'Dental cleaning 1×/yr', '20% grooming discount', 'Priority booking', '24/7 phone support']
  },
  elite: {
    label: 'Elite',
    price: '$129/mo',
    perks: ['Monthly wellness check-ins', 'Unlimited vet consultations', 'Personalized nutrition plan', 'Unlimited dental cleanings', 'Free grooming sessions', 'Same-day appointments', 'Concierge 24/7 support']
  }
};

const state = {
  step: 1,
  plan: 'premium',
  petName: '',
  petType: '',
  petBreed: '',
  petAge: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
};

// Pre-select plan from URL param
const urlPlan = new URLSearchParams(window.location.search).get('plan');
if (urlPlan && planData[urlPlan]) state.plan = urlPlan;

// ── NAVIGATION ─────────────────────────────────────
function goTo(n) {
  const current = document.getElementById(`ms-panel-${state.step}`);
  const target = n === 'success'
    ? document.getElementById('ms-panel-success')
    : document.getElementById(`ms-panel-${n}`);

  if (current) current.classList.remove('active');
  if (target) target.classList.add('active');

  if (typeof n === 'number') {
    state.step = n;
    updateStepper();
    updateFooterNav();
    validateStep(n);
  } else {
    document.getElementById('ms-footer-nav').style.display = 'none';
    document.querySelectorAll('.ms-step').forEach(s => {
      s.classList.remove('active');
      s.classList.add('done');
    });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStepper() {
  document.querySelectorAll('.ms-step').forEach(s => {
    const n = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (n < state.step) s.classList.add('done');
    else if (n === state.step) s.classList.add('active');
  });
}

function updateFooterNav() {
  const footer = document.getElementById('ms-footer-nav');
  const back   = document.getElementById('ms-back');
  footer.style.display = 'flex';
  back.style.display   = state.step > 1 ? '' : 'none';
}

// ── VALIDATION ─────────────────────────────────────
function validateStep(n) {
  const btn = document.getElementById('ms-continue');
  let valid = false;
  if (n === 1) valid = !!state.plan;
  if (n === 2) valid = !!(state.petName.trim() && state.petType && state.petAge);
  if (n === 3) valid = !!(state.firstName.trim() && state.lastName.trim() && state.email.includes('@'));
  btn.disabled = !valid;
}

// ── PLAN CARDS ─────────────────────────────────────
function initPlanCards() {
  document.querySelectorAll('.ms-plan-card').forEach(card => {
    if (card.dataset.plan === state.plan) card.classList.add('selected');

    card.addEventListener('click', () => {
      document.querySelectorAll('.ms-plan-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.plan = card.dataset.plan;
      validateStep(1);
    });
  });
}

// ── SELECTION BUTTON GROUPS ────────────────────────
function initBtnGroup(groupId, stateKey) {
  document.querySelectorAll(`#${groupId} .ms-select-btn`).forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll(`#${groupId} .ms-select-btn`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state[stateKey] = btn.dataset.value;
      validateStep(2);
    });
  });
}

initBtnGroup('ms-pet-type-group', 'petType');
initBtnGroup('ms-age-group', 'petAge');

// ── INPUT TRACKING ─────────────────────────────────
function trackInput(id, key, step) {
  document.getElementById(id)?.addEventListener('input', e => {
    state[key] = e.target.value;
    validateStep(step);
  });
}

trackInput('ms-pet-name',   'petName',   2);
trackInput('ms-pet-breed',  'petBreed',  2);
trackInput('ms-first-name', 'firstName', 3);
trackInput('ms-last-name',  'lastName',  3);
trackInput('ms-email',      'email',     3);
trackInput('ms-phone',      'phone',     3);

// ── SUMMARY ────────────────────────────────────────
function renderSummary() {
  const p = planData[state.plan];
  const ageLabels  = { puppy: 'Under 2 yrs', adult: '2–6 yrs', senior: '7+ yrs' };
  const typeLabels = { dog: 'Dog', cat: 'Cat', rabbit: 'Rabbit', other: 'Other' };

  document.getElementById('ms-summary-plan').textContent  = p.label;
  document.getElementById('ms-summary-price').textContent = p.price;
  document.getElementById('ms-summary-pet-name').textContent = state.petName || '—';
  document.getElementById('ms-summary-pet-type').textContent = typeLabels[state.petType] || '—';
  document.getElementById('ms-summary-pet-age').textContent  = ageLabels[state.petAge]  || '—';

  const perksEl = document.getElementById('ms-summary-perks');
  perksEl.innerHTML = p.perks.slice(0, 5).map(item => `<li>${item}</li>`).join('');
}

// ── SUCCESS ────────────────────────────────────────
function renderSuccess() {
  const p  = planData[state.plan];
  const id = 'PCS-' + String(Math.floor(10000 + Math.random() * 90000));

  document.getElementById('ms-success-name').textContent = state.firstName;
  document.getElementById('ms-success-plan').textContent = p.label;
  document.getElementById('ms-success-pet').textContent  = state.petName || 'your pet';
  document.getElementById('ms-success-id').textContent   = id;
}

// ── BUTTON HANDLERS ────────────────────────────────
document.getElementById('ms-continue')?.addEventListener('click', () => {
  if (state.step < 3) {
    if (state.step === 2) renderSummary();
    goTo(state.step + 1);
  } else {
    renderSuccess();
    goTo('success');
  }
});

document.getElementById('ms-back')?.addEventListener('click', () => {
  if (state.step > 1) goTo(state.step - 1);
});

// ── INIT ───────────────────────────────────────────
initPlanCards();
validateStep(1);
updateFooterNav();
