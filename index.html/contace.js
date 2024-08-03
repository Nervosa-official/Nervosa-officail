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


const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        let index = 0;
        const delay = 10000; // Delay in milliseconds

        function showSlide(i) {
            index += i;
            if (index < 0) {
                index = slide.length - 1;
            }
            if (index >= slide.length) {
                index = 0;
            }
            slides.style.transform = `translateX(${-index * 100}%)`;
        }

        prev.addEventListener('click', () => showSlide(-1));
        next.addEventListener('click', () => showSlide(1));

        // Auto slide functionality
        setInterval(() => {
            showSlide(1);
        }, delay);