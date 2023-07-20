//Creacion de la funcion prompt
"use strict";
const ps = require("prompt-sync")
const prompt = ps();

// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa que mediante la serie de taylor imprima el resultado de ln(x) siendo x
//   una variable ingresada por el usuario.

// Este programa genera la suma de la serie de Taylor para In(x)
console.log("Ingrese el valor de x: ");
const x = parseFloat(prompt());

console.log("Ingrese el número de términos: ");
const final = parseInt(prompt());

console.log("La suma de la serie Taylor para In(x) es: ");

// Definición de la función Inx
function Inx(numero, final, acumula) {
  if (numero <= final) {
    return Inx(
      numero + 1,
      final,
      acumula +
        (Math.pow(-1, numero + 2) *
          Math.pow(x - 1, numero + 1) /
          (numero + 1))
    );
  } else {
    console.log((x - 1 + acumula).toFixed(2));
  }
}

Inx(1, final, 0);