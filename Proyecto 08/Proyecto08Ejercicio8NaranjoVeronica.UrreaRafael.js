// -Fecha de publicación: Martes 20 de Junio del 2023
// -Hora 7:35 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que pida como datos de entrada 2 números y realice las operaciones de suma,
// resta, multiplicación y división y muestre los resultados de forma ordenada en pantalla.

const prompt=require("prompt-sync")({sigint:true});

function realizarOperaciones(){//definimos una funcion que hacer operaciones de suma,
    // resta, multiplicación y división
    var numero1 = parseInt(prompt("Ingrese un numero:"));//se pide el primer numero al usuario
    var numero2 = parseInt(prompt("Ingrese otro numero: "));//se pide el segundo numero al usuario

    var suma = numero1 + numero2;//se define la variable suma que se guarda como la suma de los dos numeros
    var multiplicacion = numero1 * numero2;//se define la variable multiplicacion que se guarda como la multiplicacion de los dos numeros
    var divisor = numero1 / numero2;//se define la variable division que se guarda como la division de los dos numeros
    var resta = numero1 - numero2;//se define la variable resta  que se guarda como la resta de los dos numeros

    //usamos console.log para mostrar las variables
    console.log("La suma es: ", suma);
    console.log("La multiplicación es: ", multiplicacion);
    console.log("La división es: ", divisor);
    console.log("La resta es: ", resta);

}
//llamamos la función
realizarOperaciones();




