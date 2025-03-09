let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar productos al carrito con cantidad específica
function agregarAlCarrito(nombre, precio, img, cantidad) {
    console.log(`Intentando agregar ${cantidad} ${nombre} al carrito.`);

    if (cantidad <= 0 || isNaN(cantidad)) {
        mostrarNotificacion("Por favor, ingresa una cantidad válida.", "error");
        return;
    }
    let productoExistente = carrito.find(producto => producto.nombre === nombre);
    
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, img, cantidad });
    }
    guardarCarrito();
    noticarrito();
}

function noticarrito(){
    if (!document.querySelector(".toastify")) {
        Toastify({
            text: "✅ Producto agregado al carrito!",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #4CAF50, #8BC34A)",
                color: "#fff",
                borderRadius: "8px",
                padding: "12px",
                fontSize: "16px"
            }
        }).showToast();
    }
}

function mostrarNotificacion(mensaje, tipo) {
    Toastify({
        text: `⚠️ ${mensaje}`,
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
            background: tipo === "error" ? "#FF5722" : "#FFC107",
            color: "#fff",
            borderRadius: "8px",
            padding: "12px",
            fontSize: "16px"
        }
    }).showToast();
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarCarrito() {
    let tablaBody = document.querySelector("tbody");
    let total = 0;
    tablaBody.innerHTML = "";

    carrito.forEach(producto => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td><img src="${producto.img}" alt="${producto.nombre}"></td>
            <td>
                <div class="cantidad-container">
                    <button class="cantidad-btn menos" onclick="modificarCantidad('${producto.nombre}', -1)">-</button>
                    <input type="text" value="${producto.cantidad}" class="cantidad-input" readonly />
                    <button class="cantidad-btn mas" onclick="modificarCantidad('${producto.nombre}', 1)">+</button>
                </div>
            </td>
            <td>$${producto.precio * producto.cantidad}</td>
            <td><a href="#" class="eliminar" onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</a></td>
        `;
        tablaBody.appendChild(fila);
        total += producto.precio * producto.cantidad;
    });

    // Verificar si el total supera los 100k y aplicar el descuento
    if (total > 100000) {
        let descuento = total * 0.02;  // 2% de descuento
        let totalConDescuento = total - descuento;

        // Actualiza el total con el precio original tachado y el precio con descuento
        document.querySelector(".total").innerHTML = `
            <strong>Total:</strong> <span class="tachado">$${total.toFixed(2)}</span> 
            <span class="con-descuento">$${totalConDescuento.toFixed(2)}</span>
        `;
    } else {
        document.querySelector(".total").innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}`;
    }

    guardarCarrito();
}


function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(producto => producto.nombre !== nombre);
    guardarCarrito();
    actualizarCarrito();
}

function modificarCantidad(nombre, cambio) {
    let producto = carrito.find(p => p.nombre === nombre);
    if (producto) {
        let nuevaCantidad = producto.cantidad + cambio;
        if (nuevaCantidad <= 0) {
            nuevaCantidad = 1;  // No permitir cantidades negativas o cero
        }
        producto.cantidad = nuevaCantidad;
        guardarCarrito();
        actualizarCarrito();
    }
}

// Función para asignar eventos a los botones de compra después de renderizar productos
function asignarEventosCompra() {
    let botones = document.querySelectorAll(".comprar-btn");
    botones.forEach((boton) => {
        boton.removeEventListener("click", manejarCompra);
        boton.addEventListener("click", manejarCompra);
    });
}

function manejarCompra(event) {
    let card = event.target.closest(".segunda-card");
    if (!card) {
        console.error("No se pudo encontrar la tarjeta del producto.");
        return;
    }
    let nombre = card.querySelector("h2").textContent;
    let precio = parseFloat(card.querySelector("h4").textContent.replace("$", ""));
    let img = card.querySelector(".swiper-slide img").src;
    let cantidadInput = card.querySelector(".cant-comprar input");
    let cantidad = parseInt(cantidadInput.value) || 0;
    
    console.log(`Producto: ${nombre}, Precio: ${precio}, Cantidad: ${cantidad}, Imagen: ${img}`);
    agregarAlCarrito(nombre, precio, img, cantidad);
    cantidadInput.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito();
    asignarEventosCompra(); // Asegura que los eventos se asignen al cargar la página
});
