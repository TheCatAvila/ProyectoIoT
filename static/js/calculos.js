// Validación de porcentaje en tiempo real
function validarPorcentaje(idInput, idError) {
    const input = document.getElementById(idInput);
    const error = document.getElementById(idError);

    input.addEventListener('input', () => {
        const value = parseFloat(input.value);

        if (value < 1 || value > 100 || isNaN(value)) {
            error.classList.remove('invisible');
        } else {
            error.classList.add('invisible');
        }
    });
}

// Llamamos a la función de validación para cada campo de porcentaje
validarPorcentaje('por-nota-1', 'error-por-1');
validarPorcentaje('por-nota-2', 'error-por-2');
validarPorcentaje('por-nota-3', 'error-por-3');
validarPorcentaje('por-nota-4', 'error-por-4');

// Función para validar la suma total de porcentajes
function validarSumaPorcentajes() {
    const por_nota_1 = parseFloat(document.getElementById('por-nota-1').value) || 0;
    const por_nota_2 = parseFloat(document.getElementById('por-nota-2').value) || 0;
    const por_nota_3 = parseFloat(document.getElementById('por-nota-3').value) || 0;
    const por_nota_4 = parseFloat(document.getElementById('por-nota-4').value) || 0;

    const sumaTotal = por_nota_1 + por_nota_2 + por_nota_3 + por_nota_4;
    const errorGlobal = document.getElementById('error-pors-out-of-range');

    if (sumaTotal !== 100) {
        errorGlobal.classList.remove('invisible');
        return false;
    } else {
        errorGlobal.classList.add('invisible');
        return true;
    }
}

// Función para sumar notas
function sumarNotas() {
    // Selecciona el checkbox y el div de porcentajes
    const switchPorcIndv = document.getElementById('switch-porc-indv');

    // Notas
    const nota_1 = parseFloat(document.getElementById('nota-1').value) || 0;
    const nota_2 = parseFloat(document.getElementById('nota-2').value) || 0;
    const nota_3 = parseFloat(document.getElementById('nota-3').value) || 0;
    const nota_4 = parseFloat(document.getElementById('nota-4').value) || 0;

    // Declarar la variable suma
    let suma;

    // Calcular la suma según el estado del switch
    if (switchPorcIndv.checked) {
        // Validación de la suma de porcentajes
        if (!validarSumaPorcentajes()) {
            return; // Detener si los porcentajes no suman 100
        }

        // Porcentajes
        const por_nota_1 = parseFloat(document.getElementById('por-nota-1').value) || 0;
        const por_nota_2 = parseFloat(document.getElementById('por-nota-2').value) || 0;
        const por_nota_3 = parseFloat(document.getElementById('por-nota-3').value) || 0;
        const por_nota_4 = parseFloat(document.getElementById('por-nota-4').value) || 0;

        // Calcular la suma con porcentajes
        suma = (nota_1 * por_nota_1 / 100) + 
               (nota_2 * por_nota_2 / 100) + 
               (nota_3 * por_nota_3 / 100) + 
               (nota_4 * por_nota_4 / 100);
    } else {
        // Calcular el promedio simple sin porcentajes
        suma = (nota_1 + nota_2 + nota_3 + nota_4) / 4;
    }

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').textContent = `Tu promedio es: ${suma.toFixed(2)}`;
}


// JavaScript para calcular la suma
document.getElementById('btn-calcular').addEventListener('click', sumarNotas);

