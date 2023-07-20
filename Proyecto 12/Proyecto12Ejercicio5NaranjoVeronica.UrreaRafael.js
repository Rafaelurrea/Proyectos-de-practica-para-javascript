// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: 5.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente todas las
// tablas de multiplicar del 1 al 10; (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa incluyendo las funciones.);

/**
 * Imprime una línea de la tabla de multiplicar para un número específico.
 * @param {number} numero - El número para el cual se imprimirá la tabla de multiplicar.
 * @param {number} i - El contador que indica el número actual en la tabla de multiplicar.
 * @returns {void}
 */
const imprimirTabla = (numero, i) =>{
    while (i <= 10) {
      console.log(numero + " x " + i + " = " + (numero * i));
      i++;
    }
  
    console.log("---------------------");
  }
  
  /**
   * Imprime todas las tablas de multiplicar del 1 al 10.
   * @param {number} numero - El número actual para el cual se imprimirá la tabla de multiplicar.
   * @returns {void}
   */
  const imprimirTablasDeMultiplicar = (numero) =>{
    while (numero <= 10) {
      console.log("Tabla de multiplicar del " + numero + ":");
      imprimirTabla(numero, 1);
      numero++;
    }
  }
  
  // Inicia la impresión de las tablas de multiplicar del 1 al 10.
  imprimirTablasDeMultiplicar(1);
  



  
  
  