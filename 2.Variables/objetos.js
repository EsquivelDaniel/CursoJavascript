//Declaracion de un objeto: {nombre de la propiedad: valor de la propiedad}
var goku = {
    nombre: "Goku",
    edad: 40,
    tieneHijo: true
};

console.log("Objeto:", goku);
console.log("Es de tipo:", typeof goku);

//Acceso a una propiedad especifica
console.log("Edad:", goku.edad);

//Actualiza alguna propiedad
goku.edad = 38;
console.log("Edad:", goku.edad);

//Se agrega propiedad al Objeto
goku.esTerricola = false;
console.log("Objeto con nuevas propiedades:", goku);

//Se eliminaalguna propiedad del Objeto
delete goku.esTerricola;
console.log("Objeto con menos propiedades:", goku);

//Declaracion de un segundo Objeto
var gohan = {
    nombre: "Gohan",
    edad: 18
};

//Objeto que contiene otro objeto como propiedad
var goku = {
    nombre: "Goku",
    edad: 40,
    hijo: gohan
};

console.log("Objeto que contiene otro objeto como propiedad:", goku)

