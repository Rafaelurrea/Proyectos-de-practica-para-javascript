// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos de
// la serie de Fibonacci entre 0 y 100.
// Se empleo ChatGPT3.5 para la elaboracion de este codigo.
// Realización: Se realizó el ejercicio primero en C para despues pasarlo a JavaScript con CharGPT 

function fibonacciRecursive(x, y, sum) {
  if (x > 100) {
    process.stdout.write("y su suma es: " + sum);
    return;
  }

    if (y > 100){
      process.stdout.write(x + " ");
    }
      else{

        process.stdout.write(x + ", ");
      }

sum += x;
var limite = x;

var temp = x + y;
fibonacciRecursive(y, temp, sum);
}

var x = 0, y = 1, sum = 0;

console.log("\nEste programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.");
console.log("Los números a sumar son:");

fibonacciRecursive(x, y, sum);

  