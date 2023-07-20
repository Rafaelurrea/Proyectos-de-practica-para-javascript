// -Fecha de publicación: 21/06/2023
// -Hora: 10:45 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa:Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son solo de referencia para mostrar filas y columnas; no se pide que las imprima.
const prompt = require("prompt-sync")();
const space = (n) => {
    // Imprimir espacios en blanco
    for (; n > 0; n--) {
      process.stdout.write(" ");
    }
  }
  
  const flechaIzquierda = () =>{
    let s = 39;
    
    // Imprimir la primera mitad del patrón
    for (let a = 1; a <= 6; a++) {
      space(s); // Llamar a la función para imprimir los espacios en blanco
      for (let b = 0; b < a; b++) {
        process.stdout.write("A"); // Imprimir letra "A"
      }
      process.stdout.write("\n"); // Imprimir salto de línea
      s = s - 1; // Actualizar la variable de espacios
    }
    
    s = s + 2; // Restaurar el valor de s
    
    // Imprimir la segunda mitad del patrón
    for (let c = 5; c >= 1; c--) {
      space(s); // Llamar a la función para imprimir los espacios en blanco
      for (let b = 0; b < c; b++) {
        process.stdout.write("A"); // Imprimir letra "A"
      }
      process.stdout.write("\n"); // Imprimir salto de línea
      s = s + 1; // Actualizar la variable de espacios
    }
  }
  //se llama la funcion
  flechaIzquierda();
  