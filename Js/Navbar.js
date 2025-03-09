function menuhambuerguesa() {
    document.querySelector('.menu-links').classList.toggle('mostrar');
}
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('activo');
    });
    document.getElementById(sectionId).classList.add('activo');
}

function toggleMenu() {
    const searchMenu = document.getElementById('searchMenu');
    searchMenu.classList.toggle('show');
}