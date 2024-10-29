// Selecciona el checkbox y el div de porcentajes
const switchPorcIndv = document.getElementById('switch-porc-indv');
const divPorcentajes = document.getElementById('porcentajes');

// Función para alternar la visibilidad del div
function togglePorcentajes() {
    if (switchPorcIndv.checked) {
        divPorcentajes.style.display = 'block';
    } else {
        divPorcentajes.style.display = 'none';
    }
}

// Llama a la función al cargar la página para establecer el estado inicial
togglePorcentajes();

// Escucha los cambios en el checkbox
switchPorcIndv.addEventListener('change', togglePorcentajes);
