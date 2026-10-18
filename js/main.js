const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('menu-backdrop');

function openMenu() {
  mobileMenu.classList.add('open');
  backdrop.classList.add('open');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);

// Close menu when any link is clicked
document.querySelectorAll('.mobile-nav-list a').forEach(link => {
  link.addEventListener('click', closeMenu);
});