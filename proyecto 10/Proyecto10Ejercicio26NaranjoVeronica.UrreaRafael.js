// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
// máximo de cuatro(4) ordenes “IMPRIMIR”)

                    //    Z                 Z
                    //     Z               Z
                    //      Z             Z
                    //       Z           Z
                    //        Z         Z
                    //         Z       Z
                    //          Z     Z
                    //           Z   Z
                    //            Z Z
                    //             Z
                    

/**
 * Función recursiva que imprime la letra 'Z' repetidamente desde Inicio hasta Final.
 * @param {number} Inicio - Valor de inicio para imprimir la letra 'Z'.
 * @param {number} Final - Valor final para detener la impresión de la letra 'Z'.
 */
function ImprimirZ(Inicio, Final) {
    if (Inicio <= Final) {
      process.stdout.write("Z");
      ImprimirZ(Inicio + 1, Final);
    }
  }
  
  /**
   * Función recursiva que imprime espacios en blanco repetidamente desde Inicio hasta Final.
   * @param {number} Inicio - Valor de inicio para imprimir espacios en blanco.
   * @param {number} Final - Valor final para detener la impresión de espacios en blanco.
   */
  function ImprimirEsp(Inicio, Final) {
    if (Inicio <= Final) {
      process.stdout.write(" ");
      ImprimirEsp(Inicio + 1, Final);
    }
  }
  
  /**
   * Función principal que imprime un patrón de letras 'Z' y espacios en blanco.
   * @param {number} Fila - Número de fila actual.
   * @param {number} Contador - Valor de inicio para imprimir espacios en blanco.
   * @param {number} Final - Valor final para detener la impresión de espacios en blanco.
   * @param {number} FinalZ - Valor final para detener la impresión de la letra 'Z'.
   */
  function Imprimir(Fila, Contador, Final, FinalZ) {
    if (Fila <= 10) {
      ImprimirEsp(Contador, FinalZ);
      ImprimirZ(1, 1);
      ImprimirEsp(Contador, Final);
      if (Fila !== 10) {
        ImprimirZ(1, 1);
      }
      process.stdout.write("\n");
      Imprimir(Fila + 1, Contador, Final - 2, FinalZ + 1);
    } else {
      return;
    }
  }
  
  // Llamada inicial a la función Imprimir con los valores iniciales
  Imprimir(1, 1, 17, 0);      