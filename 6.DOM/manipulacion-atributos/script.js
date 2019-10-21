var link = document.getElementById("link");

// Verifica si tiene el atributo "href".
if(link.hasAttribute("href")) {
    console.log("Valor del atributo:", link.getAttribute("href"));
}

// Agrega un atributo.
link.setAttribute("class", "verde");
console.log("Enlace:", link);
console.log("Atributos:", link.attributes);

// Elimina un atributo.
link.removeAttribute("class");
console.log("Atributos:", link.attributes);

// Control de clases.
link.classList.add("rojo");
link.classList.add("roboto");
console.log("Clases:", link.classList);

// Remover una clase.
link.classList.remove("roboto");
console.log("Clases:", link.classList);

// Consultar por una clase existente.
if (link.classList.contains("rojo")) {
    console.log("Contiene la clase rojo");
} else {
    console.log("No contiene la clase rojo");
}


