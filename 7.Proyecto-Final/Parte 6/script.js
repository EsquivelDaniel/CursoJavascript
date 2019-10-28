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
    contador.appendChild(
        crearProducto("img", null, "boton-menos", "menos.svg")
    );
    contador.appendChild(
        crearProducto("span", 0, "cantidad", null)
    );
    contador.appendChild(
        crearProducto("img", null, "boton-mas", "mas.svg")
    );
    filaContador.appendChild(contador);

    itemCard.appendChild(filaContador);

    //Agrega el boton de agregar en la tarjeta.
    itemCard.appendChild(
        crearProducto("div", "Agregar", "boton-agregar", null)
    );

    // Agrega un contenedor al cuerpo de la pagina.
    var contenedorArticulos = document.getElementById("contenedor-articulos");
    contenedorArticulos.appendChild(itemCard);
}

// Se agrega los Productos de forma dinamica.
for (let i = 0; i < articulos.length; i++) {
    dibujarProducto(articulos[i]);
}