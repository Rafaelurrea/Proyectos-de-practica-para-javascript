// -Fecha de publicación: 21/06/2023
// -Hora: 10:30 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa:Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son solo de referencia para mostrar filas y columnas; no se pide que las imprima.

const prompt = require("prompt-sync")();
const figuraV = () => {
    let f = 17;
  
    for (let a = 0; a < 10; a++) {
      for (let b = 0; b < a; b++) {  // Corregido: Iterar hasta 'a' en lugar de hasta 10
        process.stdout.write(" ");  // Corregido: Utilizar process.stdout.write en lugar de console.log para evitar saltos de línea
      }
  
      if (f > 0) {
        process.stdout.write("Z");  // Corregido: Utilizar process.stdout.write en lugar de console.log para evitar saltos de línea
        for (let c = 0; c < f; c++) {
          process.stdout.write(" ");  // Corregido: Utilizar process.stdout.write en lugar de console.log para evitar saltos de línea
        }
      }
  
      process.stdout.write("Z\n");  // Corregido: Utilizar process.stdout.write en lugar de console.log para evitar saltos de línea
      f = f - 2;
    }
  }
  //se llama la funcion
  figuraV();
  