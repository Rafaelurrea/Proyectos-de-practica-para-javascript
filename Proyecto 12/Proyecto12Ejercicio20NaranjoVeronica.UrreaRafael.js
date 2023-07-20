// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa que mediante la serie de taylor imprima el resultado de e^x siendo x
//   una variable ingresada por el usuario.

var prompt = require('prompt-sync')(); // Se importa el módulo prompt-sync para obtener entrada del usuario

const main = () =>{
  let x = parseInt(prompt("Ingrese un valor para x: ")); // Se solicita al usuario que ingrese un valor para x
  let veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: ")); // Se solicita al usuario que ingrese el número de términos para la serie

  let resultado = calcularResultado(x, veces); // Se llama a la función calcularResultado para obtener el resultado de la serie

  console.log(`El resultado de e^${x} es: ${resultado}`);
}

const calcularResultado = (x, veces, potencia = 1, factorial = 1, resultado = 1) =>{
  // Función para calcular el resultado de la serie de e^x
  while (potencia <= veces) {
    factorial *= potencia; // Se calcula el factorial de la potencia actual
    resultado += Math.pow(x, potencia) / factorial; // Se agrega el término actual a la suma del resultado
    potencia++; // Incremento de la potencia
  }

  return resultado; // Se retorna el resultado de la serie
}

main(); // Se llama a la función principal para iniciar el programa


