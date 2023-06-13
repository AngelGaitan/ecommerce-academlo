 export let loader = function () {
    window.addEventListener('load', () =>{
        const load = document.querySelector('.loader')
        load.classList.add('loader--hidden')
    })
}

loader()
