function showSearcher(db) {
  // elementos del DOM
  const productsDOM = document.querySelector('.products__container');
  const searchDOM = document.querySelector('#searcher')

  searchDOM.addEventListener('keyup', () => {
    
    let searcherValue = (searchDOM.value).toLowerCase();
    let view = ``
    for (const product of db) {
      if(product.name.toLowerCase().includes(searcherValue)){
         view += `<article class="product">
         <div class="agotado"><span>Agotado</span></div>
         <div class="product__image">
           <img src="${product.image}" alt="${product.name}">
         </div>
         <div class="product__content">
           <div class="container_desc">
           <button type="button" class="product__btn add--to--cart" data-id="${product.id}" >
             <i class='bx bx-cart-add'></i>
           </button>
           <div class="prod__container">
           <div class="caja caja1"><span class="product__price fila">costo:$ ${product.price}</span></div>
           <div class="caja caja2"><span class="product__stock fila">Disponibles: ${product.quantity}</span></div>
           <div class="caja caja3"><h3 class="product__title">${product.name}</h3></div>
           <div class="caja caja4"><button class="modal">
           DETALLES
           </button></div>
           <div class="caja name-sizes">
            <span><h2>Medidas</h2></span>
          </div>
          <div class="caja btn--sizes"><button>XS</button>
          <button>S</button>
        <button>M</button> 
        <button>L</button>
        <button>XL</button>
         </div>
         <div class="caja name--color"> <span><h2>Colores</h2></span></div>
         <div class="caja btn--colors"> 
          <button class="boxC red"></button>
          <button class="boxC blue"></button>
          <button class="boxC black"></button>
          <button class="boxC white"></button>
         </div>
           </div>
         </div>
         </div>
       </article>`
      }
  }
  productsDOM.innerHTML = view
  })
}

export default showSearcher