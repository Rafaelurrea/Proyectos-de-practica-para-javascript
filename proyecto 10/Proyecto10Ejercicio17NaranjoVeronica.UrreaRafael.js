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

const prompt=require("prompt-sync")({sigint:true});

/**
 * Genera las parejas de números enteros utilizando recursividad.
 * @param {number} num - El número inicial para generar las parejas.
 */
function generarParejas(num) {
  // Verifica si el número es menor o igual a 9 para continuar generando parejas
  if (num <= 9) {
    // Calcula los valores de las parejas
    let pareja1 = Math.floor(num / 2);
    let pareja2 = Math.floor(num / 2) + 1;

    // Imprime las parejas de números
    console.log(num, pareja1);
    console.log(num + 1, pareja2);

    // Realiza una llamada recursiva con el siguiente número
    generarParejas(num + 2);
  }
}

// Llamada inicial a la función generarParejas con el número inicial 0
generarParejas(0);

