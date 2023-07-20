// -Fecha de publicación: 20/06/2003
// -Hora: 9:49 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa que pide un número y dice si es mayor de 100.

function numeroMayorCien(){
    var num = prompt("Ingrese un número: ")
    if(num > 100){
        console.log("El número es mayor a 100")
    } else if(num == 100){
        console.log("EL número es igual a 100")
    } else {
        console.log("EL número no es mayor a 100")
    } 
}

numeroMayorCien();