// -Fecha de publicación: 20/06/2023
// -Hora: 9:30 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa lee un número e imprime su factorial, siendo:
// N ! = 1 x 2 x 3 x 4 x...N 
// N ! = 1 si N = 0
// Solo está definido el factorial para números enteros positivos.
const prompt = require("prompt-sync")();

const factorial = () => {
    var num = parseInt(prompt("Ingrese el número para calcular el factorial: ")); // Solicitar al usuario el número para calcular el factorial y convertirlo a entero
    let resultado = 1; // Inicializar la variable 'resultado' en 1
  
    if (num === 0) { // Verificar si el número ingresado es igual a 0
      console.log(num + "! = 1"); // Mostrar el resultado del factorial como 1
    } else {
      for (let i = 1; i <= num; i++) { // Iterar desde 1 hasta el número ingresado (inclusive)
        resultado *= i; // Multiplicar 'resultado' por cada valor del bucle
      }
      console.log(num + "! =", resultado); // Mostrar el resultado del factorial
    }
  }
  
  factorial(); // Llamar a la función factorial
  
  