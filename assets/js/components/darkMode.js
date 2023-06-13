// ahora vamos a hacer el dark mode 



export let darkMode = function () {
     
    let darktheme = document.querySelector('#dark')
   
    darktheme.addEventListener('click', () => {
       
        document.body.classList.toggle("dark_theme")
        
        if(document.body.classList.contains("dark_theme")){
         darktheme.innerHTML = "<i class='bx bxs-sun' ></i>"
        }else{
            darktheme.innerHTML = "<i class='bx bxs-moon'></i>"   
        }
    })
}
darkMode()




let rotation = document.querySelector('.rot')

rotation.addEventListener('click', () => {
    document.classList.contains('rot:hover')
})