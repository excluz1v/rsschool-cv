window.onload = () => {
    let burger__button = document.querySelector('.burger__button')
    let burger__menu = document.querySelector('.burger__menu')
    let body = document.querySelector('body')
    let header__list = document.querySelector('.header__list')
    burger__button.onclick = function () {
        burger__menu.classList.toggle('active')
        burger__button.classList.toggle('active')
        body.classList.toggle('lock')
    }
    header__list.onclick = function () {
        burger__menu.classList.toggle('active')
        burger__button.classList.toggle('active')
    }
}






