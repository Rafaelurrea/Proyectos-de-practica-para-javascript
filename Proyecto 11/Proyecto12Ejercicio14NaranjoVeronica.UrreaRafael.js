// -Fecha de publicación: 20/06/2023
// -Hora: 12:50 am
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son solo de referencia para mostrar filas y columnas; no se pide que las imprima.
 
//se declara la funcion imprimir
const imprimir=(fila, contador, final, valorLetras,)=> {
  // Iteramos desde la fila actual hasta la fila 7
  for (let i = fila; i <= 7; i++) {
    let espacios = contador - 1; // Cantidad de espacios en blanco antes de las letras
    let letras = valorLetras - contador + 1; // Cantidad de letras a imprimir en la fila actual

    // Imprimir los espacios en blanco antes de las letras
    for (let j = 0; j <= espacios; j++) {
      process.stdout.write(' ');
    }

    // Imprimir las letras correspondientes
    for (let k = 0; k < letras; k++) {
      process.stdout.write(String.fromCharCode(80));
    }

    // Imprimir un salto de línea
    process.stdout.write('\n');

    contador++; // Incrementar el contador para la siguiente fila
    final++; // Incrementar el valor final para los espacios en blanco
    valorLetras -= 1; // Reducir el valor final de las letras en cada fila
  }
}
//se llama la funcion
imprimir(1, 1, 0, 13,);
