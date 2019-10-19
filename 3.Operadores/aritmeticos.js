//Operador + (Suma)
var precioManzana = 5;
var precioNaranja = 8;
var precioTotal = precioManzana + precioNaranja;
console.log("El precio total es:", precioTotal);
console.log("El precio total es:", precioManzana + precioNaranja);

//Operador - (Resta)
var descuento = 3;
var precioFinal = 15;
var precioConDescuento = precioFinal - descuento;
console.log("El precio con descuento es:", precioConDescuento);
console.log("El precio con descuento es:", precioFinal - descuento);

//Operador / (Division)
var premio = 1000;
var ganadores = 4;
var premioPorPersona = premio / ganadores;
console.log("El premio por persona es:", premioPorPersona);
console.log("El premio por persona es:", premio / ganadores);

//Operador * (Multiplicacion)
var precioServicio = 100;
var porcentajeDescuento = 0.2;
var cantidadDescuento = precioServicio * porcentajeDescuento;
console.log("La cantidad de descuento es:", cantidadDescuento);
console.log("La cantidad de descuento es:", precioServicio * porcentajeDescuento);

//Concatenar string con variable (Operador +)
console.log("Precio: $" + 50);

var persona = {
    nombre: "Tony",
    apellido: "Vallejos"
};
console.log("La persona es: " + persona);

// Los operadores / y * se aplican en el orden izquierda-derecha.
// Despues los operadores + y - en el orden izquierda-derecha.
console.log(2 + 5 * 4 / 10 - 1);
console.log(10 - 8 / 2 * 2 + 2);

