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

var prompt = require('prompt-sync')();//Se invoca el prompt
// Este programa genera la suma de la serie de Taylor para senh(x)
// Ingrese el valor de x:
const prompt = require('prompt-sync')();

function calcularFactorial(n) { // Función recursiva para calcular el factorial de un número
  if (n <= 1) {
    return 1;
  }
  return n * calcularFactorial(n - 1);
}

function calcularPotencia(base, exponente) {// Función recursiva para calcular una potencia
  if (exponente === 0) {
    return 1;
  }
  return base * calcularPotencia(base, exponente - 1);
}

function calcularTermino(x, potencia, factorial) {// Calcula el término actual de la serie de Taylor para senh(x)
  return calcularPotencia(x, potencia) / factorial;
}

function calcularSerieTaylorSenh(x, potencia, terminoActual, sumaActual) {// Calcula la serie de Taylor para senh(x)
  if (terminoActual === 0) {
    console.log("Termino 1 = " + x);
    return calcularSerieTaylorSenh(x, potencia + 2, terminoActual + 1, sumaActual + x);
  }

  const factorial = calcularFactorial(potencia);
  const termino = calcularTermino(x, potencia, factorial);
  sumaActual += termino;

  console.log("Termino " + (terminoActual + 1) + ": senh(" + x + ") = " + termino.toFixed(8));

  if (terminoActual >= 2 && Math.abs(termino) < 1e-8) {
    console.log("Total suma = " + sumaActual.toFixed(8));
    return;
  }

  return calcularSerieTaylorSenh(x, potencia + 2, terminoActual + 1, sumaActual);
}

function calcularSenh() { // Función principal para calcular la serie de Taylor de senh(x)
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
}

// Ejemplo de uso
calcularSenh();