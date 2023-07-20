// -Fecha de publicación: 21/06/2023
// -Hora: 10:21 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa:Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son solo de referencia para mostrar filas y columnas; no se pide que las imprima.

const prompt = require("prompt-sync")();
const  space = (n) => {
    for (; n > 0; n--) {
      process.stdout.write(" "); // Imprimir un espacio en blanco sin salto de línea
    }
  }
  
  const diamond = () => {
    let s = 9;
    
    // Imprimir la parte superior del diamante
    for (let i = 1; i <= 7; i += 2) {
      space(s);
      for (let j = 0; j < i; j++) {
        process.stdout.write("Z"); // Imprimir la letra "Z" sin salto de línea
      }
      console.log(); // Imprimir un salto de línea después de cada línea del diamante
      s -= 1;
    }
    
    // Imprimir la parte inferior del diamante
    for (let n = 7; n >= 1; n -= 2) {
      s += 1;
      space(s);
      for (let o = 0; o < n; o++) {
        process.stdout.write("Z"); // Imprimir la letra "Z" sin salto de línea
      }
      console.log(); // Imprimir un salto de línea después de cada línea del diamante
    }
  }
  
  diamond(); // Llamar a la función para mostrar el diamante en la consola
  