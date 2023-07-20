// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa que mediante la serie de taylor imprima el resultado de sen(x) siendo x
//   una variable ingresada por el usuario.
// - Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


/**
 * Función que calcula el factorial de un número.
 * @param {number} i - Número para calcular el factorial.
 * @returns {number} - Factorial del número dado.
 */
const factorial = (i) => {
  if (i === 0) {
    return 1;
  } else {
    return i * factorial(i - 1);
  }
};

/**
 * Función que calcula el término de la serie de Taylor para el seno.
 * @param {number} c - Índice del término.
 * @param {number} x - Valor de x.
 * @returns {number} - Valor del término.
 */
const calcularTermino = (c, x) => {
  const exponente = 2 * c + 1;
  const signo = Math.pow(-1, c);
  const numerador = Math.pow(x, exponente);
  const denominador = factorial(exponente);
  return signo * numerador / denominador;
};

/**
 * Función que calcula el seno utilizando la serie de Taylor.
 * @param {number} x - Valor de x.
 * @param {number} terminos - Número de términos de la serie.
 * @returns {number} - Resultado del cálculo del seno.
 */
const calcularSeno = (x, terminos) => {
  let suma = 0;
  let c = 0;

  while (c < terminos) {
    const termino = calcularTermino(c, x);
    suma += termino;
    c++;
  }

  return suma;
};

console.log("Este programa da el resultado de sen(x) a través de una serie de Taylor");

const x = parseFloat(prompt("Ingrese un valor para x: "));
const terminos = parseInt(prompt("Ingrese el número de términos de la serie: "));

const resultado = calcularSeno(x, terminos);
console.log("El resultado es " + resultado.toFixed(8));