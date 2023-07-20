// -Fecha de publicación: 20/06/2003
// -Hora: 9:49 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa pide un número del 1 al 7 e imprime el día de la semana correspondiente.

function numeroDia(){
    var num = prompt("Este programa, lee un número entre [1 y 7] e imprime el día que le corresponde en la semana. Referencia: 1=Lunes. 7=Domingo. Entre un número:")
    if (num == 1){
        console.log("Lunes");
    } else if (num == 2){
        console.log("Martes");
    } else if (num == 3){
        console.log("Miercoles");
    } else if (num == 4){
        console.log("Jueves");
    } else if (num == 5){
        console.log("Viernes");
    } else if (num == 6){
        console.log("Sabado");
    } else if (num == 7){
        console.log("Domingo");
    }
}

numeroDia();