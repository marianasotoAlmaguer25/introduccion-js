
class Libro {

    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = [];
    }


    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}. Estado: ${this.estado}.`);
    }

    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" añadido a ${this.titulo}.`);
    }
}


const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");
const libro2 = new Libro("1984", "George Orwell", 1949, "prestado");


libro1.describirLibro();
libro1.agregarCapitulo("Estructura de la familia Buendía");

console.log(libro1.capitulos);