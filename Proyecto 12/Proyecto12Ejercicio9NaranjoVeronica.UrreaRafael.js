// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// // - Descripción: Hacer un programa de computador, de tal manera que, utilizando ciclos anidados se generen las
// siguientes ternas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” )
// 1 1 1
// 2 1 2
// 3 1 3
// 4 2 1
// 5 2 2
// 6 2 3
// 7 3 1
// 8 3 2
// 9 3 3

/**
 * Imprime el patrón utilizando un ciclo while.
 */
// Función para imprimir un patrón
const imprimirPatron = () =>{
  let i = 1; // Variable de control para el primer número
  let num2 = 1; // Variable de control para el segundo número
  let num3 = 1; // Variable de control para el tercer número

  // Mientras i sea menor que 10, se ejecuta el ciclo while
  while (i < 10) {
    console.log(i + " " + num2 + " " + num3); // Imprimir los valores actuales de i, num2 y num3

    // Verificar si num3 es igual a 3
    if (num3 === 3) {
      num2++; // Incrementar num2 en 1
      num3 = 0; // Reiniciar num3 a 0
    }

    num3++; // Incrementar num3 en 1
    i++; // Incrementar i en 1
  }
}

imprimirPatron(); // Llamada a la función para imprimir el patrón
  

