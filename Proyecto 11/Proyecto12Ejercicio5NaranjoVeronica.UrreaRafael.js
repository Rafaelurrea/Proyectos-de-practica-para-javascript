// -Fecha de publicación: 20/06/2023
// -Hora: 9:26 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: EL programa utiliza ciclos anidados; de tal manera que presenta todas las tablas de multiplicar del 1 al 10; (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa incluyendo las funciones.); así:
// 1 x 1 = 1
// 1 x 2 = 2
// ....
// 1 x 10 =10
// 2 x 1 =2
// .....
// ....
// 10 x 1 =10
// 10 x 2 = 20
// ....
// 10 x 10 =100
const prompt = require("prompt-sync")();

const tablasMultiplicar = () => {
    // Iteramos desde 1 hasta 10 para el primer factor
    for(let i = 1; i < 11; i++){
      // Iteramos desde 1 hasta 10 para el segundo factor
      for(let j = 1; j < 11; j++){
        // Mostramos en la consola el resultado de la multiplicación
        console.log(i, " * ", j, " = ", i * j);
      }
      // Agregamos un espacio en blanco para separar las tablas de multiplicar
      console.log(" ");
    }
  }
  
  // Llamamos a la función para ejecutarla
  tablasMultiplicar();
  