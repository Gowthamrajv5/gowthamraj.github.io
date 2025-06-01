// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Fade-in effect for sections
  const faders = document.querySelectorAll('section');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(section => {
    section.classList.add('fade-in');
    appearOnScroll.observe(section);
  });

  // Responsive navbar toggle (optional future feature)
  // const navToggle = document.querySelector('.nav-toggle');
  // const navLinks = document.querySelector('.nav-links');
  // navToggle.addEventListener('click', () => {
  //   navLinks.classList.toggle('nav-open');
  // });
});
