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
siguiente serie: Serie de Lucas: Es similar a la serie de Fibonacci, pero comienza con los números 2 y 1
en lugar de 0 y 1. Es decir, los dos primeros términos de la serie son 2 y 1, y los siguientes términos se
calculan como la suma de los dos términos anteriores.

Se empleo ChatGPT3.5 para la elaboracion de este codigo.

/**
 * Genera la serie de Pell hasta el número de términos especificado.
 * @param {number} numTerminos - El número de términos deseado en la serie.
 * @returns {Array} - Un arreglo que contiene la serie de Pell.
 */
function seriePell(numTerminos) {
    /**
     * Función recursiva para calcular el siguiente término de la serie de Pell.
     * @param {number} n - El índice del término actual.
     * @returns {number} - El siguiente término de la serie de Pell.
     */
    function calcularTermino(n) {
      if (n === 0) {
        return 0;
      }
      if (n === 1) {
        return 1;
      }
      return 2 * calcularTermino(n - 1) + calcularTermino(n - 2);
    }
  
    const serie = [];
  
    /**
     * Genera la serie de Pell recursivamente.
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
  const numTerminosDeseados = parseInt(prompt("Ingrese el número de términos deseados en la serie de Pell:"));
  const serieResultado = seriePell(numTerminosDeseados);
  console.log("Serie de Pell:", serieResultado);
  