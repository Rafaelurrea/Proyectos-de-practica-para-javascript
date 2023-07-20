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
// siguiente serie: Serie de Motzkin: Esta serie cuenta el número de caminos no cruzados de longitud n en
// una retícula tridimensional. Comienza con los números 1, 1 y los siguientes términos se calculan como la
// suma de los términos anteriores y la suma de los términos anteriores menos el tercer término anterior. La
// fórmula para el enésimo número de Motzkin es M(n) = M(n-1) + Σ(k=0, n-2) M(k)M(n-2-k), donde M(0) =
// 1 y M(1) = 1.

"use strict";

const ps=require('prompt-sync');
const prompt= ps();


function motzkin(n) {
  // Casos base
  if (n === 0 || n === 1) {
    return 1;
  }

  let sum = 0;
  let k = 0;

  // Función recursiva interna que calcula la suma
  function calculateSum(k) {
    // Si hemos alcanzado el límite superior de k, retornamos la suma actual
    if (k > n - 2) {
      return sum;
    }

    // Calculamos el término actual y lo agregamos a la suma
    sum += motzkin(k) * motzkin(n - 2 - k);

    // Llamada recursiva para el siguiente valor de k
    return calculateSum(k + 1);
  }

  // Inicializamos la suma llamando a la función recursiva interna
  sum = calculateSum(k);

  // Retornamos el término actual de Motzkin
  return motzkin(n - 1) + sum;
}

// Función que genera los términos de la serie de Motzkin utilizando recursividad
function obtenerTerminosMotzkin(numTerminos) {
  const terminos = [];

  // Función recursiva interna que genera los términos
  function generateTerms(n) {
    // Si hemos alcanzado el número de términos deseados, retornamos el arreglo de términos
    if (n >= numTerminos) {
      return terminos;
    }

    // Calculamos y agregamos el término actual a la lista de términos
    terminos.push(motzkin(n));

    // Llamada recursiva para el siguiente valor de n
    return generateTerms(n + 1);
  }

  // Inicializamos la generación de términos llamando a la función recursiva interna
  return generateTerms(0).join(", ");
}

// Solicitamos al usuario el número de términos deseados en la serie de Motzkin
const numTerminosDeseados = parseInt(prompt("Ingrese el número de términos deseados en la serie de Motzkin:"));

// Generamos y mostramos los términos de la serie de Motzkin utilizando la función recursiva
const terminosMotzkin = obtenerTerminosMotzkin(numTerminosDeseados);
console.log("Los términos de la serie de Motzkin son:", terminosMotzkin);


