// Botones
var botonMenos = document.getElementById("boton-menos");
var botonMas = document.getElementById("boton-mas");
var botonAgregar = document.getElementById("boton-agregar");

// Etiquetas

var etiquetaCantidad = document.getElementById("etiqueta-cantidad");
var etiquetaPrecio1 = document.getElementById("etiqueta-precio1");
var etiquetaSubTotal = document.getElementById("etiqueta-subtotal");
var etiquetaTotal = document.getElementById("etiqueta-total");

// Variables globales para el calculo de los productos
var precioSubTotal = 0;
var costoEnvio = 5;

// Funcion que aumenta la cantidad en 1 en el contador.
function aumentarCantidad() {
    etiquetaCantidad.innerHTML++;
}
botonMas.addEventListener("click", aumentarCantidad);

// Funcion que disminuye la cantidad en 1 en el contador.
function disminuirCantidad() {
    if (etiquetaCantidad.innerHTML >= 1) {
        etiquetaCantidad.innerHTML--;
    }
    
}
botonMenos.addEventListener("click", disminuirCantidad);

//
function agregarProducto() {
    if (etiquetaCantidad.innerHTML > 0) {
        precioSubTotal += Number(etiquetaPrecio1.innerHTML) * Number(etiquetaCantidad.innerHTML);
    etiquetaSubTotal.innerHTML = precioSubTotal;
    }
    etiquetaTotal.innerHTML = precioSubTotal + costoEnvio;
}
botonAgregar.addEventListener("click", agregarProducto);

