// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa de computador, de tal manera que lea desde el teclado un numero entero y lo
// imprima al revés.

// Realización: El código se hizo primero en C y se pasa a JavaScript para que ChatGPT
// lo hiciera sin errores.


const prompt=require("prompt-sync")({sigint:true});

function reverseNumber(numero) {
    var reverse = 0;
  
    while (numero !== 0) {
      var cifra = numero % 10;
      reverse = reverse * 10 + cifra;
      numero = Math.floor(numero / 10);
    }
  
    return reverse;
  }
  
  // Solicitamos al usuario ingresar un número entero
  var numero = parseInt(prompt("Este programa lee desde el teclado un número entero y lo imprime al revés.\nIngresa el número:"));
  
  // Verificamos si el número ingresado es válido
  if (isNaN(numero)) {
    console.log("El valor ingresado no es un número válido.");
  } else {
    // Invertimos el número utilizando la función reverseNumber
    var numeroInvertido = reverseNumber(numero);
  
    // Mostramos el número invertido en la consola
    console.log("Número invertido:", numeroInvertido);
  }
  
