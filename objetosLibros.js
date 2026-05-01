
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


const libro1 = new Libro("Piedra de sol", "Octavio paz", 1957, "disponible");
const libro2 = new Libro("Nadie me verá llorar", "Cristina Rivera Garza", 2000, "prestado");
const libro3 = new Libro("Actos humanos", "Han Kang ", 2014, "disponible");



libro1.describirLibro();
libro2.describirLibro();
libro1.agregarCapitulo("Estructura de la familia Buendía");
libro2.agregarCapitulo("Primer acontecimiento");
libro3.agregarCapitulo("poema I");

console.log(libro1.capitulos);
console.log(libro2.capitulo);
