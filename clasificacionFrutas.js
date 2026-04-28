const frutas = ['manzana', 'pera', 'manzana', 'platano', 'pera', 'manzana', 'uva', 'pera', 'platano'];
const conteoFrutas = {};


for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}
console.log("Conteo con FOR:", conteoFrutas);


const conteoWhile = {};
let j = 0; 
while (j < frutas.length) {
    let nombreFruta = frutas[j];
    if (conteoWhile[nombreFruta]) {
        conteoWhile[nombreFruta]++;
    } else {
        conteoWhile[nombreFruta] = 1;
    }
    j++;
}
console.log("Conteo con WHILE:", conteoWhile);

  