// -Fecha de publicación: 21/06/2023
// -Hora: 9:11pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son  solo de referencia para mostrar filas y columnas; no se pide que las imprima.

const prompt = require("prompt-sync")();
const space = (n) => {
  for (; n > 0; n--) {
    process.stdout.write(" "); // Imprimir un espacio en blanco sin salto de línea
  }
}

const letter = (n) => {
  for (; n > 0; n--) {
    process.stdout.write("A"); // Imprimir la letra "A" sin salto de línea
  }
}

const figuraMono = () => {
  let sb = 27, // Variable para controlar los espacios antes de la letra
    si = 5; // Variable para controlar los espacios entre las letras

  // Imprimir la parte superior del moño
  for (let i = 1; i <= 4; i++) {
    if (i === 4) {
      // En la última fila, imprimir los espacios y 7 letras "A" en una línea
      space(sb);
      letter(7);
    } else {
      // En las filas anteriores, imprimir los espacios, i letras "A", espacios, y i letras "A" en una línea
      space(sb);
      letter(i);
      space(si);
      letter(i);
    }
    console.log(); // Imprimir un salto de línea después de cada línea del moño
    si = si - 2; // Reducir el número de espacios entre las letras para la siguiente línea
  }

  si = si + 4; // Restaurar el número de espacios entre las letras para la siguiente sección del moño

  // Imprimir la parte inferior del moño
  for (let j = 3; j >= 1; j--) {
    // En cada fila, imprimir los espacios, j letras "A", espacios, y j letras "A" en una línea
    space(sb);
    letter(j);
    space(si);
    letter(j);
    console.log(); // Imprimir un salto de línea después de cada línea del moño
    si = si + 2; // Aumentar el número de espacios entre las letras para la siguiente línea
  }
}

figuraMono(); // Llamar a la función para mostrar el moño en la consola
