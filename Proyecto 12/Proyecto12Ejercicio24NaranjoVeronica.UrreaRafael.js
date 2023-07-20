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

const calcularLnTaylor = (x, terminos) => {
    if (x <= 0 || terminos <= 0) {
      return NaN;
    }
  
    let resultado = 0;
    let denominador = 1;
    let signo = 1;
  
    for (let n = 1; n <= terminos; n++) {
      resultado += signo * (Math.pow(x - 1, n) / denominador);
      denominador++;
      signo *= -1;
    }
  
    return resultado;
  };
  
  // Ejemplo de uso
  const x = parseFloat(prompt("Ingrese un valor para x: "));
  const terminos = parseInt(prompt("Ingrese el número de términos a calcular: "));
  
  const resultado = calcularLnTaylor(x, terminos);
  if (isNaN(resultado)) {
    console.log("No es posible calcular ln(x) para x <= 0 o con un número de términos no válido.");
  } else {
    console.log("El resultado de la serie de Taylor para ln(x) es: " + resultado.toFixed(8));
  }