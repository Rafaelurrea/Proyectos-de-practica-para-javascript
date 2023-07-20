// -Fecha de publicación: 20/06/2023
// -Hora: 9:51 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: Hacer un programa de computador, de tal manera que, utilizando ciclos anidados se generen las siguientes ternas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .)
// 1 1 1
// 2 1 2
// 3 1 3
// 4 2 1
// 5 2 2
// 6 2 3
// 7 3 1
// 8 3 2
// 9 3 3

const prompt = require("prompt-sync")();

const generarTernas = () => {
    let contador1 = 1; // Inicializar el contador1 en 1
    let contador2 = 1; // Inicializar el contador2 en 1
  
    for (let i = 1; i <= 9; i++) { // Bucle para generar las ternas de enteros desde 1 hasta 9
      console.log(i, contador1, contador2); // Imprimir la terna actual (i, contador1, contador2)
  
      if (i % 3 === 0) { // Verificar si el índice i es divisible por 3
        contador1++; // Incrementar el contador1 en 1 para preparar la siguiente terna
        contador2 = 1; // Reiniciar el contador2 a 1 para el siguiente ciclo de ternas
      } else {
        contador2++; // Incrementar el contador2 en 1 para generar el siguiente tercer número de la terna
      }
    }
  }
  generarTernas(); 
 