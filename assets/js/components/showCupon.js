function showCupon() {
    function canjearCupon() {
        const canjearTxt = document.getElementById("descuento").value
        const canjearBtn = document.getElementById("buscar");
        
        const totalDOM = document.getElementById("totalV").innerHTML;
        
        // const discount = document.getElementById('discount')

       function getPercent(percent) {
         return totalDOM / 100 * percent
       }

       const percentResult = getPercent(50);

       if (canjearTxt  === "academlo1") {
         canjearBtn.innerHTML = "cupon canjeado"
         totalDOM.innnerHTML = percentResult
        window.alert('cupon disponible')
       } else if (canjearTxt === " "){
         
        window.alert('no es un cupon valido')
       } else if ( canjearTxt !== "academlo1"){
        window.alert('no es correcto')
       }
       
    }

}

export default showCupon