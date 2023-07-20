// -Fecha de publicación: 20/06/2023
// -Hora: 9:07 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa que imprime el valor de la suma de los elementos de la serie de Fibonacci entre 0 y 100.

const prompt = require("prompt-sync")();

const sumafibonacci = () => {
    let num1 = 0; 
    let num2 = 1; 
    let fibo = 0; 
    let suma = fibo; 
    
    for (let i = 0; fibo < 100; i++) {
      console.log(fibo); // Mostrar el número actual de la serie Fibonacci
      fibo = num1 + num2; // Calcular el siguiente número sumando los dos anteriores
      suma += num2; // Agregar el número actual a la suma total
      num1 = num2; // Actualizar el primer número con el valor del segundo número
      num2 = fibo; // Actualizar el segundo número con el valor del número actual
    }
    
    console.log("La suma de los números de la serie Fibonacci es: ", suma); 
  }
  
  sumafibonacci();
  