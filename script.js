// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isMenuOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isMenuOpen);
  });
}

// Simple scroll reveal for cards and news items
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15, // When 15% of the element is visible
  rootMargin: '0px 0px -50px 0px' // Start revealing a little earlier
});

document.querySelectorAll('.card, .news-item').forEach(el => {
  observer.observe(el);
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      
      // Close mobile menu on click (professional touch)
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }

      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});