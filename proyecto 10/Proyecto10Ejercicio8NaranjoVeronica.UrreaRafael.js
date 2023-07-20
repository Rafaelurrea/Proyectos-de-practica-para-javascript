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
siguiente serie: Serie de Catalán: Esta serie es una secuencia de números que aparece en diversos
problemas de conteo en matemáticas. Comienza con los números 1, 1, y los siguientes términos se
calculan como la suma de los productos de los términos anteriores. La fórmula para el enésimo número
de Catalán es C(n) = (2n)! / (n!(n+1)!), donde C(0) = 1.

Se empleo ChatGPT3.5 para la elaboracion de este codigo.
*/


function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // Función recursiva para generar la serie de Catalán
  function generateCatalanSeries(n, catalanSeries = [1, 1]) {
    if (n === 1) {
      return [1]; // Si se solicita solo un término, retornar [1]
    } else if (n === 2) {
      return [1, 1]; // Si se solicitan dos términos, retornar [1, 1]
    }
  
    if (catalanSeries.length < n) {
      const nextTerm = (factorial(2 * (catalanSeries.length))) / (factorial(catalanSeries.length) * factorial(catalanSeries.length + 1));
      catalanSeries.push(nextTerm); // Agregar el siguiente término a la serie
      return generateCatalanSeries(n, catalanSeries);
    }
  
    return catalanSeries;
  }
  
  // Solicitar el número de términos al usuario
  const numTerms = parseInt(prompt("Ingrese el número de términos deseados en la serie de Catalán:"));
  
  // Generar y mostrar la serie de Catalán
  const catalanSeries = generateCatalanSeries(numTerms);
  console.log("La serie de Catalán con " + numTerms + " términos es:");
  console.log(catalanSeries.join(", "));
  