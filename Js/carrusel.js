//Carrusel Header
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
let currentIndex = 0;


function updateCarousel() {
    const offset = -currentIndex * slides[0].clientWidth;
    track.style.transform = `translateX(${offset}px)`;
}


nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});


setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 3000);

//Carrusel Categorias
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type       : 'loop',   // Loop infinito
        perPage    : 3,        // Muestra 3 tarjetas
        perMove    : 1,        // Se mueve de a 1
        autoplay   : true,     // Autoplay activado
        interval   : 3000,     // Tiempo entre cada slide (ms)
        pauseOnHover: true,    // Pausa al pasar el mouse
        arrows     : true,     // Flechas de navegación
        pagination : true,      // Paginación activa
    }).mount();
});

