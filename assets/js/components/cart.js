function cart(db, printProducts) {
    let cart = []

    // elementos del DOM

    const productsDOM = document.querySelector('.products__container');
    const notifyDOM = document.querySelector('.notify');
    const cartDOM = document.querySelector('.container-tarjetas');
    const countDOM = document.querySelector('.cart__count--item');
    const totalDOM = document.querySelector('.cart__total--item');
    const checkoutDOM = document.querySelector('.btn--buy');

    // profe vea esta funcion ponganos 10 


    function printCart() {
        let htmlCart = ''
        if (cart.length === 0) {
            htmlCart += `
            <div class="cart__empty">
               <i class='bx bx-cart'></i>
               <p class="cart__empty--text">No hay productos en el cart</p>
            </div>
            `
            notifyDOM.classList.remove('show--notify')
        } else {
            for (const item of cart) {
               const product = db.find(p => p.id === item.id)
               htmlCart += `
               <div class="tarjeta_container">
               <div class="c imagen_cart"><span><img src="${product.image}" alt="${product.name}" class="camisete"></span></div>
               <div class="c product_name"><span><h3>${product.name}</h3></span></div>
               <div class="c product_precio"><span>${product.price}</span></div>
               <div class="c symbols">
                <button type="button" class="quantity article--plus" data-id="${item.id}"><i class='bx bx-plus'></i></button>
                <span class="quantity"> ${item.qty}</span>
                <button type="button" class="quantity article--minus" data-id="${item.id}"><i class='bx bx-minus'></i></button>
               </div> 
               <div class="c product_trash remove-from-cart" data-id="${item.id}"><button><i class='bx bx-trash' ></i></button></div>
           </div>`
            } 
            notifyDOM.classList.add('show--notify');
        }
        cartDOM.innerHTML = htmlCart;
        notifyDOM.innerHTML = showItemsCount();
        countDOM.innerHTML = showItemsCount();
        totalDOM.innerHTML = showTotal();
        // SIGAN VIENDO
    }
    function addToCart(id, qty = 1) {
     const itemFinded = cart.find(i => i.id === id)
     if (itemFinded) {
        itemFinded.qty += qty
     } else {
        cart.push({id,qty})
     }
     printCart()
    }
    // SIGAN VIENDO 
    function removeFromCart(id, qty){
        const itemFinded = cart.find(i => i.id === id)
        const result = itemFinded.qty - qty
        if (result > 0) {
            itemFinded.qty -= qty
        } else{
         cart = cart.filter(i => i.id !== id)
        }
        printCart()
    }
    // SIGAN VIEEEEEEENDO 

    function deleteFromCart(id) {
     cart = cart.filter( i => i.id !== id) 
     printCart()
    }

    // ya casi profe

    function showItemsCount() {
        let sum = 0 
        for (const item of cart) {
            sum += item.qty
        }
        return sum 
    }
    // SIGAN VIENDO 
    function showTotal() {
        let total = 0;
        for (const item of cart) {
            const productFinded = db.find( p => p.id === item.id)
            total  += item.qty * productFinded.price
        }
        return total
    }


    function checkout() {
        for (const item of cart) {
            const productFinded = db.find( p => p.id === item.id)
            productFinded.quantity -= item.qty
        }
        cart = [];
        printCart();
        printProducts();

        window.alert('Gracias por su compra')
    }
    printCart()
    // EVENTOS

    productsDOM.addEventListener('click', function (e) {
        if (e.target.closest('.add--to--cart')) {
          const id = +e.target.closest('.add--to--cart').dataset.id
          addToCart(id) 

          console.log(id)
        }
    })
    cartDOM.addEventListener('click',function (e) {
        if (e.target.closest('.article--minus')){
            const id = +e.target.closest('.article--minus').dataset.id
            removeFromCart(id)
        }

        if(e.target.closest('.article--plus')){
            const id = +e.target.closest('.article--plus').dataset.id
            addToCart(id)
        }
        
        if (e.tagert.closest('.remove-from-cart')) {
            const id = +e.target.closest('.remove-from-cart').dataset.id
            deleteFromCart(id)
        }

    } )
    checkoutDOM.addEventListener('click', function () {
        checkout()
    })
}

export default cart