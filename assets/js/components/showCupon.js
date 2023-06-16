function showCupon() {

  const canjearBtn = document.getElementById("buscar");
  function canjearCupon() {
      const canjearTxt = document.getElementById("descuento").value
       const aplicarDesc = document.querySelector('.desc')
      console.log(canjearTxt)
      const totalDOM = document.getElementById("totalV").innerHTML;


     function getPercent(percent) {
       return totalDOM / 100 * percent
     }

     const percentResult = getPercent(50);
     console.log(percentResult)

     if (canjearTxt  === "academlo1") {
      window.alert('cupon de 50% valido')
       aplicarDesc.innerHTML = `$${percentResult}`
     } else if (canjearTxt === ""){

      window.alert('debes colocar un cupon')
     } else if ( canjearTxt !== "academlo1"){
      window.alert('lo sentimos cupon invalido')}
     

  }
  canjearBtn.addEventListener('click', () => {
    canjearCupon()
  })


}

export default showCupon
