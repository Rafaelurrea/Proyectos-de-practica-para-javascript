// -Fecha de publicación: 20/06/2003
// -Hora: 9:55 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa toma tres números y dice si la multiplicación de los dos primeros es igual al tercero.

function multiIgualCero(){
    var num1 = parseFloat(prompt("Ingrese el primer número: "));
    var num2 = parseFloat(prompt("Ingrese el segundo número: "));
    var num3 = parseFloat(prompt("Ingrese el tercer número: "));

    var multiplicacion = num1 * num2;

    if (multiplicacion === num3){
     console.log("La multiplicación de los dos primeros números es igual al tercer número.");
    } else {
     console.log("La multiplicación de los dos primeros números no es igual al tercer número.");
    }
}

multiIgualCero();

