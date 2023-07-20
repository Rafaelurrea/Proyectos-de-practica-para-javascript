// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa que mediante la serie de taylor imprima el resultado de Sen(x) siendo x
//   una variable ingresada por el usuario.

const prompt = require('prompt-sync')();

/**
 * Calcula el factorial de un número de forma recursiva.
 * @param {number} n - Número para calcular el factorial.
 * @returns {number} Factorial del número.
 */
const calcularFactorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * calcularFactorial(n - 1);
};

/**
 * Calcula la potencia de un número de forma recursiva.
 * @param {number} base - Base de la potencia.
 * @param {number} exponente - Exponente de la potencia.
 * @returns {number} Resultado de la potencia.
 */
const calcularPotencia = (base, exponente) => {
  if (exponente === 0) {
    return 1;
  }
  return base * calcularPotencia(base, exponente - 1);
};

/**
 * Calcula el valor de un término de la serie de Taylor para senh(x).
 * @param {number} x - Valor de x.
 * @param {number} potencia - Potencia correspondiente al término.
 * @param {number} factorial - Factorial correspondiente al término.
 * @returns {number} Valor del término.
 */
const calcularTermino = (x, potencia, factorial) => {
  return calcularPotencia(x, potencia) / factorial;
};

/**
 * Calcula la serie de Taylor para senh(x) e imprime cada término.
 * @param {number} x - Valor de x.
 * @param {number} potencia - Potencia inicial.
 * @param {number} terminoActual - Número del término actual.
 * @param {number} sumaActual - Suma parcial de los términos.
 */
const calcularSerieTaylorSenh = (x, potencia, terminoActual, sumaActual) => {
  while (true) {
    if (terminoActual === 0) {
      console.log("Termino 1 = " + x);
      potencia += 2;
      terminoActual += 1;
      sumaActual += x;
    } else {
      const factorial = calcularFactorial(potencia);
      const termino = calcularTermino(x, potencia, factorial);
      sumaActual += termino;

      console.log(
        "Termino " + (terminoActual + 1) + ": senh(" + x + ") = " + termino.toFixed(8)
      );

      if (terminoActual >= 2 && Math.abs(termino) < 1e-8) {
        console.log("Total suma = " + sumaActual.toFixed(8));
        break;
      }

      potencia += 2;
      terminoActual += 1;
    }
  }
};

/**
 * Realiza el cálculo de la serie de Taylor para senh(x).
 */
const calcularSenh = () => {
  const x = parseFloat(prompt("Ingrese el valor de x: "));
  const terminos = parseInt(prompt("Ingrese el número de términos para la serie: "));

  const potenciaInicial = 1;
  const terminoInicial = 0;
  const sumaInicial = 0;

  console.log("Calculando la serie de Taylor para senh(x)...");
  console.log("Valor de x: " + x);
  console.log("Número de términos: " + terminos);
  console.log("--------------------------------------");

  calcularSerieTaylorSenh(x, potenciaInicial, terminoInicial, sumaInicial);
};

calcularSenh();