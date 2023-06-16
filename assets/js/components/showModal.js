
function showModal(products) {
  const db = [...products];

  function printProducts(products) {
    const productsDom = document.querySelector(".container-modal");
    let htmlProduct = ""

    htmlProduct += `<div class="content-modal">
                <h2>BIENVENIDOS</h2>
                <p>esta es una prenda que solo usa la gente con estilo, si no tienes estilo no la compres, ahora si no tienes estilo pero si tienes dinero podría hacer una excepción 7u7 <3</p>
                <div class="btn-cerrar">
                  <label for="btn-modal">Cerrar</label>
                </div>
              </div>`;

    productsDom.innerHTML = htmlProduct;
  }
  printProducts()
}

export default showModal;