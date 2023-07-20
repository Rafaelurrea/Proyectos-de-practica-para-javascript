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

// Función recursiva para generar la serie de Fibonacci hasta 10,000
function fibonacci(a, b) {
    // Si el número actual (b) es mayor a 10,000, detenemos la recursividad
    if (b > 10000) {
      return;
    }
  
    // Imprimimos el número actual
    console.log(b);
  
    // Llamada recursiva para generar el siguiente número de la serie
    fibonacci(b, a + b);
  }
  
  // Llamamos a la función fibonacci con los primeros dos números de la serie: 0 y 1
  fibonacci(0, 1);
  


