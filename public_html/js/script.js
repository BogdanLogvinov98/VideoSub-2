//burger menu
let header__burger = document.querySelector('.burger-menu__icon');
let header_body = document.querySelector('.burger-menu__body');
let header = document.querySelector('.header');
let burgerClose = document.querySelector('.burger-menu__icon-image--lock')
let burgerOpen = document.querySelector('.burger-menu__icon-image--open')

burgerOpen.onclick = function(){
    burgerOpen.classList.remove('active')
    burgerOpen.classList.toggle('lock')
    burgerClose.classList.remove('lock')
    burgerClose.classList.toggle('active')
    header_body.classList.toggle('burger-menu__body--active')
    header.classList.toggle('sticky')
}

burgerClose.onclick = function(){
  burgerOpen.classList.toggle('active')
  burgerOpen.classList.remove('lock')
  burgerClose.classList.toggle('lock')
  burgerClose.classList.remove('active')
  header_body.classList.remove('burger-menu__body--active')
  header.classList.remove('sticky')
}

$(window).resize(function() {
  if (window.innerWidth <= 768 && !burgerOpen.classList.value.includes('active') && !burgerOpen.classList.value.includes('lock')) {
    burgerOpen.classList.toggle('active')
    burgerClose.classList.toggle('lock')
  } else if (window.innerWidth > 768) {
    burgerClose.classList.remove('active')
    burgerClose.classList.remove('lock')
    burgerOpen.classList.remove('active')
    burgerOpen.classList.remove('lock')
    header_body.classList.remove('burger-menu__body--active')
    header.classList.remove('sticky')
  }
});


// close pop-up
let closeButton = document.querySelector('.pop-up__close');
let popUp = document.querySelector('.pop-up');

if (closeButton) {
  closeButton.onclick = function() {
    popUp.classList.toggle('is-hidden')
  };
}

//cookie 
let closeCookie = document.querySelector('.cookie__btn');
let cookie = document.querySelector('.cookie');
let aboutUs = document.querySelector('.about-us__container');


if (closeCookie) {
  closeCookie.onclick = function() {
    cookie.style.display = 'none';
    aboutUs.style.paddingTop = '38px';
  };
}