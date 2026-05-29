// mobile nav bar hamburger button
function hamburger() {
    let menu = document.getElementById("nav_links");
    if(menu.style.display === "block") {
      menu.style.display = "none";
    }
    else {
      menu.style.display = "block";
    }

    updateHeaderHeight()
}


// calculate header height
function updateHeaderHeight() {
  const header = document.querySelector('header');
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);

  console.log(header.offsetHeight)
}

document.addEventListener('DOMContentLoaded', updateHeaderHeight);
window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);