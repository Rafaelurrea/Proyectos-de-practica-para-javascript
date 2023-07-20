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

// Función recursiva para los cuadros de animación
function animateFrames(frame) {
  if (frame >= animationFrames) {
    // Caso base: se ha alcanzado la cantidad de cuadros de animación
    return;
  }

  var spaces = " ".repeat(distance); // Generar cadena de espacios en blanco

  var line = spaces + "A"; // Primera letra A
  line += " ".repeat(distance * 2 - 1); // Espacios en blanco en el medio
  line += "A" + spaces; // Segunda letra A

  console.clear(); // Limpiar la consola
  console.log(line); // Imprimir la línea

  distance--; // Reducir la distancia en cada cuadro

  // Esperar un tiempo antes de pasar al siguiente cuadro
  // Esto es opcional y puede variar según el entorno en el que se ejecute el código
  // Aquí utilizamos una función síncrona de espera en JavaScript para simular la pausa
  // Puedes ajustar el valor en milisegundos según tus necesidades
  sleep(500); // Esperar 500 milisegundos (0.5 segundos)

  animateFrames(frame + 1); // Llamada recursiva para el siguiente cuadro
}

// Función de espera síncrona en JavaScript
function sleep(ms) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + ms);
}

// Llamada inicial a la función recursiva para los cuadros de animación
animateFrames(0);
  
  
  
