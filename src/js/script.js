let headerBurger = document.querySelector('.header__burger');
let mobileMenu = document.querySelector('.header__top_right');

headerBurger.onclick = function () {
    document.body.classList.toggle('this--overflow');
    headerBurger.classList.toggle('burger-open');
    mobileMenu.classList.toggle('open');
}