// -Fecha de publicación: 20/06/2023
// -Hora: 11:20 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: 

const prompt = require("prompt-sync")();
  // Función que pausa la ejecución durante el tiempo especificado en milisegundos
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
    }  
    // Función que limpia la consola
    const limpiarConsola = () => {
      console.clear();
    }  
    // Función que genera una cadena de espacios multiplicados por el valor de n
    const space = (n) => {
      let spaces = "";
      for (let i = 0; i < n; i++) {
        spaces += "    "; // Añade 3 espacios en cada iteración (ajusta el número según tus necesidades)
      }
      return spaces;
    }
    
    // Función principal que realiza la impresión
    const  imprimir = async () => {
      let b = 6;
      for (let i = 0; i < 4; i++) {
        console.log(space(i) + "A" + space(b) + "A"); // Imprime la letra A rodeada de espacios
        await sleep(1000); // Pausa la ejecución durante 1 segundo (1000 milisegundos)
        limpiarConsola(); // Limpia la consola
        b = b - 2; // Reduce el número de espacios para el siguiente ciclo
      }
    }
    imprimir();
    