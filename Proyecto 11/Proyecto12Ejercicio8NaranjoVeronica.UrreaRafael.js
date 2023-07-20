// -Fecha de publicación: 20/06/2023
// -Hora: 9:40 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa usa un cilco que generena las siguientes parejas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programaincluyendo las funciones.)
// 0 1
// 1 1
// 2 2
// 3 2
// 4 3
// 5 3
// 6 4
// 7 4
// 8 5
// 9 5

const prompt = require("prompt-sync")();
const generarParejas = () => {
    let contador = 0; // Inicializar el contador en 0
  
    for (let i = 0; i < 10; i++) { // Bucle externo para generar los primeros números de las parejas
      if (i % 2 === 0) { // Verificar si el índice i es par
        console.log(i, contador); // Imprimir la pareja actual (i, contador)
      } else { // Si el índice i es impar
        console.log(i, contador); // Imprimir la pareja actual (i, contador)
        contador++; // Incrementar el contador en 1 para preparar el siguiente segundo número de la pareja
      }
    }
  }

  generarParejas(); 

  