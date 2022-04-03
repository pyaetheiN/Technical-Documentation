const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')
const navBar = document.getElementById('navbar');
const main = document.getElementById('main-doc');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navBar.classList.add('show-menu');
    main.style.marginLeft = '200px';
  });
};
if(navClose) {
  navClose.addEventListener('click', () => {
    navBar.classList.remove('show-menu');
    main.style.marginLeft = '0';
  });
};