"use strict";

const ps=require('prompt-sync');
const prompt= ps();

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
// siguiente serie: Serie de Perrin: Esta serie comienza con los números 3, 0 y 2. Los siguientes términos
// se calculan como la suma del término anterior y el tercer término anterior.

//Se empleo ChatGPT3.5 para la elaboracion de este codigo.

/**
 
 * @param {number} numTerminos - El número de términos deseado en la serie.
 * @returns {Array} - Un arreglo que contiene la serie de Perrin.
 */
function seriePerrin(numTerminos) {
    /**
     * Función recursiva para calcular el siguiente término de la serie de Perrin.
     * @param {number} n - El índice del término actual.
     * @returns {number} - El siguiente término de la serie de Perrin.
     */
    function calcularTermino(n) {
      if (n === 0) {
        return 3;
      }
      if (n === 1) {
        return 0;
      }
      if (n === 2) {
        return 2;
      }
      return calcularTermino(n - 2) + calcularTermino(n - 3);
    }
  
    const serie = [];
  
    /**
     * Genera la serie de Perrin recursivamente.
     * @param {number} n - El índice del término actual.
     */
    function generarSerie(n) {
      if (n < numTerminos) {
        const termino = calcularTermino(n);
        serie.push(termino);
        generarSerie(n + 1);
      }
    }
  
    generarSerie(0);
    return serie;
  }
  
  // Ejemplo de uso:
  const numTerminosDeseados = parseInt(prompt("Ingrese el número de términos deseados en la serie de Perrin:"));
  const serieResultado = seriePerrin(numTerminosDeseados);
  console.log("Serie de Perrin:", serieResultado);
  