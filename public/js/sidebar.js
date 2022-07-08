const sideOpen = document.querySelector('.menu-bar')
const aside = document.querySelector('aside')
const sideClose = document.querySelector('.side-close-icon')
const sidebar = document.querySelector('aside')
const sideContent = document.querySelector('.side-bg')

const sideOpenClick = (e) => {
    sidebar.style.display = 'block'
    sideContent.style.animation = 'sideOpen .5s ease-out forwards'
}
const sideCloseClick = (e) => {
    if(e.target.id != "closable") return;
    sidebar.style.display = 'none'
    sideContent.style.animation = 'sideClose .5s ease-out forwards'
}
sideOpen.addEventListener('click', sideOpenClick)
aside.addEventListener('click', sideCloseClick)
sideClose.addEventListener('click', sideCloseClick)