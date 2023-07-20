// -Fecha de publicación: 20/06/2003
// -Hora: 9:49 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa pide un número e imprime si es par o impar.

function esParImpar(){
    var num = prompt("Este programa, lee un número e imprime si es par o impar.. Entre un número: ")
    if(num % 2 == 0){
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

esParImpar();
