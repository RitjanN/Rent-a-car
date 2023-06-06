let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('#menu-icon');
    navbar.classList.toggle('active');
    
}

window.onscroll = () => {
    menu.classList.remove('#menu-icon');
    navbar.classList.remove('active');
}

