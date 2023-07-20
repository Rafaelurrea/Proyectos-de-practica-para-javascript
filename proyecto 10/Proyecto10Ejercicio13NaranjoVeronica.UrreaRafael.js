// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa de computador, de tal manera que lea desde el teclado un grupo de 75 números,
// diferentes a cero(validar este requisito) y al final de leídos, imprima:
// * Cantidad de números Mayores a 150
// * Número mayor y número menor encontrado en el grupo
// * Cantidad de Números negativos encontrados
// * Promedio de los Positivos Encontrados.
// Realización: Primero se implemento el codigo en C y después se paso a JavaScript con ChatGPT

const prompt=require("prompt-sync")({sigint:true});


/**
 * Verifica si un número es mayor que 150.
 * @param {number} num - El número a evaluar.
 * @returns {number} 1 si el número es mayor a 150, de lo contrario, 0.
 */
function mayores150(num) {
  if (num > 150) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Determina el número mayor entre dos números.
 * @param {number} mayor - El número mayor actual.
 * @param {number} num - El número a comparar.
 * @returns {number} El número mayor entre el número mayor actual y el número a comparar.
 */
function numMayor(mayor, num) {
  if (mayor !== 0) {
    if (mayor > num) {
      return mayor;
    } else {
      return num;
    }
  } else {
    return num;
  }
}

/**
 * Determina el número menor entre dos números.
 * @param {number} menor - El número menor actual.
 * @param {number} num - El número a comparar.
 * @returns {number} El número menor entre el número menor actual y el número a comparar.
 */
function numMenor(menor, num) {
  if (menor !== 0) {
    if (menor < num) {
      return menor;
    } else {
      return num;
    }
  } else {
    return num;
  }
}

/**
 * Verifica si un número es negativo.
 * @param {number} num - El número a evaluar.
 * @returns {number} 1 si el número es negativo, de lo contrario, 0.
 */
function negativo(num) {
  if (num < 0) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Verifica si un número es positivo.
 * @param {number} num - El número a evaluar.
 * @returns {number} 1 si el número es positivo, de lo contrario, 0.
 */
function positivo(num) {
  if (num > 0) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Obtiene el valor del número si es positivo, de lo contrario, retorna 0.
 * @param {number} num - El número a evaluar.
 * @returns {number} El número si es positivo, de lo contrario, 0.
 */
function promedio(num) {
  if (num > 0) {
    return num;
  } else {
    return 0;
  }
}

/**
 * Obtiene los resultados de los cálculos y los muestra por consola.
 * @param {number[]} nums - Un array de números a evaluar.
 * @param {number} index - El índice actual del array.
 * @param {number} nMayores - El contador de números mayores a 150.
 * @param {number} nMayor - El número mayor encontrado.
 * @param {number} nMenor - El número menor encontrado.
 * @param {number} nNegativos - El contador de números negativos.
 * @param {number} nPositivos - El contador de números positivos.
 * @param {number} prom - La suma de los números positivos para calcular el promedio.
 * @returns {void}
 */
function obtenerResultados(nums, index, nMayores, nMayor, nMenor, nNegativos, nPositivos, prom) {
  if (index >= nums.length) {
    console.log("La cantidad de números mayores a 150 son: " + nMayores);
    console.log("El número mayor es: " + nMayor);
    console.log("El número menor es: " + nMenor);
    console.log("La cantidad de números negativos son: " + nNegativos);
    console.log("El promedio de los números positivos es: " + (prom / nPositivos).toFixed(2));
    return;
  }

  var num = nums[index];

  var nuevosMayores = nMayores + mayores150(num);
  var nuevoMayor = numMayor(nMayor, num);
  var nuevoMenor = numMenor(nMenor, num);
  var nuevosNegativos = nNegativos + negativo(num);
  var nuevosPositivos = nPositivos + positivo(num);
  var nuevoPromedio = prom + promedio(num);

  obtenerResultados(nums, index + 1, nuevosMayores, nuevoMayor, nuevoMenor, nuevosNegativos, nuevosPositivos, nuevoPromedio);
}

/**
 * Función principal que solicita al usuario ingresar 3 números diferentes a cero y muestra los resultados de los cálculos.
 * @returns {void}
 */
function main() {
  console.log("Este programa te pide 3 números diferentes a cero\n");

  var nums = [];
  var i = 1;

  /**
   * Función recursiva que solicita al usuario ingresar los números y construye el array nums.
   * @returns {void}
   */
  function pedirNumero() {
    if (i > 3) {
      obtenerResultados(nums, 0, 0, 0, 0, 0, 0, 0);
    } else {
      var num = parseInt(prompt("Por favor ingrese el valor del número " + i + ":"));
      nums.push(num);
      i++;
      pedirNumero();
    }
  }

  pedirNumero();
}

// Inicia la ejecución del programa principal.
main();


