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
// - Descripción: Hacer un programa de computador, de tal manera que pida el número de Término deseados en la
siguiente serie: Serie de Bell: Esta serie cuenta el número de particiones no vacías de un conjunto de n
elementos. Comienza con los números 1, 1 y los siguientes términos se calculan como la suma de los
términos anteriores multiplicados por los números naturales consecutivos.

Se empleo ChatGPT3.5 para la elaboracion de este codigo.
 */

//==========================================================

// Importar el módulo readline para leer la entrada del usuario desde la consola
const readline = require('readline');

// Crear una interfaz de lectura/escritura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar al usuario el número de términos que desea
rl.question("Ingrese el número de términos que desea: ", (input) => {
  // Convertir la entrada del usuario a un número entero
  const Final = parseInt(input);

  // Imprimir el enunciado con el número de términos
  console.log(`Los primeros ${Final} términos de la serie de Bell son:`);

  // Definir la función factorial
  function factorial(number) {
    if (number === 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }

  // Definir la constante DivisionE
  const DivisionE = 1 / 2.718281828459045235;

  // Definir la función sumatoria
  function sumatoria(k, n, resultado, limite) {
    if (k <= limite) {
      // Calcular la sumatoria recursivamente
      return sumatoria(k + 1, n, resultado + (Math.pow(k, n - 1) / factorial(k)), limite);
    } else {
      // Calcular el resultado final de la sumatoria
      return DivisionE * resultado;
    }
  }

  // Definir la función bell
  function bell(primerNumero, limite) {
    if (primerNumero <= limite) {
      // Imprimir el resultado de la sumatoria actual y una coma
      process.stdout.write(`${sumatoria(0, primerNumero, 0, 100).toFixed(0)}, `);
      // Llamar recursivamente a la función bell con el siguiente número
      bell(primerNumero + 1, limite);
    }
  }

  // Llamar a la función bell con los parámetros proporcionados por el usuario
  bell(1, Final);

  // Cerrar la interfaz de lectura/escritura
  rl.close();
});
