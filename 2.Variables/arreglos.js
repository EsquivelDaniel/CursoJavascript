//Declaracion de variable de tipo Arreglo
var animales = ["Lobo", "Leon", "Dragon"];
console.log("Arreglo de animales:", animales);

//Acceder a una posicion especifica del arreglo
console.log("Animal en la segunda posicion:", animales[1]);

//Actualizar el contenido del arreglo
animales[1] = "Ciervo";
console.log("Animal en la segunda posicion:", animales[1]);

//Declaracion de un Arreglo Mixto
var arregloMixto = [1, "palabra", true];
console.log("Arreglo Mixto:", arregloMixto);

//Declaracion de un Arreglo que contiene Objetos
var usuarios = [
    //Objeto 1
    {nombre: "Juan",
    edad:25,},
    //Objeto 2
    {nombre: "Pedro",
    edad: 19},
    //Objeto 3
    {nombre: "Jorge",
    edad: 37}
];
console.log("Arreglo de Objetos:", usuarios);

//Declaracion de un Arreglo con Objetos de diferentes estructuras
usuarios = [
    //Objeto 1
    {nombre: "Juan",
    edad:25,
    tieneHijo: false},
    //Objeto 2
    {},
    //Objeto 3
    {nombre: "Jorge",
    edad: 37}
];
console.log("Arreglo de Objetos:", usuarios);

//Acceder a propiedades especificas de un Objeto dentro de un Arreglo
console.log("Acceder a propiedades especificas de un Objeto dentro de un Arreglo:", usuarios[2].nombre);

//Declaracion de un Arreglo que tiene dentro otros arreglos
var arregloDeArreglo = [[1,2,3], ["Juan", "Pedro", "Jorge"], [4, "Pepe", true]];
console.log("Arreglo de Arreglos:", arregloDeArreglo);

//Acceder a un dato especifico de un Arreglo dentro de Otro
console.log("Acceso a un dato especifico:", arregloDeArreglo[2][2]);