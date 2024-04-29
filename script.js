const nav = document.querySelector('nav');
const menu_btn = document.querySelector('.nav-hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

// Function to handle fixing the navigation bar when scrolling
function fixNav() {
  if (window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

// Function to close the mobile menu when the window is resized
function closeMobile() {
  var w = window.outerWidth;
  if (w > 820) {
    menu_btn.classList.remove('is-active');
    mobile_menu.classList.remove('is-active');
  }
}

// Event listener to fix navigation bar on scroll
window.addEventListener('scroll', fixNav);

// Event listener to toggle mobile menu visibility
menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

// Event listener to close mobile menu when a link is clicked
document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobile_menu.classList.remove('is-active');
    menu_btn.classList.remove('is-active');
  });
});

// Event listener to close mobile menu when the window is resized
window.addEventListener('resize', closeMobile);
