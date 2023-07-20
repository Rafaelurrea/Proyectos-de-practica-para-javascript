// -Fecha de publicación: 21/06/2023
// -Hora: 10:36 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa:Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son solo de referencia para mostrar filas y columnas; no se pide que las imprima.

const prompt = require("prompt-sync")();
const figuraVinvertida=()=> {
  let f = -1; // Variable para controlar la cantidad de espacios en blanco después de la letra "Z"

  // Iteramos desde 9 hasta 0 (en orden descendente)
  for (let a = 9; a >= 0; a--) {
    // Imprimir espacios en blanco antes de la letra "Z"
    for (let b = 0; b < a; b++) {
      process.stdout.write(" ");
    }

    if (f > 0) {
      // Imprimir letra "Z" seguida de espacios en blanco
      process.stdout.write("Z");
      for (let c = 0; c < f; c++) {
        process.stdout.write(" ");
      }
    }

    // Imprimir letra "Z" final y salto de línea
    process.stdout.write("Z\n");

    f = f + 2; // Incrementar la cantidad de espacios en blanco para la siguiente línea
  }
}

// Llamamos a la función para ejecutarla
figuraVinvertida();
