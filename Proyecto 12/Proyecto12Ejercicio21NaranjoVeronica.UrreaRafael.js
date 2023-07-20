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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Calcula el factorial de un número de forma recursiva.
 * @param {number} i - Número para calcular el factorial.
 * @returns {number} Factorial del número.
 */
const factorial = (i) => {
  if (i == 0)
    return 1;
  else
    return i * factorial(i - 1);
};

/**
 * Calcula el resultado de la serie de coseno de x utilizando la aproximación de términos de la serie de Taylor.
 * @param {number} c - Contador de términos.
 * @param {number} x - Valor de x.
 * @param {number} t - Número de términos de la serie.
 * @param {number} z - Resultado acumulado de la serie.
 * @returns {number} Resultado de la serie de coseno.
 */
const calcularCoseno = (c, x, t, z) => {
  while (c < t) {
    let r = (Math.pow(-1, c) * Math.pow(x, 2 * c)) / factorial(2 * c);
    z = z + r;
    c++;
  }
  return z;
};

rl.question("Este programa da el resultado de cos(x) a través de una serie de Taylor\nIngrese el número de términos de la serie: ", (t) => {
  rl.question("Ingrese un valor para x: ", (x) => {
    const result = calcularCoseno(1, x, parseInt(t), 1.0);
    console.log("El resultado es " + result.toFixed(8));
    rl.close();
  });
});
  
  
