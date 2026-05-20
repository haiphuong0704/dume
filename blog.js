// Category filter (visual only — no real filtering in static build)
const cats = document.querySelectorAll('.blg-cat');
cats.forEach(btn => {
  btn.addEventListener('click', () => {
    cats.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Load more — show toast since no pagination in static build
const loadMoreBtn = document.querySelector('.blg-load-more .btn');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    if (typeof PCS !== 'undefined' && PCS.toast) {
      PCS.toast.info('More articles are on the way. Check back soon.');
    }
    loadMoreBtn.textContent = 'All articles loaded';
    loadMoreBtn.disabled = true;
  });
}

// Newsletter form
const nlForm = document.querySelector('.blg-nl-form');
if (nlForm) {
  nlForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = nlForm.querySelector('.blg-nl-input');
    if (input && input.value.trim()) {
      if (typeof PCS !== 'undefined' && PCS.toast) {
        PCS.toast.success('You\'re subscribed! Welcome to the Petcare Spa journal.');
      }
      input.value = '';
    }
  });
}
