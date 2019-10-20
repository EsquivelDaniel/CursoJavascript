// var cont;
// for (cont = 0; cont < 10; cont++) {
//     console.log("Valor del contador:", cont)
// }

// var numeros = [2, 4, 6, 8, 10];
// for (var i = 0; i < numeros.length; i++) {
//     console.log("Valor de la posicion", i, ":", numeros[i]);
// }

var productos = [
    { nombre: "PS4", precio: 250 },
    { nombre: "iPhone X", precio: 800 },
    { nombre: "Laptop", precio: 300 },
    { nombre: "TV", precio: 200 }
];
var productosDescuento = [];

for (var i = 0; i < productos.length; i++) {
    if (productos[i].precio >= 300) {
        productosDescuento.push(productos[i]);
    }
}
console.log("Productos con descuentos:", productosDescuento);