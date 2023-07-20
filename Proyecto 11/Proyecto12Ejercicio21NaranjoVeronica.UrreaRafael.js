// -Fecha de publicación: 21/06/2023
// -Hora: 11:21 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: SERIES DE TAYLOR: 21.
// En computación las funciones trigonométricas como el seno, coseno, tangente, etc., al igual que otros
// tipos de funciones, no se calculan directamente, lo que sucede en realidad es que internamente, la
// máquina realiza las llamadas series de Taylor, que son el resultado de la suma de varios términos para
// formar los resultados a estas funciones.
// Hacer un algoritmo utilizando ciclos anidados; para calcular los resultados de las siguientes funciones usando
// las series de Taylor que se dan a continuación.
// Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie
// Mostraremos ejemplos con diez (10) términos de cada serie, con estos valores puede probar sus
// resultados. Para valores conocidos de entrada, valores conocidos a la salida. 
const prompt = require("prompt-sync")();
const factorial=(x) =>{
    let r = 1;
    for (let i = 1; i <= x; i++) {
      r = r * i; // Calcula el factorial de 'x' multiplicando los números del 1 a 'x'
    }
    return r; // Retorna el factorial de 'x'
  }
  
  const calculateCosine= () =>{
    let t; // Variable para almacenar el número de términos de la serie
    let x, s = 1; // Variables para almacenar el valor de 'x' y el resultado de la serie de Taylor
  
    console.log("Este programa imprime un resultado para cos(x) utilizando una serie de Taylor");
  
    // Solicitar valor para x al usuario
    x = parseFloat(prompt("Ingrese un valor para x: "));
  
    // Solicitar número de términos de la serie al usuario
    t = parseInt(prompt("Ingrese el número de términos de la serie: "));
  
    // Calcular la serie de Taylor para aproximar cos(x)
    for (let i = 1; i < t; i++) {
      // Calcular el término de la serie utilizando la fórmula de la serie de Taylor para cos(x)
      // pow(-1, i) alterna el signo del término
      // pow(x, 2*i) eleva 'x' a la potencia 2*i
      // factorial(2*i) calcula el factorial de 2*i
      s = s + ((Math.pow(-1, i) * Math.pow(x, 2 * i)) / factorial(2 * i));
    }
  
    console.log("El resultado es: " + s.toFixed(8)); // Mostrar el resultado con 8 decimales en la consola
  }
  //se llama la funcion
  calculateCosine();
  
