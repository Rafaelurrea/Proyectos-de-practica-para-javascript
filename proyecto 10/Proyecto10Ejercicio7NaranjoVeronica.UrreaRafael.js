"use strict";

const ps=require('prompt-sync');
const prompt= ps();

/*
// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Narayana: Esta serie comienza con los números 1, 1 y 1. Los siguientes términos
se calculan como la suma del término anterior y el número de parejas de términos consecutivos anteriores

que son diferentes. La fórmula para el enésimo número de Narayana es N(n) = N(n-1) + N(n-3), donde
N(0) = 1, N(1) = 1 y N(2) = 1.

Se empleo ChatGPT3.5 para la elaboracion de este codigo.
  */


function generateNarayanaSeries(n, narayanaSeries = [1, 1, 1]) {
    if (n === 1) {
      return [1]; // Si se solicita solo un término, retornar [1]
    } else if (n === 2) {
      return [1, 1]; // Si se solicitan dos términos, retornar [1, 1]
    } else if (n === 3) {
      return narayanaSeries; // Si se solicitan tres términos, retornar [1, 1, 1]
    }
  
    if (narayanaSeries.length < n) {
      const nextTerm = narayanaSeries[narayanaSeries.length - 1] + narayanaSeries[narayanaSeries.length - 3];
      narayanaSeries.push(nextTerm); // Agregar el siguiente término a la serie
      return generateNarayanaSeries(n, narayanaSeries);
    }
  
    return narayanaSeries;
  }
  
  // Solicitar el número de términos al usuario
  const numTerms = parseInt(prompt("Ingrese el número de términos deseados en la serie de Narayana:"));
  
  // Generar y mostrar la serie de Narayana
  const narayanaSeries = generateNarayanaSeries(numTerms);
  console.log("La serie de Narayana con " + numTerms + " términos es:");
  console.log(narayanaSeries.join(", "));
  