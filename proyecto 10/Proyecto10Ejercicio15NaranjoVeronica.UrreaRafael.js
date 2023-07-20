// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: 
// Salvedades: Hacer un programa de computador, de tal manera que, lea un número e imprima su factorial, siendo:
// N ! = 1 x 2 x 3 x 4 x...N
// N ! = 1 si N = 0
// Solo está definido el factorial para números enteros positivos.

const prompt=require("prompt-sync")({sigint:true});
/**
 * Calcula el factorial de un número utilizando recursividad.
 * @param {number} num - El número del cual se desea calcular el factorial.
 * @returns {number} El factorial del número dado.
 */
function factorial(num) {
  // Caso base: si el número es 0 o 1, el factorial es 1.
  if (num === 0 || num === 1) {
    return 1;
  } else {
    // Llamada recursiva: se multiplica el número por el factorial del número decrementado en 1.
    return num * factorial(num - 1);
  }
}

/**
 * Función principal del programa.
 * Solicita al usuario ingresar un número y muestra el factorial de dicho número.
 */
function main() {
  // Solicitar al usuario ingresar un número
  let num = parseInt(prompt("Por favor ingrese el valor del que desea obtener su factorial: "));

  // Calcular el factorial del número
  let resultado = factorial(num);

  // Mostrar el resultado
  console.log("El factorial de " + num + " es: " + resultado);
}

// Llamar a la función principal para iniciar el programa
main();


  
  