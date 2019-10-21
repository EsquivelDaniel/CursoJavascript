            // Insertar elementos en diferentes posisciones.

var lista = document.getElementById("lista");
var elemento = document.createElement("li");
elemento.innerHTML = "Elemento 4";
// lista.appendChild(elemento); // Inserta en un orden que quizas no conocemos
// lista.insertAdjacentElement("afterbegin", elemento); // Inserta al principio de la lista.
lista.insertAdjacentElement("beforeend", elemento); // Inserta al final de la lista.

var titulo = document.createElement("h1");
titulo.innerHTML = "Titulo de Prueba";
lista.insertAdjacentElement("beforebegin", titulo); // Inserta antes de la lista.
// lista.insertAdjacentElement("afterend", titulo); // Inserta despues de la lista.

var otroElemento = document.createElement("li");
otroElemento.innerHTML = "Elemento 5";
lista.insertBefore(otroElemento, elemento);

            // Borrar contenido del elemento.
// lista.innerHTML = "";

            // Remover elementos hijos.
 lista.removeChild(otroElemento);

            // Reemplazar elementos hijos.
lista.replaceChild(otroElemento, elemento);

            // Clonar elementos.
var otraLista = lista.cloneNode(true);
console.log(otraLista);