var articulos = [
    {
    id: "articulo-001",
    nombre: "Botin Futbol de Campo",
    precio: 5000,
    cover: "Botin-campo.jpg"
    },
    {
    id: "articulo-002",
    nombre: "Botin Futbol 5",
    precio: 4000,
    cover: "Botin-Futbol-5.jpg"
    },
    {
    id: "articulo-003",
    nombre: "Botin Futsal",
    precio: 4500,
    cover: "Botin-Futsal.jpg"
    }
];

// Funcion que asigna los valores recibidos a un producto.
function crearProducto(tipo, contenido, clase, archivoImagen) {
    var elemento = document.createElement(tipo);
    if (contenido != null) {
        elemento.innerHTML = contenido;
    }
    if (clase != null) {
        elemento.classList.add(clase);
    }
    if (archivoImagen != null) {
        elemento.setAttribute("src", "../assets/" + archivoImagen);
    }
    return elemento;
};

// Funcion 
function dibujarProducto(articulo) {
    // Agrega la imagen de la tarjeta.
    var itemCard = crearProducto("div", null, "item-card", null);
    itemCard.appendChild(
        crearProducto("img", null, "imagen", articulo.cover)
    );
    itemCard.appendChild(
        crearProducto("h2", articulo.nombre, null, null)
    );
    
    //Agregam la fila del precio del articulo en la tarjeta.
    var filaPrecio = crearProducto("div", null, "fila", null);
    filaPrecio.appendChild(
        crearProducto("span", "precio", "subtitulo", null)
    );
    filaPrecio.appendChild(
        crearProducto("span", "$", "precio", null)
    );
    filaPrecio.appendChild(
        crearProducto("span", articulo.precio, "precio", null)
    );
    itemCard.appendChild(filaPrecio);

    //Agrega la fila de la cantidad del articulo en la tarjeta.
    var filaContador = crearProducto("div", null, "fila", null);
    filaContador.appendChild(
        crearProducto("span", "cantidad", "subtitulo", null)
    );
    var contador = crearProducto("div", null, "contador", null);
    var etiquetaCantidad = crearProducto("span", 0, "cantidad", null);
    contador.appendChild(etiquetaCantidad);

    var botonMenos = crearProducto("img", null, "boton-menos", "menos.svg");
    botonMenos.addEventListener("click", disminuirCantidad.bind(null, etiquetaCantidad));
    contador.appendChild(botonMenos);

    var botonMas = crearProducto("img", null, "boton-mas", "mas.svg");
    botonMas.addEventListener("click", aumentarCantidad.bind(null, etiquetaCantidad));
    contador.appendChild(botonMas);

    filaContador.appendChild(contador);

    itemCard.appendChild(filaContador);

    var botonAgregar = crearProducto("div", "Agregar", "boton-agregar", null);
    botonAgregar.addEventListener("click", agregarProducto.bind(null, articulo, etiquetaCantidad));

    //Agrega el boton de agregar en la tarjeta.
    itemCard.appendChild(botonAgregar);

    // Agrega un contenedor al cuerpo de la pagina.
    var contenedorArticulos = document.getElementById("contenedor-articulos");
    contenedorArticulos.appendChild(itemCard);
}

// Se agrega los Productos de forma dinamica.
for (let i = 0; i < articulos.length; i++) {
    dibujarProducto(articulos[i]);
}


// Variables globales para el calculo de los productos
var etiquetaSubTotal = document.getElementById("etiqueta-subtotal");
var etiquetaTotal = document.getElementById("etiqueta-total");
var etiquetaEnvio = document.getElementById("etiqueta-envio");
var etiquetaDescuento = document.getElementById("etiqueta-descuento");
var etiquetaValorEnvio = document.getElementById("etiqueta-valor-envio");
var etiquetaValorDescuento = document.getElementById("etiqueta-valor-descuento");
var contenedor = document.getElementById("contenedor");
var descuento = 0;
var precioSubTotal = 0;

// Funcion que aumenta la cantidad en 1 en el contador.
function aumentarCantidad(etiquetaCantidad) {
    etiquetaCantidad.innerHTML++;
}

// Funcion que disminuye la cantidad en 1 en el contador.
function disminuirCantidad(etiquetaCantidad) {
    if (etiquetaCantidad.innerHTML >= 1) {
        etiquetaCantidad.innerHTML--;
    }
}

// Funcion que agrega el producto y calcula el precio.
function agregarProducto(articulo, etiquetaCantidad) {
    articulo.agregado = true;
    if (etiquetaCantidad.innerHTML > 0) {
        precioSubTotal += Number(articulo.precio) * Number(etiquetaCantidad.innerHTML);
        etiquetaSubTotal.innerHTML = precioSubTotal;
    }
    if (precioSubTotal > 8000) {
        etiquetaEnvio.style.color = "green";
        etiquetaValorEnvio.innerHTML = 0;
    }

    agregarEtiquetaArticulo(articulo, etiquetaCantidad);

    var aplicarDescuento = corroborarDescuento();

    if (aplicarDescuento && precioSubTotal > 15000) {
        etiquetaDescuento.style.color = "green";
        descuento = precioSubTotal * 0.1;
        etiquetaValorDescuento.innerHTML = descuento;
    }
    etiquetaTotal.innerHTML = (precioSubTotal + Number(etiquetaValorEnvio.innerHTML)) - Number(etiquetaValorDescuento.innerHTML);
    etiquetaCantidad.innerHTML = 0;
}

function agregarEtiquetaArticulo(articulo, etiquetaCantidad) {
    var fila = crearProducto("div", null, "fila", null);
    
    if (articulo.cantidadAcumulada == null) {
        articulo.cantidadAcumulada = Number(etiquetaCantidad.innerHTML);
    } else {
        articulo.cantidadAcumulada += Number(etiquetaCantidad.innerHTML);
    }

    var texto = crearProducto(
        "span",
        articulo.nombre + " x " + articulo.cantidadAcumulada,
        "subtitulo",
        null
    );

    fila.appendChild(texto);

    if (articulo.referenciaArticulos == null) {
        contenedor.appendChild(fila);
    } else {
        contenedor.replaceChild(fila, articulo.referenciaArticulos);
    }
    articulo.referenciaArticulos = fila;
}

function corroborarDescuento() {
    var cantidadTipoArticulos = 0;
    for (let i = 0; i < articulos.length; i++) {
        if(articulos[i].agregado) {
            cantidadTipoArticulos++;
        }
    }
    if (cantidadTipoArticulos >= 2) {
        return true;
    } else {
        return false;
    }
}