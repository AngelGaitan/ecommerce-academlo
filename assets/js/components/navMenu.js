
export let navM = function (){

let navMenu = document.querySelector('.nav_menu');

let menu =  document.querySelector('.btn--menu');
let x = document.querySelector('.btn--close');

let navlink = document.querySelector('.nav_list')

menu.addEventListener('click',() => {
    navMenu.classList.toggle('arrow')
} )


x.addEventListener('click', () => {
navMenu.classList.toggle('arrow')
})

navlink.addEventListener('click', () => {
    navMenu.classList.toggle('arrow')
})
}
navM()


