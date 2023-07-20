// -Fecha de publicación: 20/06/2023
// -Hora: 9:32 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa lee un número entero N, no negativo(validar esto) y mostrar la suma de los factoriales de todos los números desde 0 hasta N.

const prompt = require("prompt-sync")();

const calcularFactorial= (num) => {
    let resultado = 1; // Inicializar la variable 'resultado' en 1 para almacenar el factorial
    
    if (num === 0) { // Verificar si el número ingresado es 0
      return resultado; // Retornar 1, ya que el factorial de 0 es 1
    } else {
      for (let i = 1; i <= num; i++) { // Iterar desde 1 hasta el número ingresado (inclusive)
        resultado *= i; // Calcular el factorial multiplicando 'resultado' por cada número del bucle
      }
      return resultado; // Retornar el resultado del factorial
    }
  }
  
  
const factorialSum = () => {
  let N = parseInt(prompt("Ingrese un número entero no negativo: ")); // Solicitar al usuario ingresar un número entero no negativo y convertirlo a entero
  
  while (N < 0 || isNaN(N)) { // Validar si el número ingresado es negativo o no es un número válido
    N = parseInt(prompt("Ingrese un número entero no negativo válido: ")); // Solicitar al usuario ingresar nuevamente un número válido
  }
  
  let suma = 0; // Inicializar la variable 'suma' en 0 para almacenar la suma de los factoriales
  
  for (let i = 0; i <= N; i++) { // Iterar desde 0 hasta el número ingresado (inclusive)
    suma += calcularFactorial(i); // Sumar el factorial del número actual a la variable 'suma'
  }
  
  console.log("La suma de los factoriales desde 0 hasta", N, "es:", suma); // Mostrar el resultado de la suma de los factoriales
}
//se llama la funcion
factorialSum(); 