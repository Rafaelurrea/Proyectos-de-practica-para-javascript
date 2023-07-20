// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: 20.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
// máximo de cuatro(4) ordenes “IMPRIMIR” ).
                            //      A
                            //     AA
                            //    AAA
                            //   AAAA
                            //  AAAAA
                            // AAAAAA

/**
 * Imprime el carácter especificado un número determinado de veces.
 * @param {number} num - Número de veces que se imprimirá el carácter.
 * @param {string} caracter - Carácter a imprimir.
 */
function letras(num, caracter) {
  // Caso base: si num es igual a 0, termina la recursividad
  if (num === 0) {
    return;
  }

  process.stdout.write(caracter); // Impresión del carácter
  letras(num - 1, caracter); // Llamada recursiva con num - 1
}

/**
 * Función principal que ejecuta la impresión del triángulo de letras.
 * @param {number} i - Valor inicial de la variable "i".
 */
function main(i) {
  // Caso base: si i es igual a 25, termina la recursividad
  if (i === 25) {
    return;
  }

  letras(80 - i, " "); // Llamada a la función letras para imprimir los espacios
  letras(i, "A"); // Llamada a la función letras para imprimir las letras 'A'
  process.stdout.write("\n"); // Salto de línea

  main(i + 1); // Llamada recursiva con i + 1
}

// Llamada inicial a la función main con el valor inicial de i
main(0);


