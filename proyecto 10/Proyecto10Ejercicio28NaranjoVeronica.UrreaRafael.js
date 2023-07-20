// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción:    
                            //      A
                            //     AA
                            //    AAA
                            //   AAAA
                            //  AAAAA
                            // AAAAAA <--- Debe ser columna 40 y fila 6
                            //  AAAAA
                            //   AAAA
                            //    AAA
                            //     AA
                            //      A

function espacios(cant, cont) {  // Función para imprimir espacios en la consola
  if (cont < cant) {
    process.stdout.write(" ");
    cont++;
    espacios(cant, cont); // Llamada recursiva para imprimir el siguiente espacio
  }
}

function figura(cant, cont, esp) {  // Función para imprimir la figura en cada línea
  if (cont <= cant) {
    if (cont === 0) {
      espacios(esp, 0);
    }
    process.stdout.write("A");
    cont++;
    figura(cant, cont, esp); // Llamada recursiva para imprimir el siguiente carácter de la figura
  }
}

function numimp(max, num, esp) {  // Función para imprimir la figura en múltiples líneas
  if (num < max) {
    figura(num, 0, esp); // Llamar a la función figura para imprimir la figura en una línea
    console.log("");
    num++;
    esp--;
    numimp(max, num, esp); // Llamada recursiva para imprimir la siguiente línea de la figura
    num -= 2;
    esp += 2;
    figura(num, 0, esp); // Llamar a la función figura para imprimir la figura en una línea (reversa)
    console.log("");
  }
}

function main() {
  var num = 0;
  var max = 6;
  var esp = 39;
  numimp(max, num, esp); // Iniciar la impresión de la figura
}

main(); // Llamar a la función principal
  
  