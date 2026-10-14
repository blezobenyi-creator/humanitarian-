'use strict';

// Keep the copyright year current.
document.getElementById('year').textContent = new Date().getFullYear();

// Close the mobile menu after choosing a section.
const navigation = document.getElementById('mainNav');
const mobileMenu = bootstrap.Collapse.getOrCreateInstance(navigation, { toggle: false });
document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 992 && navigation.classList.contains('show')) {
      mobileMenu.hide();
    }
  });
});
