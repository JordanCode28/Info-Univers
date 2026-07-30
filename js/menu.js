const header = document.querySelector('header');
const toggle = document.createElement('button');
const overlay = document.createElement('div');

function initMobileMenu() {
  if (!header) return;

  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Ouvrir le menu');
  toggle.innerHTML = '<span></span>';

  overlay.className = 'nav-overlay';

  header.appendChild(toggle);
  header.after(overlay);

  const closeMenu = () => header.classList.remove('nav-open');

  toggle.addEventListener('click', () => header.classList.toggle('nav-open'));
  overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', closeMenu));
}

initMobileMenu();
