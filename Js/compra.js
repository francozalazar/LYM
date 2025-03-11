document.getElementById("comprarBtn").addEventListener("click", () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        Swal.fire({
            title: "Carrito vacío",
            text: "No puedes continuar con la compra porque el carrito está vacío.",
            icon: "warning",
            customClass: {confirmButton: "BtnCompra",},
            confirmButtonText: "Aceptar"
        });
        return;
    }

    Swal.fire({
        title: "Completa tu compra",
        html: `
            <input type="text" id="nombre" class="swal2-input" placeholder="Nombre y Apellido" required>
            <input type="text" id="localidad" class="swal2-input" placeholder="Localidad" required>
            <input type="email" id="correo" class="swal2-input" placeholder="Correo Electrónico" required>
            <input type="tel" id="whatsapp" class="swal2-input" placeholder="Número de WhatsApp" required>
            <select id="envio" class="swal2-select">
                <option value="Retiro en tienda">Retiro en tienda</option>
                <option value="Envío a domicilio">Envío a domicilio</option>
            </select>
            <textarea id="mensaje" class="swal2-textarea" placeholder="Mensaje adicional"></textarea>
        `,
        confirmButtonText: "Confirmar compra",
        customClass: {confirmButton: "BtnCompra",},
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        width: "40%",
        preConfirm: () => {
            const nombre = document.getElementById("nombre").value;
            const localidad = document.getElementById("localidad").value;
            const correo = document.getElementById("correo").value;
            const whatsapp = document.getElementById("whatsapp").value;
            const envio = document.getElementById("envio").value;
            const mensaje = document.getElementById("mensaje").value;

            if (!nombre || !localidad || !correo || !whatsapp) {
                Swal.showValidationMessage("Por favor, completa todos los campos requeridos");
                return false;
            }

            return { nombre, localidad, correo, whatsapp, envio, mensaje };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let carritoHTML = carrito.map((producto, index) => 
                `${index + 1}.
                *${producto.nombre}*
                Cantidad:${producto.cantidad}
                Precio:$${producto.precio * producto.cantidad}
                -------`).join('\n');

            // Calcular total y aplicar descuentos
            let totalSinDescuento = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
            let descuento = 0;

            if (totalSinDescuento > 900000) {
                descuento = totalSinDescuento * 0.10; // 10% de descuento
            } else if (totalSinDescuento > 500000) {
                descuento = totalSinDescuento * 0.07; // 7% de descuento
            } else if (totalSinDescuento > 200000) {
                descuento = totalSinDescuento * 0.05; // 5% de descuento
            }

            let totalPagar = totalSinDescuento - descuento;

            let form = document.getElementById("compraForm");
            if (form) {
                form.elements["nombre"].value = result.value.nombre;
                form.elements["localidad"].value = result.value.localidad;
                form.elements["email"].value = result.value.correo;
                form.elements["whatsapp"].value = result.value.whatsapp;
                form.elements["envio"].value = result.value.envio;
                form.elements["mensaje"].value = result.value.mensaje;
                form.elements["carrito"].value = `🛒 *Pedido de compra:*\n\n${carritoHTML}\n🧾 *Total sin descuento: $${totalSinDescuento.toFixed(2)}*\n🔖 *Descuento aplicado: $${descuento.toFixed(2)}*\n💰 *Total a pagar: $${totalPagar.toFixed(2)}*`;
                form.elements["_replyto"].value = result.value.correo;
                form.elements["_cc"].value = result.value.correo;

                localStorage.removeItem("carrito");

                form.submit();

                Swal.fire("¡Pedido realizado!", "Te hemos enviado un correo con los detalles del pedido. Nos comunicaremos contigo para finalizar la compra.", "success");
            } else {
                Swal.fire("Error", "No se encontró el formulario de compra.", "error");
            }
        }
    });
});