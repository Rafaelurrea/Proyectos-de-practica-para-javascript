// -Fecha de publicación: 20/06/2003
// -Hora: 9:49 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa pide un número del 1 al 12 e imprime el nombre del mes correspondiente.

function numeroMes(){
    var num = prompt("Este programa, lee un número entre [1 y 12] e imprime el mes que le corresponde en el año. Referencia: 1=Enero. 12=Diciembre. Entre un número: ")
    if(num == 1){
        console.log("Enero")
    } else if (num == 2){
        console.log("Febrero")
    }  else if (num == 3){
        console.log("Marzo")
    }  else if (num == 4){
        console.log("Abril")
    }  else if (num == 5){
        console.log("Mayo")
    }  else if (num == 6){
        console.log("Junio")
    }  else if (num == 7){
        console.log("Julio")
    }  else if (num == 8){
        console.log("Agosto")
    }  else if (num == 9){
        console.log("Septiembre")
    }  else if (num == 10){
        console.log("Octubre")
    }  else if (num == 11){
        console.log("Noviembre")
    }  else if (num == 12){
        console.log("Diciembre")
    }
}

numeroMes();
