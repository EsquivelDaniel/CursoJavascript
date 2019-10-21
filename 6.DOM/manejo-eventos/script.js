var boton = document.getElementById("boton");
function saludo() {
    console.log("Hola Mundo!");
}
// boton.addEventListener("click", saludo);

var esRojo = false;
function cambiarColor(evento){
    if (esRojo) {
        // boton.style.background = "green";
        evento.target.style.background = "green";
        esRojo = false;
    } else {
        // boton.style.background = "red";
        evento.target.style.background = "red";
        esRojo = true;
    }
}
// boton.addEventListener("dblclick", cambiarColor);

var body = document.body;
function agregarParrafo() {
    var parrafo = document.createElement("p");
    parrafo.innerHTML = "Parrafo";
    body.appendChild(parrafo);
}

boton.addEventListener("click", agregarParrafo);