// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: 23.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
// máximo de cuatro(4) ordenes “IMPRIMIR”)
                                //  PPPPPPPPPPPPP
                                //   PPPPPPPPPPP
                                //    PPPPPPPPP
                                //     PPPPPPP
                                //      PPPPP
                                //       PPP
                                //        P   <--- Debe estar en la columna 7


/**
 * Imprime el carácter especificado un número determinado de veces.
 * @param {number} num - Número de veces que se imprimirá el carácter.
 * @param {string} caracter - Carácter a imprimir.
 */
const letras = (num, caracter) =>{
  // Ciclo while: repetir hasta que num sea igual a 0
  while (num !== 0) {
    process.stdout.write(caracter); // Impresión del carácter
    num--; // Decrementar el valor de num en 1
  }
}

/**
 * Función recursiva para imprimir el triángulo de letras.
 * @param {number} num - Cantidad de letras que se imprimirán en la fila actual.
 * @param {number} espacios - Cantidad de espacios a imprimir en la fila actual.
 */
const imprimirTriangulo = (num, espacios) =>{
  // Ciclo while: repetir hasta que num sea menor o igual a 0
  while (num > 0) {
    letras(espacios, " "); // Imprimimos la cantidad "espacios" de espacios (' ')
    letras(num, "P"); // Imprimimos la cantidad de caracteres (num) con el carácter 'P'
    process.stdout.write("\n"); // Salto de línea

    num -= 2; // Decrementar el valor de num en 2
    espacios++; // Incrementar el valor de espacios en 1
  }
}

// Llamada inicial a la función imprimirTriangulo con los valores iniciales de num y espacios
imprimirTriangulo(13, 0);

                                  
