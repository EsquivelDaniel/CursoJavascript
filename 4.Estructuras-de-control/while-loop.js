var contador = 0;

// while (contador  < 11) {
//     console.log("El valor del contador es:", contador);
//     contador++;
// }

var animales = ["Mono", "Perro", "Gato", "Loro"];
var cantidadElementos = animales.length;
var posicion = 0;
console.log("Longitud del arrglo", cantidadElementos);


while (posicion < cantidadElementos) {
    console.log("Posicion", posicion, ": ", animales[posicion])
    posicion++
}

