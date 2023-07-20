// -Fecha de publicación: 20/06/2023
// -Hora: 9:12 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa lee desde el teclado un numero entero y lo imprime al revés.

const prompt = require("prompt-sync")();

const  imprimirNumeroAlReves = () => {
    // Leer un número entero desde el teclado
    const numero = parseInt(prompt("Ingrese un número entero:"));
  
    let numeroReverso = 0;
  
    // Iterar por cada dígito del número
    for(let i=numero; i != 0; i = Math.floor(i / 10)) {
      let digito = i % 10; // Obtener el dígito más a la derecha
      numeroReverso = (numeroReverso * 10) + digito; // Agregar el dígito al número reverso
    }
    console.log("El número al revés es:", numeroReverso);
  }
  imprimirNumeroAlReves();
  