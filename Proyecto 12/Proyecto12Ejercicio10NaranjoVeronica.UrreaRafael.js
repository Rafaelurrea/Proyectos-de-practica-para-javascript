// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Programa que muestra la letra "A" en forma vertical con espacios intercalados

var distance = 10; // Distancia inicial entre las letras A
var animationFrames = 10; // Cantidad de cuadros de animación

// Función para animar los cuadros
const animateFrames = (frame) =>{
  while (frame < animationFrames) {
    var spaces = " ".repeat(distance); // Generar una cadena de espacios utilizando el valor de distance
    var line = spaces + "A"; // Concatenar los espacios y la letra 'A' al inicio de la línea
    line += " ".repeat(distance * 2 - 1); // Concatenar una cantidad de espacios según el cálculo realizado
    line += "A" + spaces; // Concatenar la letra 'A' y los espacios al final de la línea

    console.clear(); // Limpiar la consola
    console.log(line); // Imprimir la línea en la consola

    distance--; // Decrementar el valor de distance en 1

    sleep(500); // Llamar a la función sleep para pausar la ejecución durante 500 milisegundos

    frame++; // Incrementar el valor de frame en 1
  }
}

// Función para pausar la ejecución durante un período de tiempo determinado
const sleep = (ms) =>{
  var start = new Date().getTime(); // Obtener el tiempo actual en milisegundos
  while (new Date().getTime() < start + ms); // Esperar hasta que haya transcurrido el tiempo especificado
}

animateFrames(0); // Llamar a la función animateFrames para comenzar la animación desde el cuadro 0

