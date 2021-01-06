const BUTT_MENU = document.querySelector('.buttMenu')
const BURGER_MENU = document.querySelector('.burgerMenu')

BUTT_MENU.addEventListener('click', () => {
    (BURGER_MENU.classList.contains('is-active'))
        ? BURGER_MENU.classList.remove('is-active')
        : BURGER_MENU.classList.add('is-active')
})