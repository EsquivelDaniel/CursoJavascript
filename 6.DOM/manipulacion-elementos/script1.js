// Crea un elemento de HTML
var parrafo = document.createElement("p");
parrafo.innerHTML = "Hola Mundo!";
// document.body.appendChild(parrafo); // Si se va a agregar unicamente el elemento en el body.

// Agrega un elemento al body
var app = document.getElementById("app");
app.appendChild(parrafo);

// Agrega estilo al elemento div
var bloque = document.createElement("DIV");
bloque.style.width = "200px";
bloque.style.height = "200px";
bloque.style.backgroundColor = "red";
//bloque.innerHTML = "<h1>Bloque</h1>";
bloque.innerHTML = `
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
`;
app.appendChild(bloque);