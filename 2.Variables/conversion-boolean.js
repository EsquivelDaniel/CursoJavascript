//Conversion de Boolean a Number
var boolean = true;
console.log("Es de tipo:", typeof Number(boolean));
console.log("El valor es:", Number(boolean));

//Conversion de Boolean a String
console.log("Es de tipo:", typeof String(boolean));
console.log("El valor es:", String(boolean));

//Conversion de cualquier valor a Boolean
console.log("Falso:", Boolean(""));
console.log("Falso:", Boolean(0));
console.log("Falso:", Boolean(null));
console.log("Falso:", Boolean(undefined));
console.log("Falso:", Boolean(NaN));

console.log("Verdadero:", Boolean("Hola"));
console.log("Verdadero:", Boolean({}));
console.log("Verdadero:", Boolean([]));
console.log("Verdadero:", Boolean(7));