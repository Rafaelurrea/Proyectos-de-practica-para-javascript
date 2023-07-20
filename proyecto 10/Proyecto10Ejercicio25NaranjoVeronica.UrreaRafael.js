// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
// máximo de cuatro(4) ordenes “IMPRIMIR”)
                              //    Z
                              //   ZZZ
                              //  ZZZZZ
                              // ZZZZZZZ
                              //  ZZZZZ
                              //   ZZZ
                              //    Z   <--- Debe estar en la columna 10

// Función recursiva para imprimir la letra "Z" repetidamente
function ImprimirZ(Inicio, Final) {
  if (Inicio <= Final) {
    process.stdout.write("Z"); // Imprimir "Z" en la consola
    ImprimirZ(Inicio + 1, Final); // Llamada recursiva para imprimir más "Z"
  }
}

// Función recursiva para imprimir un espacio en blanco repetidamente
function ImprimirEsp(Inicio, Final) {
  if (Inicio <= Final) {
    process.stdout.write(" "); // Imprimir un espacio en blanco en la consola
    ImprimirEsp(Inicio + 1, Final); // Llamada recursiva para imprimir más espacios en blanco
  }
}

// Función recursiva principal para imprimir la secuencia de caracteres
function Imprimir(Fila, Contador, Final, FinalZ) {
  if (Fila <= 3) {
    // Imprimir las primeras 3 filas
    ImprimirEsp(Contador, Final); // Imprimir espacios en blanco
    ImprimirZ(Contador, FinalZ); // Imprimir "Z"
    process.stdout.write("\n"); // Imprimir una nueva línea
    Imprimir(Fila + 1, Contador, Final - 1, FinalZ + 2); // Llamada recursiva para imprimir la siguiente fila
  } else {
    if (Fila <= 7) {
      // Imprimir las filas restantes hasta la fila 7
      ImprimirEsp(Contador, Final); // Imprimir espacios en blanco
      ImprimirZ(Contador, FinalZ); // Imprimir "Z"
      process.stdout.write("\n"); // Imprimir una nueva línea
      Imprimir(Fila + 1, Contador, Final + 1, FinalZ - 2); // Llamada recursiva para imprimir la siguiente fila
    }
  }
}

// Llamada inicial a la función Imprimir para comenzar la secuencia
Imprimir(1, 1, 9, 1);
                                      
