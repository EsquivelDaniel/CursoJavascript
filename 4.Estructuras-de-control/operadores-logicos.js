var montoTotal = 150;
var usuario = {
    nombre: "Jose",
    tieneDescuento: true
};

//Operador && (AND ("y" logico))
if(usuario.tieneDescuento && montoTotal >= 200) {
    console.log("Obtiene promocion este usuario");
} else {
    console.log("No obtiene promocion este usuario");
}

//Operador || (OR ("o" logico))
if(usuario.tieneDescuento || montoTotal >= 200) {
    console.log("Obtiene promocion este usuario");
} else {
    console.log("No obtiene promocion este usuario");
}

var goku = {
    nombre: "Goku",
    noTieneHambre: false
}

//Operador ! (NOT (negacion))
if(!goku.noTieneHambre) {
    console.log("Goku tiene hambre");
} else {
    console.log("Goku NO tiene hambre");
}

            /*  Ejercicio 1  */
// Si compra mas de $200.
// y
// Si es su primer visita.

var usuario = {
    nombre: "Jorge",
    primerVisita: true
};
var precioTotal = 150;

if(precioTotal > 200 && usuario.primerVisita) {
    console.log(usuario.nombre, "Obtiene un descuento");
} else {
    console.log(usuario.nombre, "No obtiene un descuento!");
}

            /*  Ejercicio 2  */
// Si compra mas o igual de $300.
// o
// Si NO es su primer visita.

var usuario = {
    nombre: "Pepe",
    primerVisita: false
};
var precioTotal = 50;

if(precioTotal >= 300 || !usuario.primerVisita) {
    console.log(usuario.nombre, "Obtiene un descuento");
} else {
    console.log(usuario.nombre, "No obtiene un descuento!");
}