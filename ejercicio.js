function solicitarNumero() {
    let num1 = parseFloat(prompt("Ingresa el primer numero:"));
    let num2 = parseFloat(prompt("Ingresa el segundo numero:"));
    let num3 = parseFloat(prompt("Ingresa un tercer numero:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor ingresa un NUMERO")
        return;
    }

    return[num1, num2, num3];

}

function analizarNumeros(numeros) {
    let [num1, num2, num3] = numeros;

    if (num1 === num2 && num2 === num3) {
        return "Los numeros son iguales";
    }

    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    let medio = num1 + num2 + num3 - mayor - menor;

    return {
        mayor,
        medio,
        menor
    };
}

function imprimirResultados(analisis) {
    let resultadoDiv = document.getElementById("resultado");

    if (typeof analisis === 'string') {
        resultadoDiv.innerHTML = `<p>${analisis}</p>`;
    } else {
        let mayorAMenor = [analisis.mayor, analisis.medio, analisis.menor];
        let menorAMayor = [analisis.menor, analisis.medio, analisis.mayor];

        resultadoDiv.innerHTML = `
            <p>Números ordenados de mayor a menor: ${mayorAMenor.join(', ')}</p>
            <p>Números ordenados de menor a mayor: ${menorAMayor.join(', ')}</p>
        `;
    }
}

function ejecutarPrograma() {
    let numeros = solicitarNumero();
    if (numeros) {
        let analisis = analizarNumeros(numeros);
        imprimirResultados(analisis);
    }
}

document.addEventListener("DOMContentLoaded", ejecutarPrograma);