const nav = document.getElementById('nav-links')
const burger = document.getElementById('burgerMenu')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
}

burgerMenu.addEventListener('click', toggleMenu)