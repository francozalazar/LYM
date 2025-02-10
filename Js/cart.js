let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function agregarAlCarrito(nombre, precio, img, cantidad) {
    console.log(`Intentando agregar ${cantidad} ${nombre} al carrito.`);

    if (cantidad <= 0 || isNaN(cantidad)) {
        ( "error");
        showProductNoti(nombre);
        return;
    }

    let productoExistente = carrito.find(producto => producto.nombre === nombre);
    
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, img, cantidad });
    }

    guardarCarrito();
    showProductNotification(nombre);
}
function showProductNotification(productName) {
    const notification = document.createElement("div");
    notification.className = "product-notification";
    notification.textContent = `${productName} fue agregado al carrito.`;
    notification.style.cssText = `
        position: fixed;
        bottom: 0;
        margin-bottom: 20px;
        display:flex;
        right: 20px;
        background-color: #4caf50;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        z-index: 1000;
        animation: fadeInOut 3s forwards;
        
    `;
}
function showProductNoti(productName) {
    const notification = document.createElement("div");
    notification.className = "product-notification";
    notification.textContent = `Ingrese una cantidad valida`;
    notification.style.cssText = `
        position: fixed;
        bottom: 0;
        margin-bottom: 20px;
        display:flex;
        right: 20px;
        background-color:rgb(255, 0, 0);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        z-index: 1000;
        animation: fadeInOut 3s forwards;
        
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000); // La notificación desaparece después de 3 segundos
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarCarrito() {
    console.log("Actualizando carrito...");
    let tablaBody = document.querySelector("tbody");
    let total = 0;
    tablaBody.innerHTML = "";

    carrito.forEach((producto, index) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td><img src="${producto.img}" alt="${producto.nombre}" style="width: 50px;"></td>
            <td class="cantidad-container">
                <button class="btn-cantidad" onclick="decrementarCantidad(${index})">−</button>
                <span class="cantidad">${producto.cantidad}</span>
                <button class="btn-cantidad" onclick="incrementarCantidad(${index})">+</button>
            </td>
            <td>$${producto.precio * producto.cantidad}</td>
            <td><a href="#" class="eliminar" onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</a></td>
        `;
        tablaBody.appendChild(fila);
        total += producto.precio * producto.cantidad;
    });
    document.querySelector(".total").innerHTML = `<strong>Total:</strong> $${total}`;
    guardarCarrito();
}

function eliminarDelCarrito(nombre) {
    console.log(`Eliminando ${nombre} del carrito.`);
    carrito = carrito.filter(producto => producto.nombre !== nombre);
    guardarCarrito();
    actualizarCarrito();
}

function incrementarCantidad(index) {
    carrito[index].cantidad++;
    actualizarCarrito();
}

function decrementarCantidad(index) {
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        carrito.splice(index, 1);
    }
    actualizarCarrito();
}
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
            let precio = parseFloat(card.querySelector("h2:last-of-type").textContent.replace("$", ""));
            let img = card.querySelector(".swiper-slide img").src;
            let cantidadInput = card.querySelector(".cant-comprar input");
            let cantidad = parseInt(cantidadInput.value) || 0;
            
            console.log(`Producto: ${nombre}, Precio: ${precio}, Cantidad: ${cantidad}, Imagen: ${img}`);
            agregarAlCarrito(nombre, precio, img, cantidad);
            cantidadInput.value = "";
        });
    });
    actualizarCarrito();
});
