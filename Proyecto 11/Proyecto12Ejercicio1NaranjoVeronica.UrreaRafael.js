// -Fecha de publicación: 20/06/2023
// -Hora: 9:05 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa define la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34....... Hacer un programa de computador, de tal manera que presente la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.

const prompt = require("prompt-sync")();

const fibonacci = () => {
    let num1 = 0;
    let num2 = 1;
    let fibo = 0;
    
    for (let i = 0; fibo < 10000; i++) {
      console.log(fibo);    // Imprimir el número actual de la secuencia Fibonacci
      
      fibo = num1 + num2;   // Calcular el siguiente número sumando los dos anteriores
      num1 = num2;          // Actualizar el primer número con el valor del segundo número
      num2 = fibo;          // Actualizar el segundo número con el valor del número actual
    }
  };
  
  fibonacci();  // Llamar a la función fibonacci para generar y mostrar la secuencia
  