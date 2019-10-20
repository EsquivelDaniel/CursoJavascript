function saludar () {
    console.log("Hola Mundo!");
}
saludar();
var saludarHumano = true;
if (saludarHumano) {
    saludar();
}


function suma(a, b) {
    console.log("La suma es:", a + b);
}
suma(2,7);


function sumaConResultado(num1, num2) {
    return num1 + num2;
}
var resultado = sumaConResultado(4, 8);
console.log("El resultado es:", resultado);


var productos = [
    { nombre: "PS4", precio: 250 },
    { nombre: "iPhone X", precio: 800 },
    { nombre: "Laptop", precio: 300 },
    { nombre: "TV", precio: 200 }
];

function revisarDescuento(productos) {
    if (productos.precio >= 300) {
        return "Tienes descuento con " + productos.nombre;
    } else {
        return "No tienes descuento con " + productos.nombre;
    }
}
for (var i = 0; i < productos.length; i++) {
    var resultado = revisarDescuento(productos[i]);
    console.log(resultado);
}