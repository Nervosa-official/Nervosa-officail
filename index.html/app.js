const mainMenu = document.querySelector('.mainMenu'); 
const closeMenu = document.querySelector('.closeMenu'); 
const openMenu = document.querySelector('.openMenu'); 
const menu_items = document.querySelectorAll('nav .mainMenu li a'); 
 
 
 
 
openMenu.addEventListener('click',show); 
closeMenu.addEventListener('click',close); 
 
// close menu when you click on a menu item  
menu_items.forEach(item => { 
    item.addEventListener('click',function(){ 
        close(); 
    }) 
}) 
 
function show(){ 
    mainMenu.style.display = 'flex'; 
    mainMenu.style.top = '0'; 
} 
function close(){ 
    mainMenu.style.top = '-100%'; 
}
const images = [
    '1.jpeg',
    '4.jpg',
    '2.jpeg',
    '3.jpg',
];
let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector('.hero').style.backgroundImage = `url(${images[currentImageIndex]})`;
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(changeBackgroundImage, 5000);
    document.querySelector('.hero').style.backgroundImage = `url(${images[currentImageIndex]})`;
});