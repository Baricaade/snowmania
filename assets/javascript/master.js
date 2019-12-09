// Navbar Scroll
window.onscroll = function() {
  const nav = document.querySelector('.navbar');
  const scroll = document.documentElement.scrollTop
  if (scroll > 225) {
    nav.classList.add('navScroll');
  } else {
    nav.classList.remove('navScroll');
  }
}
