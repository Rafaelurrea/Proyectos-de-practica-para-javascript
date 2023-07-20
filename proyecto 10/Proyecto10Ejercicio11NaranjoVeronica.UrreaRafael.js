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
// siguiente serie: Serie de Triangular: Esta serie cuenta el número de puntos en una retícula triangular de
// lado n. Comienza con el número 1 y los siguientes términos se calculan como la suma de los términos
// anteriores y el número de puntos en la diagonal de la retícula de lado n-1. La fórmula para el enésimo
// número de la serie triangular es T(n) = T(n-1) + (n-1)T(n-2), donde T(0) = 1.

// Realización: El programa se hizo primero en C y despues se paso en JavaScript para
// que ChatGPT no generara error.


const prompt=require("prompt-sync")({sigint:true});

function triangularSeries(stop, current = 1, series = []) {
  if (current > stop) {
    return series;
  }

  var term = (current * (current + 1)) / 2;
  series.push(term);

  return triangularSeries(stop, current + 1, series);
}

function printTriangularSeries(stop) {
  if (isNaN(stop) || stop < 0) {
    console.log("La cantidad de términos ingresada no es válida.");
  } else {
    var serie = triangularSeries(stop);
    console.log("Serie triangular con " + stop + " términos:");
    console.log(serie.join(", "));
  }
}

var stop = parseInt(prompt("Ingresa la cantidad de términos que deseas ver en la serie:"));
printTriangularSeries(stop);

  

