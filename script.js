(() => {
  const starField = document.getElementById('stars');
  // A small, fixed number of stars keeps animation smooth on phones.
  const count = window.matchMedia('(max-width: 600px)').matches ? 55 : 95;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const star = document.createElement('i');
    star.className = 'star';
    star.style.left = (Math.random() * 100) + '%';
    star.style.top = (Math.random() * 100) + '%';
    star.style.setProperty('--o', (0.25 + Math.random() * 0.7).toFixed(2));
    star.style.setProperty('--d', (2.5 + Math.random() * 5) + 's');
    star.style.animationDelay = (-Math.random() * 6) + 's';
    frag.appendChild(star);
  }
  starField.appendChild(frag);

  const start = document.getElementById('startBtn');
  const back = document.getElementById('backBtn');
  const universe = document.getElementById('universe');
  start.addEventListener('click', () => {
    document.body.classList.add('entered');
    universe.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => universe.classList.add('visible'));
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
  back.addEventListener('click', () => {
    universe.classList.remove('visible');
    window.setTimeout(() => {
      document.body.classList.remove('entered');
      universe.setAttribute('aria-hidden', 'true');
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 350);
  });
})();