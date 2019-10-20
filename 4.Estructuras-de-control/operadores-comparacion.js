var edad = 18;

//Operador > (Mayor que)
if(edad > 17) {
    console.log("Puede votar");
} else {
    console.log("No puede votar!");
}

//Operador >= (Mayor o igual que)
if(edad >= 18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar!");
}

var precioFinal = 200;
//Operador < (Menor que)
if(precioFinal < 200) {
    console.log("No obtiene descuento!");
} else {
    console.log("Obtiene descuento");
}

//Operador <= (Menor o igual que)
if(precioFinal <= 200) {
    console.log("No obtiene descuento!");
} else {
    console.log("Obtiene descuento");
}

//Operador == (igual que)
var persona ={
    id: "1234",
    nombre: "Juan",
    edad: 27
};

if(persona.id == "1234") {
    console.log("Los ID coinciden");
} else {
    console.log("Los ID no coinciden");
}

if(persona.edad == "27") {
    console.log("Tiene 27 años");
} else {
    console.log("No tiene 27 años");
}

//Operador === (Igual que (tipo de dato))
if(persona.edad === "27") {
    console.log("Tiene 27 años");
} else {
    console.log("No tiene 27 años");
}

//Operador != (No es igual que)
if(persona.id != 1234) {
    console.log("Todavia aplica descuento para este usuario");
} else {
    console.log("Ya no aplica descuento para este usuario");
}

//Operador !== (No es igual que (tipo de dato))
if(persona.id !== "123") {
    console.log("Todavia aplica descuento para este usuario");
} else {
    console.log("Ya no aplica descuento para este usuario");
}