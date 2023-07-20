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

//Creacion de la funcion prompt
"use strict";
const ps = require("prompt-sync")
const prompt = ps();



// Función principal
const main = () => {
  console.log("Este programa te permite ingresar un grupo de 75 números diferentes de cero.");

  // Declaración de variables
  let numeros = []; // Almacena los números ingresados
  let cantidadMayores150 = 0; // Contador de números mayores a 150
  let numeroMayor = Number.MIN_SAFE_INTEGER; // Almacena el número mayor
  let numeroMenor = Number.MAX_SAFE_INTEGER; // Almacena el número menor
  let cantidadNegativos = 0; // Contador de números negativos
  let sumaPositivos = 0; // Suma de los números positivos
  let cantidadPositivos = 0; // Contador de números positivos

  let contador = 0; // Contador para controlar el bucle while
  while (contador < 75) {
    let numero = parseFloat(prompt(`Ingrese el número ${contador + 1}:`)); // Solicita al usuario ingresar un número

    // Validar que el número sea diferente de cero
    while (numero === 0) {
      numero = parseFloat(prompt("El número debe ser diferente de cero. Ingrese nuevamente:"));
    }

    numeros.push(numero); // Agrega el número ingresado al array numeros

    if (numero > 150) {
      cantidadMayores150++; // Incrementa el contador si el número es mayor a 150
    }

    if (numero > numeroMayor) {
      numeroMayor = numero; // Actualiza el número mayor si se encuentra uno mayor
    }

    if (numero < numeroMenor) {
      numeroMenor = numero; // Actualiza el número menor si se encuentra uno menor
    }

    if (numero < 0) {
      cantidadNegativos++; // Incrementa el contador si el número es negativo
    }

    if (numero > 0) {
      sumaPositivos += numero; // Suma el número positivo a la suma total de positivos
      cantidadPositivos++; // Incrementa el contador de números positivos
    }

    contador++; // Incrementa el contador
  }

  // Impresión de resultados
  console.log("Cantidad de números mayores a 150: " + cantidadMayores150);
  console.log("Número mayor: " + numeroMayor);
  console.log("Número menor: " + numeroMenor);
  console.log("Cantidad de números negativos: " + cantidadNegativos);
  console.log("Promedio de los números positivos: " + (sumaPositivos / cantidadPositivos).toFixed(2));
}

main(); // Llamada a la función principal para ejecutar el programa

  

