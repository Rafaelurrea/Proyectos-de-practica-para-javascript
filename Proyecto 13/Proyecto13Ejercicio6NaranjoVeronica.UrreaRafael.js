// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Triki

var prompt = require('prompt-sync')();                                        // Se importa la libreria prompt-sync

let triqui = "123456789";                                                     // Se crea la variable triqui de tipo string con los numeros del 1 al 9

let jugadorActual = 'X';                                                      // Se crea la variable jugadorActual con el valor X

function imprimirTablero() {                                                  // Se crea la funcion imprimirTablero                         
  for (let i = 0; i < 3; i++) {                                               // Se crea un ciclo for que recorre el tablero
    console.log(triqui.slice(i * 3, (i + 1) * 3).split('').join(' | '));      // Se imprime el tablero
    //triqui slice 0,3 = 123 y split = 1,2,3 y join = 1 | 2 | 3
    if (i < 2) {                                                              // Se crea un if para imprimir las lineas del tablero
      console.log("---------");                                               // Se imprime las lineas del tablero
    }
  }
}

function realizarJugada(posicion, jugador) {                                  // Se crea la funcion realizarJugada                          
  if (triqui[posicion] !== 'X' && triqui[posicion] !== 'O')                   // Se crea un if para verificar si la posicion esta ocupada
  {                                                                           
    triqui = triqui.slice(0, posicion) + jugador + triqui.slice(posicion + 1);  // Se modifica la variable triqui con la posicion y el jugador
    imprimirTablero();                                                        // Se llama la funcion imprimirTablero
    if (verificarGanador(jugador)) {                                          // Se crea un if para verificar si el jugador gano
      console.log(`¡Felicidades, jugador ${jugador} ganaste!`);               // Se imprime el mensaje de felicitaciones
    } else if (triquiCompleto()) {                                            // Se crea un else if para verificar si el triqui esta completo
      console.log("Empate.");                                                 // Se imprime el mensaje de empate
    } else {                                                                  // Se crea un else                      
      cambiarJugador();                                                       // Se llama la funcion cambiarJugador
      solicitarJugada();                                                      // Se llama la funcion solicitarJugada
    }
  } 
  else 
  {                                                                         // Se crea un else  
    console.log("La posición seleccionada está ocupada. Selecciona otra posición.");  // Se imprime el mensaje de posicion ocupada
    solicitarJugada();                                                        // Se llama la funcion solicitarJugada
  }
}

function verificarGanador(jugador) {                                          // Se crea la funcion verificarGanador
  const combinacionesGanadoras = [                                            // Se crea una variable combinacionesGanadoras con las posibles combinaciones ganadoras
    [0, 1, 2], [3, 4, 5], [6, 7, 8],                                          // Filas                                         
    [0, 3, 6], [1, 4, 7], [2, 5, 8],                                          // Columnas
    [0, 4, 8], [2, 4, 6]                                                      // Diagonales
  ];

  for (const combinacion of combinacionesGanadoras) {                         // Se crea un ciclo for para recorrer las combinaciones ganadoras        
    const [a, b, c] = combinacion;                                            // Se crea una variable combinacion que guarda las posiciones de las combinaciones ganadoras
    if (triqui[a] === jugador && triqui[b] === jugador && triqui[c] === jugador) {  // Se crea un if para verificar si el jugador gano
      return true;                                                            // Se retorna true                        
    }
  }

  return false;                                                               // Se retorna false                      
}

function triquiCompleto() {                                                   // Se crea la funcion triquiCompleto
  return !triqui.includes('1') && !triqui.includes('2') && !triqui.includes('3') && // Se crea un if para verificar si el triqui esta completo
        // El ! es para negar la condicion. Si no esta el 1, 2 y 3, entonces esta completo y retorna true 
         !triqui.includes('4') && !triqui.includes('5') && !triqui.includes('6') && 
         !triqui.includes('7') && !triqui.includes('8') && !triqui.includes('9');     
}

function cambiarJugador() {                                                   // Se crea la funcion cambiarJugador
  jugadorActual = (jugadorActual === 'X') ? 'O' : 'X';                        // Se crea un if para cambiar el jugador
  // Si el jugador actual es X, entonces cambia a O, sino cambia a X         
}

function solicitarJugada() {                                                  // Se crea la funcion solicitarJugada
  const posicion = prompt(`Turno del jugador ${jugadorActual}. Ingrese una posición (1-9): `);  // Se crea una variable posicion que guarda la posicion del jugador
  const numeroPosicion = parseInt(posicion);                                  // Se crea una variable numeroPosicion que guarda la posicion del jugador
  if (numeroPosicion >= 1 && numeroPosicion <= 9) {                           // Se crea un if para verificar si la posicion es valida
    realizarJugada(numeroPosicion - 1, jugadorActual);                        // Se llama la funcion realizarJugada
  } else {                                                                    // Se crea un else  
    console.log("Posición inválida. Elige una posición del 1 al 9.");         // Se imprime el mensaje de posicion invalida
    solicitarJugada();                                                        // Se llama la funcion solicitarJugada
  }
}

console.log("Comienza el juego. El jugador X va primero.");                   // Se imprime el mensaje de inicio de juego      
imprimirTablero();                                                            // Se llama la funcion imprimirTablero                        
solicitarJugada();                                                            // Se llama la funcion solicitarJugada

