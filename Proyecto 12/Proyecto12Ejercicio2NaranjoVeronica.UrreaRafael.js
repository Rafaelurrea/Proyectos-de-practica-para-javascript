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

const calcularSumaFibonacci = (limite) => {
  let num1 = 0;
  let num2 = 1;
  let suma = 0; // Variable para almacenar la suma de los números de Fibonacci

  while (num1 <= limite) {
    suma += num1;
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;
  }

  return suma;
};

const limite = 100;
const sumaFibonacci = calcularSumaFibonacci(limite);
console.log(`La suma de los números de la serie de Fibonacci entre 0 y ${limite} es: ${sumaFibonacci}`);
