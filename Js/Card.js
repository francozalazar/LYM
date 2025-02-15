let productos = [
    {nombre: "Cargador magnetico 3 en 1",precio: 20000,descripcion: "El cargador magnético plegable 3 en 1 es un producto muy práctico, versátil y elegante que permite cargar simultáneamente tres dispositivos: iPhone, Apple Watch y AirPods.",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.JPG",},
    {nombre: "Auriculares I12",precio: 8000,descripcion: "El auricular i12 cuenta con tecnología inalámbrica y sin botones. Se conecta a través de Bluetooth a tu móvil y se controla a través de un control táctil directamente en tu oído.",img1: "./assets/Cards/2.JPG",img2: "./assets/Cards/2 2.JPG",},
    {nombre: "Auriculares BT P2961",precio: 20000,descripcion: "Los auriculares BT P2961 son un producto interesante que ofrece tecnología inalámbrica Bluetooth para una conexión estable y de alta calidad.",img1: "./assets/Cards/23.JPG",img2: "./assets/Cards/23 2.WEBP",},
    {nombre: "Auriculares BT P47",precio: 10000,descripcion: "Auriculares P47 con Bluetooth son un producto interesante que ofrece una conexión inalámbrica estable y de alta calidad.",img1: "./assets/Cards/18.WEBP",img2: "./assets/Cards/18 2.WEBP",},
    {nombre: "Parlante 3' sing e con soporte",precio: 13000,descripcion: "El parlante 3 en 1 Sing E con soporte es un producto versátil que combina las funciones de altavoz Bluetooth, micrófono para karaoke y soporte para teléfono o tableta.",img1: "./assets/Cards/19.JPG",img2: "./assets/Cards/19 2.JPG",},
    {nombre: "Parlante Pc redondo",precio: 7500,descripcion: "El parlante PC redondo es un altavoz compacto y elegante diseñado para computadoras personales.",img1: "./assets/Cards/20.WEBP",img2: "./assets/Cards/20 2.JPG",},
    {nombre: "Parlante BT karaoke con microfono",precio: 15000,descripcion: "El parlante BT Karaoke con micrófono es un producto divertido y versátil que permite disfrutar de sesiones de karaoke en cualquier lugar.",img1: "./assets/Cards/17.JPG",img2: "./assets/Cards/17 2.WEBP",},
    {nombre: "Camara smart wifi 3 antenas",precio: 23000,descripcion: "La cámara S-Mart WiFi con 3 antenas es un dispositivo de seguridad doméstica que ofrece una conexión inalámbrica estable y de alta calidad",img1: "./assets/Cards/6.WEBP",img2: "./assets/Cards/6 2.WEBP",},
    {nombre: "Repetidor wifi 4 antenas",precio: 18000,descripcion: "El repetidor WiFi de 4 antenas es un dispositivo que amplía la cobertura de tu red WiFi, eliminando áreas muertas y mejorando la conexión en tu hogar o negocio.",img1: "./assets/Cards/15.JPG",img2: "./assets/Cards/15 2.JPG",},
    {nombre: "Guirnalda luz led calida 8M",precio: 4000,descripcion: "La guirnalda de luz LED cálida de 8m es un producto decorativo ideal para crear un ambiente acogedor y festivo en tu hogar o jardín.",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.JPG",},
    {nombre: "Llavero con luz",precio: 4500,descripcion: "El llavero con luz es un accesorio práctico y funcional que combina la comodidad de un llavero con la utilidad de una luz LED.",img1: "./assets/Cards/12.JPG",img2: "./assets/Cards/12 2.WEBP",},
    {nombre: "Lampara de mesa astronauta",precio: 10000,descripcion: "La lámpara de mesa astronauta es un accesorio decorativo y funcional que combina la iluminación con un diseño único y divertido.",img1: "./assets/Cards/5.WEBP",img2: "./assets/Cards/5 2.WEBP",},
    {nombre: "Aro led 12' frio/calido sin tripode",precio: 10000,descripcion: "El Aro LED de 12 pulgadas (frio y cálido) es un accesorio de iluminación ideal para fotógrafos, influencers, y creadores de contenido.",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.WEBP",},
    {nombre: "Humidicador con luz rgb",precio: 15000,descripcion: "El humidificador con luz RGB es un dispositivo que combina la función de humidificar el aire con un efecto visual atractivo gracias a su iluminación RGB.",img1: "./assets/Cards/24.WEBP",img2: "./assets/Cards/24 2.WEBP",},
    {nombre: "Humificador c/piedras de sal",precio: 14000,descripcion: "El humidificador con piedras de sal es un dispositivo que combina la función de humidificar el aire con los beneficios de las piedras de sal, conocidas por sus propiedades naturales y terapéuticas.",img1: "./assets/Cards/25.JPG",img2: "./assets/Cards/25 2.JPG",},
    {nombre: "Pizarra LCD 8.5'",precio: 5000,descripcion: "La pizarra LCD de 8,5 pulgadas es un dispositivo electrónico portátil que permite escribir y dibujar con un estilo digital.",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.WEBP",},
    {nombre: "Consola de juego pop it c/flechas",precio: 7000,descripcion: " La consola Pop It con flechas es un juguete interactivo y divertido que combina la emoción de un juego de habilidad con la satisfacción de burbujas popping.",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.WEBP",},
    {nombre: "Pizarra infantil LCD 9'",precio: 6000,descripcion: "La pizarra LCD de 9 pulgadas es un dispositivo electrónico portátil que permite escribir y dibujar con un estilo digital.",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.WEBP",},
    {nombre: "Juego pop it electronico",precio: 8000,descripcion: "La consola Pop It electrónica es un juguete interactivo y divertido que combina la emoción de un juego de habilidad con la tecnología electrónica.",img1: "./assets/Cards/16.JPG",img2: "./assets/Cards/16 2.WEBP",},
    {nombre: "Pistola burbujero",precio: 14000,descripcion: "La pistola burbujero es un juguete divertido y entretenido de fácil uso para grandes y niños que permite crear una gran cantidad de burbujas de jabón en forma de pistola.",img1: "./assets/Cards/7.JPG",img2: "./assets/Cards/7 2.WEBP",},
    {nombre: "Consola sup con joystick",precio: 18000,descripcion: "La consola Sup con joystick es un dispositivo de juego portátil que ofrece una experiencia de entretenimiento retro con una amplia variedad de juegos clásicos.",img1: "./assets/Cards/8.WEBP",img2: "./assets/Cards/8 2.WEBP",},
    {nombre: "Reloj smart watch D20 redondo",precio: 8000,descripcion: "El reloj S-Mart Watch D20 es un dispositivo inteligente que combina la funcionalidad de un reloj con las características de un smartwatch. Este modelo con un precio asequible permite realizar varias funcionalidades como el control de actividad física, cronómetro, hora, fecha y muchas cosas más.",img1: "./assets/Cards/14.WEBP",img2: "./assets/Cards/14 2.WEBP",},
    {nombre: "Rejoj smart watch D20 cuadrado",precio: 8000,descripcion: "El reloj S-Mart Watch D20 es un dispositivo inteligente que combina la funcionalidad de un reloj con las características de un smartwatch. Este modelo con un precio asequible permite realizar varias funcionalidades como el control de actividad física, cronómetro, hora, fecha y muchas cosas más.",img1: "./assets/Cards/9.WEBP",img2: "./assets/Cards/9 2.WEBP",},
    {nombre: "Reloj smart watch T20 con 4 mallas",precio: 20000,descripcion: "El reloj T20 con 4 mallas es un dispositivo inteligente que combina la funcionalidad de un reloj con las características de un smartwatch. De diseño elegante y 4 mallas intercambiables personalizables, varias funcionalidades, conectividad bluetooth y seguimiento de actividad física ",img1: "./assets/Cards/3.WEBP",img2: "./assets/Cards/3 2.WEBP",},
    {nombre: "Funda de silicona para auriculares",precio: 1000,descripcion: "La funda de silicona para auriculares es un accesorio práctico y protector diseñado para cubrir y proteger tus auriculares favoritos.",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.WEBP",},
    {nombre: "Hi watch pro T900 ultra 2 smartwatch reloj inteligente",precio: 15000,descripcion: "El reloj Hi Watch Pro T900 Ultra 2 es un dispositivo wearable inteligente de alta gama que ofrece una amplia variedad de funcionalidades y características avanzadas. Pantalla alta resolución, compatible con dispositivos Android y iOS, notificaciones llamadas y mensajes, pantalla resistente al agua y polvo",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.WEBP",},
    {nombre: "Auriculares in ear inalambricos BT F9-5",precio: 8000,descripcion: "Los auriculares in ear inalámbricos genéricos son una opción asequible y práctica para disfrutar de música y llamadas telefónicas sin cables. Diseño compacto y ligero, conectividad bluetooth, batería recargable y compatibilidad con dispositivos iOS y Android",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/1 2.WEBP",},
    {nombre: "Kit 115 piezas alpina herramientas de precision",precio: 17000,descripcion: "El kit de 115 piezas de herramientas de alta precisión Alpina es un conjunto completo y versátil de herramientas para realizar diversas tareas de reparación y mantenimiento con su diseño ergonomico, de alta calidad y resistencia",img1: "./assets/Cards/11.JPG",img2: "./assets/Cards/11 2.JPG",},
    {nombre: "Mochila adidas con cargador usb",precio: 17000,descripcion: "La mochila Adidas USB con cargador es una mochila práctica y tecnológica que combina la funcionalidad de una mochila tradicional con la capacidad de cargar dispositivos electrónicos en movimiento.",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.WEBP",},
    {nombre: "Mochila nike con cargador usb",precio: 17000,descripcion: "La mochila Nike USB con cargador es una mochila práctica y tecnológica que combina la funcionalidad de una mochila tradicional con la capacidad de cargar dispositivos electrónicos en movimiento.",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.WEBP",},
    {nombre: "Joystick ps4 messi inter miami",precio: 25000,descripcion: "El joystick PS4 Modelo Messi Inter Miami es un controlador personalizado y oficial para la consola PlayStation 4, diseñado específicamente para los fanáticos del fútbol y del jugador Lionel Messi.",img1: "./assets/Cards/1.JPG",img2: "./assets/Cards/2.JPG",},
    {nombre: "Drone E88D doble camara",precio: 38000,descripcion: "El drone E88D con doble cámara es un dispositivo aéreo innovador y versátil que ofrece una experiencia de vuelo emocionante y captura de imágenes de alta calidad.",img1: "./assets/Cards/22.JPG",img2: "./assets/Cards/22 2.JPG",},
    {nombre: "Drone K13 doble camara HD",precio: 45000,descripcion: "El drone K13 con doble cámara HD es un dispositivo aéreo innovador y versátil que ofrece una experiencia de vuelo emocionante y captura de imágenes de alta calidad.",img1: "./assets/Cards/21.WEBP",img2: "./assets/Cards/21 2.JPG",},
    {nombre: "Picana electrica c/linterna chica",precio: 12000,descripcion: "La picana eléctrica con linterna chica es un dispositivo práctico y versátil que combina la funcionalidad de una picana eléctrica con la iluminación de una linterna.",img1: "./assets/Cards/10.JPG",img2: "./assets/Cards/10 2.WEBP",},
    {nombre: "Barra de sonido audioritmico RGB",precio: 9000,descripcion: "La barra de sonido Audioritmico RGB es un dispositivo de audio innovador y emocionante que combina la calidad de sonido excepcional con la iluminación RGB personalizable.",img1: "./assets/Cards/1.WEBP",img2: "./assets/Cards/2.WEBP",},
    {nombre: "Gas pimienta 60ML",precio: 10000,descripcion: "El gas pimienta de 60 ml es un dispositivo de defensa personal compacto y eficaz que emite un spray de pimienta para disuadir y proteger contra amenazas.",img1: "./assets/Cards/13.JPG",img2: "./assets/Cards/13 2.JPG",},
];

let contenedor = document.getElementById("ContenedorCard");
let mostrarCantidad = 9;
let productosFiltrados = [...productos];

let inputBusqueda = document.getElementById("Busqueda");

function mostrarProductos() {
    contenedor.innerHTML = "";

    if (productosFiltrados.length === 0) {
        contenedor.innerHTML = `<div class="mensaje-no-encontrado">No se encontraron productos.</div>`;
        return;
    }

    let swiperStyle = document.createElement("style");
    swiperStyle.innerHTML = `
    .swiper-button-next, .swiper-button-prev {
        color: #222D38;
    }

    .swiper-pagination-bullet {
        background-color: #343F4A;
    }

    .swiper-pagination-bullet-active {
        background-color: #222D38;
    }
`;
    document.head.appendChild(swiperStyle);

    productosFiltrados.slice(0, mostrarCantidad).forEach((producto, index) => {
        contenedor.innerHTML += `
        <div class="segunda-card" data-producto-id="${index}">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="${producto.img1}" alt="Imagen 1" loading="lazy"></div>
                    <div class="swiper-slide"><img src="${producto.img2}" alt="Imagen 2" loading="lazy"></div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
            <h2>${producto.nombre}</h2>
            <h3 class="descripcion-corta">${producto.descripcion.substring(0, 35)}...</h3>
            <button class="ver-mas-btn" onclick="toggleDescripcion(event, ${index})">Ver Info</button>
            <h4>$${producto.precio}</h4>
            <div class="cant-comprar">
                <input type="number" placeholder="Cantidad" min="1">
                <button class="comprar-btn">Comprar</button>
            </div>
        </div>`;
    });

    setTimeout(() => {
        var swipers = document.querySelectorAll(".mySwiper");
        swipers.forEach(swiperElement => {
            new Swiper(swiperElement, {
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        });
    }, 100);

    let botones = document.querySelectorAll(".comprar-btn");
    botones.forEach((boton) => {
        boton.removeEventListener("click", manejarCompra);
        boton.addEventListener("click", manejarCompra);
    });

    verMasBtn.style.display = mostrarCantidad >= productosFiltrados.length ? "none" : "block";
    verMenosBtn.style.display = mostrarCantidad > 9 ? "block" : "none";
}

function toggleDescripcion(event, index) {
    mostrarDetalleProducto(index);
}

function mostrarDetalleProducto(index) {
    let producto = productos[index];
    Swal.fire({
        title: producto.nombre,
        html: `
            <div class="swiper mySwiperModal">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="${producto.img1}" alt="Imagen 1" class="swiper-img"></div>
                    <div class="swiper-slide"><img src="${producto.img2}" alt="Imagen 2" class="swiper-img"></div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
            <p class="descripcion">${producto.descripcion}</p>
            <h3 class="precio">Precio: $${producto.precio}</h3>
            <div class="cant-comprar">
                <input type="number" placeholder="Cantidad" min="1" id="cantidadProducto" class="input-cantidad">
                <button class="btn-comprar" onclick="comprarDesdeModal(${index})">Comprar</button>
            </div>
        `,
        customClass: {
            title: 'titulo-verinfo',
        },
        width: "30%",
        showCloseButton: true,
        showConfirmButton: false,
        didOpen: () => {
            setTimeout(() => {
                new Swiper(".mySwiperModal", {
                    loop: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });
            }, 100);
        },
        customClass: {
            popup: 'popup-modal',
        },
    });
}


function comprarDesdeModal(index) {
    let cantidadInput = document.getElementById("cantidadProducto");
    let cantidad = parseInt(cantidadInput.value) || 0;

    if (cantidad <= 0) {
        mostrarNotificacion("Por favor, ingresa una cantidad válida.", "error");
        return;
    }

    let producto = productosFiltrados[index];  // Asegura que estás usando el array filtrado
    let img = document.querySelector(".mySwiperModal .swiper-slide img").src; // Obtiene la imagen visible en el modal

    agregarAlCarrito(producto.nombre, producto.precio, img, cantidad);
    Swal.close();
}

function agregarAlCarrito(nombre, precio, img, cantidad) {
    if (cantidad <= 0) {
        console.log("Error: La cantidad debe ser mayor a 0.");
        return;
    }
    console.log(`Producto agregado al carrito: ${nombre}, ${precio}, ${cantidad}, ${img}`);
}

function manejarCompra(event) {
    let card = event.target.closest(".segunda-card");
    if (!card) {
        console.error("No se pudo encontrar la tarjeta del producto.");
        return;
    }

    let productoId = card.getAttribute("data-producto-id");
    let producto = productosFiltrados[productoId];

    let nombre = producto.nombre;
    let precio = producto.precio;
    let img = card.querySelector(".swiper-slide img").src;
    let cantidadInput = card.querySelector(".cant-comprar input");
    let cantidad = parseInt(cantidadInput.value) || 0;

    agregarAlCarrito(nombre, precio, img, cantidad);  // Función para agregar al carrito
    cantidadInput.value = "0";
}

let botonesContainer = document.createElement("div");
botonesContainer.classList.add("btn-container");

let verMasBtn = document.createElement("button");
verMasBtn.textContent = "Ver más";
verMasBtn.classList.add("BtnVermas");

let verMenosBtn = document.createElement("button");
verMenosBtn.textContent = "Ver menos";
verMenosBtn.classList.add("BtnVermas");

botonesContainer.appendChild(verMasBtn);
botonesContainer.appendChild(verMenosBtn);
document.querySelector(".SeccionCard").appendChild(botonesContainer);

verMasBtn.addEventListener("click", function () {
    verMasBtn.disabled = true;
    verMasBtn.innerHTML = '<span class="loader"></span> Cargando...';

    setTimeout(() => {
        mostrarCantidad = Math.min(mostrarCantidad + 9, productosFiltrados.length);
        mostrarProductos();
        verMasBtn.innerHTML = "Ver más";
        verMasBtn.disabled = false;
    }, 800);
});

verMenosBtn.addEventListener("click", function () {
    verMenosBtn.disabled = true;
    verMenosBtn.innerHTML = '<span class="loader"></span> Cargando...';

    setTimeout(() => {
        mostrarCantidad = Math.max(mostrarCantidad - 9, 9);
        mostrarProductos();
        verMenosBtn.innerHTML = "Ver menos";
        verMenosBtn.disabled = false;
    }, 800);
});

// CSS para el loader
const style = document.createElement("style");
style.innerHTML = `
    .loader {
        border: 2px solid #f3f3f3;
        border-top: 2px solid #3498db;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        animation: spin 0.8s linear infinite;
        display: inline-block;
        margin-right: 5px;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

inputBusqueda.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let termino = inputBusqueda.value.toLowerCase();
        productosFiltrados = termino ? productos.filter(producto =>
            producto.nombre.toLowerCase().includes(termino)
        ) : [...productos];
        mostrarProductos();
        document.querySelector(".nuestros-productos").scrollIntoView({
            behavior: "smooth"
        });
    }
});

mostrarProductos();

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio, img, cantidad) {
    if (cantidad <= 0) {
        console.log("Error: La cantidad debe ser mayor a 0.");
        return;
    }

    console.log(`Producto agregado al carrito: ${nombre}, ${precio}, ${cantidad}, ${img}`);
}