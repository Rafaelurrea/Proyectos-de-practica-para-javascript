// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: 22.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
// máximo de cuatro(4) ordenes “IMPRIMIR” )
                                //  PPPPPPPPPPPPP
                                //   PPPPPPPPPPP
                                //    PPPPPPPPP
                                //     PPPPPPP
                                //      PPPPP
                                //       PPP
                                //        P   <--- Debe estar en la columna 40


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
 * @param {number} num - Cantidad de letras que se imprimirán en la primera fila.
 * @param {number} espacios - Cantidad de espacios a imprimir en cada iteración.
 */
function main(num, espacios) {
  // Caso base: si num es igual o menor a 0, termina la recursividad
  if (num <= 0) {
    return;
  }

  letras(espacios + 32, " "); // Imprimimos la cantidad "espacios" de espacios (' ')
  letras(num, "P"); // Imprimimos la cantidad de caracteres (num) con el carácter 'P'
  process.stdout.write("\n"); // Salto de línea

  main(num - 2, espacios + 1); // Llamada recursiva con num - 2 y espacios + 1
}

// Llamada inicial a la función main con los valores iniciales de num y espacios
main(13, 0);

  



  