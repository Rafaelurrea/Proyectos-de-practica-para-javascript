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
siguiente serie: Serie de Padovan: Esta serie comienza con los números 1, 0 y 0. Los siguientes términos
se calculan como la suma de los dos términos anteriores y el tercer término anterior.

Se empleo ChatGPT3.5 para la elaboracion de este codigo.
*/

// Función recursiva para generar la serie de Padovan
function generatePadovanSeries(n, padovanSeries = [1, 0, 0]) {
    if (n === 1) {
      return [1]; // Si se solicita solo un término, retornar [1]
    } else if (n === 2) {
      return [1, 0]; // Si se solicitan dos términos, retornar [1, 0]
    } else if (n === 3) {
      return padovanSeries; // Si se solicitan tres términos, retornar [1, 0, 0]
    }
  
    if (padovanSeries.length < n) {
      const nextTerm = padovanSeries[padovanSeries.length - 2] + padovanSeries[padovanSeries.length - 3];
      padovanSeries.push(nextTerm); // Agregar el siguiente término a la serie
      return generatePadovanSeries(n, padovanSeries);
    }
  
    return padovanSeries;
  }
  
  // Solicitar el número de términos al usuario
  const numTerms = parseInt(prompt("Ingrese el número de términos deseados en la serie de Padovan:"));
  
  // Generar y mostrar la serie de Padovan
  const padovanSeries = generatePadovanSeries(numTerms);
  console.log("La serie de Padovan con " + numTerms + " términos es:");
  console.log(padovanSeries.join(", "));
  