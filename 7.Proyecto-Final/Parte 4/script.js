// Variables globales para el calculo de los productos
var etiquetaSubTotal = document.getElementById("etiqueta-subtotal");
var etiquetaTotal = document.getElementById("etiqueta-total");
var contenedor = document.getElementById("contenedor");
var precioSubTotal = 0;
var costoEnvio = 250;

// Botones de Articulo 1 (Botin Campo)
var botonMenos1 = document.getElementById("boton-menos1");
var botonMas1 = document.getElementById("boton-mas1");
var botonAgregar1 = document.getElementById("boton-agregar1");

// Etiquetas de Articulo 1 (Botin Campo)

var etiquetaCantidad1 = document.getElementById("etiqueta-cantidad1");
var etiquetaPrecio1 = document.getElementById("etiqueta-precio1");
var valorReferencia1 = null;
var cantidadAcumulada1 = 0;

// Funcion que aumenta la cantidad en 1 en el contador.
function aumentarCantidad1() {
    etiquetaCantidad1.innerHTML++;
}
botonMas1.addEventListener("click", aumentarCantidad1);

// Funcion que disminuye la cantidad en 1 en el contador.
function disminuirCantidad1() {
    if (etiquetaCantidad1.innerHTML >= 1) {
        etiquetaCantidad1.innerHTML--;
    }
}
botonMenos1.addEventListener("click", disminuirCantidad1);

// Funcion que agrega el producto y calcula el precio.
function agregarProducto1() {
    if (etiquetaCantidad1.innerHTML > 0) {
        precioSubTotal += Number(etiquetaPrecio1.innerHTML) * Number(etiquetaCantidad1.innerHTML);
    etiquetaSubTotal.innerHTML = precioSubTotal;
    }
    etiquetaTotal.innerHTML = precioSubTotal + costoEnvio;
    agregarEtiquetaElemento1();
}
botonAgregar1.addEventListener("click", agregarProducto1);

// Funcion que agrega una leyenda de la cantidad de producto 1.
function agregarEtiquetaElemento1() {
    var fila = document.createElement("div");
    fila.classList.add("fila");
    
    var texto = document.createElement("span");
    texto.classList.add("subtitulo");
    cantidadAcumulada1 += Number(etiquetaCantidad1.innerHTML)
    texto.innerHTML = "Botin Futbol de Campo x " + cantidadAcumulada1;

    fila.appendChild(texto);
    
    if (valorReferencia1 == null) {
        contenedor.appendChild(fila);
    } else {
        contenedor.replaceChild(fila, valorReferencia1);
    }
    valorReferencia1 = fila;
}



// Botones de Articulo 2 (Botin Futbol 5)
var botonMenos2 = document.getElementById("boton-menos2");
var botonMas2 = document.getElementById("boton-mas2");
var botonAgregar2 = document.getElementById("boton-agregar2");

// Etiquetas de Articulo 2 (Botin Futbol 5)

var etiquetaCantidad2 = document.getElementById("etiqueta-cantidad2");
var etiquetaPrecio2 = document.getElementById("etiqueta-precio2");
var valorReferencia2 = null;
var cantidadAcumulada2 = 0;

// Funcion que aumenta la cantidad en 1 en el contador.
function aumentarCantidad2() {
    etiquetaCantidad2.innerHTML++;
}
botonMas2.addEventListener("click", aumentarCantidad2);

// Funcion que disminuye la cantidad en 1 en el contador.
function disminuirCantidad2() {
    if (etiquetaCantidad2.innerHTML >= 1) {
        etiquetaCantidad2.innerHTML--;
    }
}
botonMenos2.addEventListener("click", disminuirCantidad2);

// Funcion que agrega el producto y calcula el precio.
function agregarProducto2() {
    if (etiquetaCantidad2.innerHTML > 0) {
        precioSubTotal += Number(etiquetaPrecio2.innerHTML) * Number(etiquetaCantidad2.innerHTML);
    etiquetaSubTotal.innerHTML = precioSubTotal;
    }
    etiquetaTotal.innerHTML = precioSubTotal + costoEnvio;
    agregarEtiquetaElemento2();
}
botonAgregar2.addEventListener("click", agregarProducto2);

// Funcion que agrega una leyenda de la cantidad de producto 2.
function agregarEtiquetaElemento2() {
    var fila = document.createElement("div");
    fila.classList.add("fila");
    
    var texto = document.createElement("span");
    texto.classList.add("subtitulo");
    cantidadAcumulada2 += Number(etiquetaCantidad2.innerHTML)
    texto.innerHTML = "Botin Futbol 5 x " + cantidadAcumulada2;

    fila.appendChild(texto);
    
    if (valorReferencia2 == null) {
        contenedor.appendChild(fila);
    } else {
        contenedor.replaceChild(fila, valorReferencia2);
    }
    valorReferencia2 = fila;
}