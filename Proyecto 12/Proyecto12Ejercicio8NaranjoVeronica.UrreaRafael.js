// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa de computador, de tal manera que, utilizando ciclos anidados se generen las
// siguientes parejas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa
// incluyendo las funciones.)
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


/**
 * Genera las parejas de enteros utilizando ciclos anidados.
 */
// Función para generar parejas
const generarParejas = () => {
  let num = 0; // Variable para controlar los números del ciclo while

  // Mientras num sea menor o igual a 9, se generan parejas
  while (num <= 9) {
    let pareja1 = Math.floor(num / 2); // Cálculo de la pareja1
    let pareja2 = pareja1 + 1; // Cálculo de la pareja2

    console.log(num, pareja1 + 1); // Imprimir la pareja1
    console.log(num + 1, pareja2); // Imprimir la pareja2

    num += 2; // Incrementar num en 2 para avanzar a la siguiente pareja
  }
}

generarParejas(); // Llamada a la función para generar las parejas

  
  
  
