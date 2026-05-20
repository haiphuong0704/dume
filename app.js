/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  const button = item.querySelector('.faq-question');

  button.addEventListener('click', () => {

    const isActive = item.classList.contains('active');

    faqItems.forEach(el => {
      el.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }

  });

});