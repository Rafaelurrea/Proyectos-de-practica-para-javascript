// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Se define la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando
// progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
// Hacer un programa de computador, de tal manera que presente la serie de Fibonacci hasta llegar sin
// sobrepasar el número 10,000.

// Función que genera la serie de Fibonacci hasta un límite dado
const fibonacciHastaLimite = (limite) => {
  let num1 = 0; // Primer número de la serie
  let num2 = 1; // Segundo número de la serie
  let fibonacci = [num1, num2]; // Arreglo para almacenar la serie de Fibonacci

  // Mientras la suma de los dos números anteriores no supere el límite
  while (num1 + num2 <= limite) {
    let temp = num1 + num2; // Calcula el siguiente número de la serie
    fibonacci.push(temp); // Agrega el siguiente número al arreglo de Fibonacci
    num1 = num2; // Actualiza num1 con el valor de num2
    num2 = temp; // Actualiza num2 con el valor calculado
  }

  return fibonacci; // Retorna el arreglo con la serie de Fibonacci
}

const limite = 10000; // Límite hasta el cual se generará la serie de Fibonacci
const serieFibonacci = fibonacciHastaLimite(limite); // Genera la serie de Fibonacci hasta el límite

console.log(serieFibonacci); // Imprime la serie de Fibonacci en la consola

  
