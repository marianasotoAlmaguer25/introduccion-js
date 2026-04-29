
let librosLeidos = [];

function agregarLibro(titulo) {

    librosLeidos.push(titulo);
    console.log(`Libro añadido: "${titulo}"`);
}


function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Lista de libros leídos:");
        // Usamos un ciclo para recorrer la lista
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(`${i + 1}. ${librosLeidos[i]}`);
        }
    }
}


agregarLibro("Las flores del mal");
agregarLibro("Cien años de soledad");
agregarLibro("Piedra de sol");
agregarLibro("poesía de pizarnik");

mostrarLibrosLeidos();