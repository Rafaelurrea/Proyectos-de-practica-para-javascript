// -Fecha de publicación: 20/06/2003
// -Hora: 10:00 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Programa utilizado: chat GTP
// _ Version del programa: 3.5
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa resuelve: Diseñe un algoritmo y operacionalícelo, tal que lea un número entero positivo, de tres cifras (N <= 999 Y N>=100) y determine si el número es capicúo (es igual al revés del número original). Ejemplo: N=323, 101.


function esCapicua(numero) {
    // Verificar si el número ingresado es un entero válido
    if (!isNaN(numero) && numero >= 100 && numero <= 999) {
      const unidad = Math.floor(numero % 10); // Obtener la cifra de las unidades
      const decena = Math.floor((numero / 10) % 10); // Obtener la cifra de las decenas
      const centena = Math.floor(numero / 100); // Obtener la cifra de las centenas
  
      return unidad === centena;
    } else {
      return false;
    }
  }
  
  // Ejemplo de uso
  const numero = parseInt(prompt("Ingrese un número entero positivo de tres cifras:"));
  if (esCapicua(numero)) {
    console.log("El número " + numero + " es capicúa.");
  } else {
    console.log("El número " + numero + " no es capicúa.");
  }
  