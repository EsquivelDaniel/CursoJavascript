// Funcion que calcula el cuadrado de un numero.
function cuadrado(num) {
    return num * num;
}
console.log("Resultado:", cuadrado(5));

// Funcion que suma los valores de un arreglo.
var arreglo = [1, 2, 4, 8, 16];
function sumarArreglo(arreglo) {
    var sumaTotal = 0;
    for (var i = 0; i < arreglo.length; i++) {
        sumaTotal += arreglo[i];
    }
    return sumaTotal;
}
console.log("La suma de los valores es:", sumarArreglo(arreglo));

// Funcion que suma los valores de un arreglo con valores mixtos.
var arregloMixto = [1, "2", 4, "8", 16, "32"];
function sumarArregloMixto(arregloMixto) {
    var sumaTotal = 0;
    for (var i = 0; i < arregloMixto.length; i++) {
        sumaTotal += Number(arregloMixto[i]);
    }
    return sumaTotal;
};
console.log("La suma de los valores es:", sumarArregloMixto(arregloMixto));

// Funcion que suma solamente numeros positivos.
var numeros = [-1, 2, -3, 4, 6];
function sumarPositivos(numeros) {
    var sumaTotal = 0;
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            sumaTotal += numeros[i];
        }
    }
    return sumaTotal;
}
console.log("La suma de los valores es:", sumarPositivos(numeros));

// Funcion que cuenta la cantidad de palabras repetidas.
var animales = ["Perro", "Gato", "Loro", "Gato", "Perro", "Gato"];
function cantidadRepetidos(animales, palabra) {
    var contadorPalabras = 0;
    for (var i = 0; i < animales.length; i++) {
        if (animales[i] === palabra) {
            contadorPalabras++;
        }
    }
    return contadorPalabras;
}
console.log("Cantidad de palabras", animales[1], "repetidas:", cantidadRepetidos(animales, animales[1]));

// Funcion que remueva los espacios en una cadena de texto.
var cadenaTexto = "H o l a m u n d o !"
function removerEspacios(cadenaTexto) {
    var resultado = "";
    for (var i =0; i < cadenaTexto.length; i++) {
        if(cadenaTexto[i] !== " ") {
            resultado += cadenaTexto[i];
        }
    }
    return resultado;
}
console.log("Cadena de texto sin espacios:", removerEspacios(cadenaTexto));

function removerEspacios2(cadenaTexto) {
    // var resultado = cadenaTexto.split(" "); // Convierte en un arreglo con los caracteres en forma de string.
    // resultado = resultado.join(""); // Junta los caracteres.
    // return resultado;
    return cadenaTexto.split(" ").join(""); //Alternativa
}
console.log("Cadena de texto sin espacios:", removerEspacios2(cadenaTexto));

// Funcion que invierte el contenido de un arreglo.
var arregloNormal = [1, 2, 3, 4, 5];
function invertirArreglo(arregloNormal) {
    var arregloInvertido = [];
    for (var i = arregloNormal.length -1; i >= 0; i--) {
        arregloInvertido.push(arregloNormal[i]);
    }
    return arregloInvertido;
}
console.log("Arreglo invertido:", invertirArreglo(arregloNormal));

function invertirArreglo2(arregloNormal) {
        return arregloNormal.reverse();
}
console.log("Arreglo invertido:", invertirArreglo2(arregloNormal));


// Funcion que suma el contenido de un arreglo bidimensional.
var arregloBidimensional = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
function sumarArregloBidimensional() {
    var sumaTotalBidimensional = 0;
    for (var i = 0; i < arregloBidimensional.length; i++) {
        var arregloBi = arregloBidimensional[i];
        for (var j = 0; j < arregloBi.length; j++) {
            sumaTotalBidimensional += arregloBi[j];
        }
    }
    return sumaTotalBidimensional;
}
console.log("Suma de arreglo bidimensional:", sumarArregloBidimensional(arregloBidimensional));