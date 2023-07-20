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

const renglones = (limite, renglon = 1) => {
    // Función para generar los renglones de la figura
  
    if (renglon > limite) {
      return; // Finalizar la función si se ha alcanzado el límite de renglones
    }
  
    // Imprimir los espacios y letras correspondientes en función del renglón actual
    if (renglon === 1 || renglon === 7) {
      espacios(9);
      letras(1);
    }
    if (renglon === 2 || renglon === 6) {
      espacios(8);
      letras(3);
    }
    if (renglon === 3 || renglon === 5) {
      espacios(7);
      letras(5);
    }
    if (renglon === 4) {
      espacios(6);
      letras(7);
    }
  
    console.log(); // Salto de línea
  
    renglones(limite, renglon + 1); // Llamada recursiva para generar el siguiente renglón
  };
  
  const espacios = (espacio, contador = 1) => {
    // Función para imprimir espacios en la consola
  
    while (contador <= espacio) {
      process.stdout.write(" ");
      contador++;
    }
  };
  
  const letras = (cantidad, contador = 1) => {
    // Función para imprimir letras en la consola
  
    while (contador <= cantidad) {
      process.stdout.write("Z");
      contador++;
    }
  };
  
  renglones(7); // Iniciar la generación de los renglones de la figura