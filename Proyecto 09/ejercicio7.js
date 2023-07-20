// -Fecha de publicación: 20/06/2003
// -Hora: 9:55 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa toma dos números y dice si ambos son pares o ambos son impares.

function sonParesImpares(){
    var num1 = prompt("Ingrese el primer número: ")
    var num2 = prompt("Ingrese el primer número: ")

    var sonPares = num1 % 2 === 0 && num2 % 2 === 0;
    var sonImpares = num1 % 2 !== 0 && num2 % 2 !== 0;

  if (sonPares) {
    console.log("Ambos números son pares.");
  } else if (sonImpares) {
    console.log("Ambos números son impares.");
  } else {
    console.log("Los números no cumplen la condición de ser ambos pares o ambos impares.");
  }
}
sonParesImpares();