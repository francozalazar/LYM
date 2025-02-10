let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar productos al carrito con cantidad específica
function agregarAlCarrito(nombre, precio, img, cantidad) {
    console.log(`Intentando agregar ${cantidad} ${nombre} al carrito.`);

    // Verificar si la cantidad es válida (mayor que 0)
    if (cantidad <= 0 || isNaN(cantidad)) {
        mostrarNotificacion("Por favor, ingresa una cantidad válida.", "error");
        return; // No agregar al carrito si la cantidad no es válida
    }

    let productoExistente = carrito.find(producto => producto.nombre === nombre);
    
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, img, cantidad });
    }
    guardarCarrito();
    actualizarCarrito();

    // Mostrar notificación de éxito después de agregar el producto al carrito
    mostrarNotificacion(`${cantidad} ${nombre} ha sido agregado al carrito.`, "exito");
}

// Función para mostrar notificación en la pantalla
function mostrarNotificacion(mensaje, tipo) {
    let notificacion = document.createElement("div");
    notificacion.classList.add("notif", tipo);
    notificacion.textContent = mensaje;
    
    // Añadir la notificación al body
    document.body.appendChild(notificacion);

    // Mostrarla por un corto periodo de tiempo y luego eliminarla
    setTimeout(() => {
        notificacion.classList.add("mostrar");
    }, 10);

    setTimeout(() => {
        notificacion.classList.remove("mostrar");
        setTimeout(() => {
            notificacion.remove();
        }, 500); // Eliminar después de la animación
    }, 3000); // Mantener la notificación visible por 3 segundos
}

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para actualizar el HTML del carrito
function actualizarCarrito() {
    console.log("Actualizando carrito...");
    let tablaBody = document.querySelector("tbody");
    let total = 0;
    tablaBody.innerHTML = "";

    carrito.forEach(producto => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td><img src="${producto.img}" alt="${producto.nombre}"></td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio * producto.cantidad}</td>
            <td><a href="#" class="eliminar" onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</a></td>
        `;
        tablaBody.appendChild(fila);
        total += producto.precio * producto.cantidad;
    });
    document.querySelector(".total").innerHTML = `<strong>Total:</strong> $${total}`;
    guardarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(nombre) {
    console.log(`Eliminando ${nombre} del carrito.`);
    carrito = carrito.filter(producto => producto.nombre !== nombre);
    guardarCarrito();
    actualizarCarrito();
}

// Vincular botones de compra a la función agregarAlCarrito
document.addEventListener("DOMContentLoaded", () => {
    console.log("Documento cargado, vinculando botones de compra...");
    let botones = document.querySelectorAll(".cant-comprar button");
    if (botones.length === 0) {
        console.warn("No se encontraron botones de compra.");
    }
    botones.forEach((boton, index) => {
        boton.addEventListener("click", (event) => {
            console.log("Botón de compra clickeado.");
            let card = event.target.closest(".segunda-card");
            if (!card) {
                console.error("No se pudo encontrar la tarjeta del producto.");
                return;
            }
            let nombre = card.querySelector("h2").textContent;
            let descripcion = card.querySelector("h3").textContent;
            let precio = parseFloat(card.querySelector("h2:last-of-type").textContent.replace("$", ""));
            let img = card.querySelector(".swiper-slide img").src;
            let cantidadInput = card.querySelector(".cant-comprar input");
            let cantidad = parseInt(cantidadInput.value) || 0; // Si no hay cantidad, 0 por defecto
            
            console.log(`Producto: ${nombre}, Precio: ${precio}, Cantidad: ${cantidad}, Imagen: ${img}`);
            agregarAlCarrito(nombre, precio, img, cantidad);
            cantidadInput.value = ""; // Limpiar input después de agregar
        });
    });

    actualizarCarrito();
});