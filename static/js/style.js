  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true
  });

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / 200;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  // Lightbox for Gallery
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('lightboxImg').src = img.src;
      new bootstrap.Modal(document.getElementById('lightboxModal')).show();
    });
  });

  // Show Enquiry Popup after 5 seconds
  setTimeout(() => {
    new bootstrap.Modal(document.getElementById('enquiryPopup')).show();
  }, 5000);

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Newsletter Form Submission (Placeholder)
  document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  });
