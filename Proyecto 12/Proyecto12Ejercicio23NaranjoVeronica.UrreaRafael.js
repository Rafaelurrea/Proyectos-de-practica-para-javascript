// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa que mediante la serie de taylor imprima el resultado de cosh(x) siendo x
//   una variable ingresada por el usuario.

const prompt = require('prompt-sync')();

/**
 * Calcula el factorial de un número de forma recursiva.
 * @param {number} number - Número para calcular el factorial.
 * @returns {number} Factorial del número.
 */
const factorial = (number) => {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

/**
 * Calcula la suma de la serie de Taylor para cos(x) e imprime el resultado.
 * @param {number} numero - Número de término actual.
 * @param {number} final - Número de término final.
 * @param {number} acumula - Suma parcial de los términos.
 */
const cosx = (numero, final, acumula) => {
  while (numero <= final) {
    const termino = (Math.pow(x, numero) / factorial(numero)) * Math.pow(-1, numero / 2);
    acumula += termino;
    numero += 2;
  }
  console.log(acumula);
};

console.log("Este programa genera la suma de la serie de Taylor para cos(x)");

const x = parseFloat(prompt("Ingrese el valor de x en radianes: "));
const final = parseInt(prompt("Ingrese el número de términos: "));

console.log("La suma de la serie Taylor para cos(x) es:");

cosx(0, final * 2 - 2, 1);
