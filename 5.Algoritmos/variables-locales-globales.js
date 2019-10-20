// Declaracion de variable global.
var contador = 0;
function incrementarContador() {
    contador++;
    console.log(contador);
}
incrementarContador();


// Declaracion de variable local.
function saludar() {
    var saludo = "Hola";
    console.log(saludo);
}
saludar();