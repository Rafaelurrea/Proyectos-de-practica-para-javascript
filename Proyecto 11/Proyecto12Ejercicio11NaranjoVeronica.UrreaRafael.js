// -Fecha de publicación: 20/06/2023
// -Hora: 11:48 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” . Las líneas de las cuadriculas son solo de referencia para mostrar filas y columnas; no se pide que las imprima.

const prompt = require("prompt-sync")();

const imprimirPatron = (filas) => {
    for (let i = 1; i <= filas; i++) {
      let espacios = filas - i; // Cantidad de espacios en blanco en cada línea
      let caracteres = i; // Cantidad de caracteres "A" en cada línea
      let linea = ""; // Variable para construir la línea a imprimir
  
      for (let j = 0; j < espacios; j++) {
        linea += " "; // Agrega un espacio en blanco a la línea
      }
  
      for (let j = 0; j < caracteres; j++) {
        linea += "A"; // Agrega el carácter "A" a la línea
      }
  
      console.log(linea); // Imprime la línea en la consola
    }
  }
  imprimirPatron(25); 
 
  