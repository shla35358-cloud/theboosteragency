  const logoSrc = 'logo.JPEG';
  document.getElementById('nav-logo-img').src = logoSrc;
  document.getElementById('hero-bg-img').src = logoSrc;
  document.getElementById('footer-logo').src = logoSrc;
  document.getElementById('page-bg-logo-img').src = logoSrc;
  document.querySelector('.how-section').style.setProperty('--logo-bg', 'url("' + logoSrc + '")');

  // Scroll reveal: elements fade in when entering viewport, fade out when leaving
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
      else e.target.classList.remove('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Page background logo brightens when scrolling UP
  let lastScroll = window.scrollY;
  const bgLogo = document.getElementById('page-bg-logo-img');
  window.addEventListener('scroll', () => {
    const cur = window.scrollY;
    if (cur < lastScroll) {
      bgLogo.style.opacity = '0.14';
      clearTimeout(bgLogo._t);
      bgLogo._t = setTimeout(() => { bgLogo.style.opacity = '0.05'; }, 700);
    }
    lastScroll = cur;
  });

