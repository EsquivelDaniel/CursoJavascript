var boton = document.getElementById("boton");
var numeracion = 0;
boton.addEventListener("click", agregarBoton);
function agregarBoton() {
    var otroBoton = document.createElement("div");
    var nombreElemento = "Boton " + numeracion;
    otroBoton.innerHTML = nombreElemento;
    otroBoton.classList.add("otroBoton");
    otroBoton.addEventListener("click", saludo.bind(null, nombreElemento));
    document.body.appendChild(otroBoton);
    numeracion++
}

function saludo(nombre, evento) {
    console.log("Soy el " + nombre);
    evento.target.style.background = "red";
}