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
 * Imprime el patrón utilizando recursividad.
 * @param {number} i - Contador para controlar la recursión.
 * @param {number} num2 - Segundo número del patrón.
 * @param {number} num3 - Tercer número del patrón.
 */
function imprimirPatron(i, num2, num3) {
  // Verifica si se ha llegado al final del patrón
  if (i < 10) {
    // Imprime los valores actuales
    console.log(i + " " + num2 + " " + num3);
    
    // Actualiza los números según las reglas del patrón
    if (num3 === 3) {
      num2++;
      num3 = 0;
    }
    num3++;
    i++;
    
    // Realiza una llamada recursiva con los nuevos valores
    imprimirPatron(i, num2, num3);
  }
}

// Llamada inicial a la función imprimirPatron con los valores iniciales
imprimirPatron(1, 1, 1);

  
  
  
  
  

