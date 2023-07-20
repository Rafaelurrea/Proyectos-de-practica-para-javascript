// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa de computador, de tal manera que, lea un número entero N, no negativo(validar
// esto) y mostrar la suma de los factoriales de todos los números desde 0 hasta N. ;

const prompt = require("prompt-sync")({ sigint: true });

/**
 * Calcula el factorial de un número utilizando un ciclo while.
 * @param {number} num - El número del cual se desea calcular el factorial.
 * @returns {number} El factorial del número dado.
 */
function factorial(num) {
  let resultado = 1;
  let contador = 1;

  while (contador <= num) {
    resultado *= contador;
    contador++;
  }

  return resultado;
}

/**
 * Calcula la sumatoria de los factoriales desde 0 hasta el número dado utilizando un ciclo while.
 * @param {number} num - El número hasta el cual se desea calcular la sumatoria de factoriales.
 * @returns {number} El resultado de la sumatoria de los factoriales.
 */
const sumatoriaFactoriales = (num) =>{
  let resultado = 0;
  let contador = 0;

  while (contador <= num) {
    resultado += factorial(contador);
    contador++;
  }

  return resultado;
}

/**
 * Función principal del programa.
 * Solicita al usuario ingresar un número y muestra la sumatoria de los factoriales desde 0 hasta dicho número.
 */
const main = () => {
  let num = parseInt(prompt("Por favor ingrese el valor del que desea obtener la sumatoria de sus factoriales: "));
  let resultado = sumatoriaFactoriales(num);
  console.log("El resultado de la sumatoria de factoriales es: " + resultado);
}

// Llamar a la función principal para iniciar el programa
main();




