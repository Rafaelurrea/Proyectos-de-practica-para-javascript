// -Fecha de publicación: 20/06/2003
// -Hora: 9:49 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa pide un número del 1 al 5 e imprime si es primo o no.

    function esPrimo(){
        var num = prompt("Este programa, lee un número entre uno(1) y cinco(5), e imprime si es primo o no. Ingrese un número: ");
        if(num == 1){
            console.log(num, " No es primo")
        } else if (num == 2){
            console.log(num, " Es primo")
        }  else if (num == 3){
            console.log(num, " Es primo")
        }  else if (num == 4){
            console.log(num, "  No Es primo")
        }  else if (num == 5){
            console.log(num, " Es primo")
        } 
    }

    esPrimo();