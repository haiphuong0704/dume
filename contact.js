const form    = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

if (form && success) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const required = form.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#C0344E';
        field.style.boxShadow   = '0 0 0 3px rgba(192, 52, 78, 0.1)';
        valid = false;
        field.addEventListener('input', () => {
          field.style.borderColor = '';
          field.style.boxShadow   = '';
        }, { once: true });
      }
    });

    if (!valid) return;

    const submit = form.querySelector('.cnt-form__submit');
    submit.disabled    = true;
    submit.textContent = 'Sending…';

    setTimeout(() => {
      Array.from(form.children).forEach(child => {
        if (!child.classList.contains('cnt-form__success')) {
          child.style.display = 'none';
        }
      });
      success.classList.add('visible');
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });
}
