function menuhambuerguesa() {
    document.querySelector('.menu-links').classList.toggle('mostrar');
}
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('activo');
    });
    document.getElementById(sectionId).classList.add('activo');
}