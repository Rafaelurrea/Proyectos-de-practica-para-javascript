// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción:  Hacer un programa que mediante la serie de taylor imprima el resultado de coseno(x) siendo x
//  * una variable ingresada por el usuario.


var prompt = require('prompt-sync')();//Se invoca el prompt
// Este programa genera la suma de la serie de Taylor para cos(x)

function factorial(i) {  // Función recursiva para calcular el factorial de un número
    if (i == 0)
        return 1;
    else
        return i * factorial(i - 1);
}

function coseno(c, x, t, z) { // Función recursiva para calcular el coseno de x utilizando la serie de Taylor
    if (c < t) {
      let r = (Math.pow(-1, c) * Math.pow(x, 2 * c)) / factorial(2 * c); // Cálculo del término actual de la serie
      z = z + r; 
      return coseno(c + 1, x, t, z); // Llamada recursiva para calcular el siguiente término de la serie
    } else {
      return z; // Devuelve el resultado acumulado cuando se alcanza el número de términos deseado
    }
  }

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Este programa da el resultado de cos(x) a través de una serie de Taylor\nIngrese el número de términos de la serie: ", (t) => {
    rl.question("Ingrese un valor para x: ", (x) => {
        const result = coseno(1, x, t, 1.0); // Llamada a la función coseno para calcular el resultado
        console.log("El resultado es " + result.toFixed(8)); // Imprime el resultado con 8 decimales
        rl.close();
    });
});