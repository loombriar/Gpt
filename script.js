(() => {
  const gate = document.getElementById('briarGate');
  const enter = document.getElementById('enterWoods');
  const body = document.body;

  const openWoods = () => {
    gate?.classList.add('is-opening');
    body.classList.remove('locked');
    window.setTimeout(() => gate?.setAttribute('aria-hidden', 'true'), 1100);
  };

  enter?.addEventListener('click', openWoods);

  // Enter/Escape accessibility for the entrance screen.
  gate?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') openWoods();
  });

  const menuButton = document.getElementById('menuButton');
  const siteNav = document.getElementById('siteNav');

  menuButton?.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  siteNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });

  // Reveal animations.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Product images are optional. If a file is not present, keep the designed fallback visible.
  document.querySelectorAll('.optional-photo').forEach(img => {
    const fallback = img.nextElementSibling;
    img.addEventListener('load', () => {
      if (fallback) fallback.hidden = true;
      img.alt = `${img.dataset.fallback} — original Loom Briar product photograph`;
    });
    img.addEventListener('error', () => {
      img.hidden = true;
      if (fallback) fallback.hidden = false;
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
