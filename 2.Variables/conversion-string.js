var cadenaNumero = "28";
console.log("El valor es:", cadenaNumero);
console.log("Es de tipo:", typeof cadenaNumero);

//Conversion de String a Number
console.log("El valor es:", Number(cadenaNumero));
console.log("Es de tipo:", typeof Number(cadenaNumero));

//Conversion de String a Number (NaN)
var cadenaRara = "28 3";
console.log("El valor es:", Number(cadenaRara));
console.log("Es de tipo:", typeof Number(cadenaRara));

//Conversion de Number a String
var numero = 10;
console.log("El valor es:", String(numero));
console.log("Es de tipo:", typeof String(numero)); 

//Conversion de Arreglo a String
var numeros = [1, 2, 3, 4];
console.log("El valor es:", String(numeros));
console.log("Es de tipo:", typeof String(numeros));

//Conversion de Objeto a String
var persona = {
    nombre: "Juan",
    apellido: "Perez"
}
console.log("El valor es:", String(persona));
console.log("Es de tipo:", typeof String(persona));

