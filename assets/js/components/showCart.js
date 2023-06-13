export let showCart = function(){
    const btnCart = document.querySelector('.btn--cart')
    const cart = document.querySelector('.cart')
    const cls = document.querySelector('.cart--close')

    btnCart.addEventListener('click', () => {
        cart.classList.toggle('slide')
    })

    cls.addEventListener('click', () => {
        cart.classList.toggle('slide')
        })
    

}
showCart()