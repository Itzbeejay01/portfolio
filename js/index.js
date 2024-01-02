function menuShow (){
    const myButton = document.getElementById('navmenu')
    const myNavbar = document.getElementById('navbar')

    function togglemenu () {
        myNavbar.classList.toggle('hidden')
        myNavbar.classList.toggle('flex')
    }
    myButton.addEventListener('click', togglemenu)
    myNavbar.addEventListener('click', togglemenu)
} 
document.addEventListener('DOMContentLoaded', menuShow);

