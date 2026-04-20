
let entrada = prompt("Ingresa la nota del estudiante (0-100):");
let nota = Number(entrada);

if (!isNaN(nota) && nota >= 0 && nota <= 100) {


    if (nota >= 90) {
        console.log("Excelente");
    }
    else if (nota >= 75) {
        console.log("Bien");
    }
    else if (nota >= 60) {
        console.log("Suficiente");
    }
    else {
        console.log("El estudiante no aprueba");
    }

} else {
    console.log("Error: Ingresa un número válido entre 0 y 100");
}