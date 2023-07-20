// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: 3.Hacer un programa de computador, de tal manera que lea desde el teclado un numero entero y lo
// imprima al revés.
// Se empleo ChatGPT3.5 para la elaboracion de este codigo.

//Creacion de la funcion prompt
"use strict";
const ps = require("prompt-sync")
const prompt = ps();

const invertirNumero = () => {
  let numero = parseInt(prompt("Ingrese un número entero:")); // Solicita al usuario ingresar un número entero
  let numeroInvertido = 0; // Variable para almacenar el número invertido

  // Mientras el número sea diferente de cero
  while (numero !== 0) {
    let digito = numero % 10; // Obtiene el último dígito del número
    numeroInvertido = numeroInvertido * 10 + digito; // Agrega el dígito al número invertido
    numero = Math.floor(numero / 10); // Elimina el último dígito del número original
  }

  console.log("El número invertido es: " + numeroInvertido); // Imprime el número invertido en la consola
};

invertirNumero(); // Llamada a la función invertirNumero para ejecutarla
  

