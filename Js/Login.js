
const botonlogin = document.getElementById("Btnlogin")

botonlogin.addEventListener("click", validarContraseña)

function validarContraseña() {
    const contraseñaCorrecta = "lym2022";
    const contraseñaIngresada = document.getElementById("password").value;

    if (contraseñaIngresada === contraseñaCorrecta) {
        window.location.href = "./productos.html";
    } else {
        Toastify({
            text: "⚠️ Contraseña incorrecta",
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
                background: "linear-gradient(to right,rgb(255, 0, 0),rgb(182, 2, 2))",
            }
        }).showToast();
    }
}