document.addEventListener('DOMContentLoaded', () => {

  updateHeaderHeight(); // Header height

  // Mobile nav bar hamburger button
  const hamburger = document.querySelector("#hamburger");
  const nav = document.querySelector("nav");
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
  })

});

// Calculate header height (for css --header-height variable)
function updateHeaderHeight() {
  const header = document.querySelector('header');
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);

  console.log(header.offsetHeight)
}

window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);