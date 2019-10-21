var lista1 = document.getElementById("lista1");
var titulo1 = lista1.previousElementSibling;
console.log(titulo1);
var titulo2 = lista1.nextElementSibling;
console.log(titulo2);
var primerElemento = lista1.firstElementChild;
primerElemento.style.color = "red";
var ultimoElemento = lista1.lastElementChild;
ultimoElemento.style.color = "blue";

var elementos = lista2.children;
console.log(elementos);
for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    console.log(elemento);
    elemento.style.color = "green";
}