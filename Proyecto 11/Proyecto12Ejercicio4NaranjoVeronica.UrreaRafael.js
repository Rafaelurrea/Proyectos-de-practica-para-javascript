// -Fecha de publicación: 20/06/2023
// -Hora: 9:20 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa lee desde el teclado un grupo de 75 números, diferentes a cero(validar este requisito) y al final de leídos, imprima: 
// * Cantidad de números Mayores a 150
// * Número mayor y número menor encontrado en el grupo
// * Cantidad de Números negativos encontrados
// * Promedio de los Positivos Encontrados.

const prompt = require("prompt-sync")();

const analizarNumeros = () => {
  // Inicializamos las variables para almacenar los resultados
  let cantidadMayores150 = 0; // Contador de números mayores a 150
  let numeroMayor = Number.NEGATIVE_INFINITY; // Variable para almacenar el número mayor (inicializada con el valor más pequeño posible)
  let numeroMenor = Number.POSITIVE_INFINITY; // Variable para almacenar el número menor (inicializada con el valor más grande posible)
  let cantidadNegativos = 0; // Contador de números negativos
  let sumaPositivos = 0; // Suma de los números positivos
  let cantidadPositivos = 0; // Contador de números positivos

  // Iteramos 75 veces para solicitar los números
  for(let i = 1; i <= 75; i++){
    // Solicitamos al usuario que ingrese un número
    let numero = parseInt(prompt("Ingrese el número " + i + ":"));

    // Validamos si el número ingresado es cero o no es un número (NaN)
    while (numero === 0 || isNaN(numero)){
      // Si el número es inválido, solicitamos otro número diferente de cero
      numero = parseInt(prompt("Número inválido. Ingrese un número diferente de cero:"));
    }

    // Verificamos las condiciones y actualizamos las variables correspondientes
    if (numero > 150) {
      cantidadMayores150++; // Incrementamos el contador de números mayores a 150
    }

    if (numero > numeroMayor) {
      numeroMayor = numero; // Actualizamos el número mayor si el número ingresado es mayor al actual número mayor almacenado
    }

    if (numero < numeroMenor) {
      numeroMenor = numero; // Actualizamos el número menor si el número ingresado es menor al actual número menor almacenado
    }

    if (numero < 0) {
      cantidadNegativos++; // Incrementamos el contador de números negativos
    } else if (numero > 0) {
      sumaPositivos += numero; // Sumamos el número positivo a la variable de suma de positivos
      cantidadPositivos++; // Incrementamos el contador de números positivos
    }
  }

  // Calculamos el promedio de los números positivos
  let promedioPositivos = sumaPositivos / cantidadPositivos;
  promedioPositivos.toFixed(2); // Redondeamos el promedio a dos decimales

  // Mostramos los resultados en la consola
  console.log("Cantidad de números mayores a 150:", cantidadMayores150);
  console.log("Número mayor:", numeroMayor);
  console.log("Número menor:", numeroMenor);
  console.log("Cantidad de números negativos:", cantidadNegativos);
  console.log("Promedio de los números positivos:", promedioPositivos);
}

// Llamamos a la función para ejecutarla
analizarNumeros();
