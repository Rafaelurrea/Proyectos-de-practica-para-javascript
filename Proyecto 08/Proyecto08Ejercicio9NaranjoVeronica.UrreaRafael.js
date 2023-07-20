// -Fecha de publicación: Martes 20 de Junio del 2023
// -Hora: 7:40 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que encuentre el valor del ángulo faltante de un triángulo si toma el valor de
// los otros dos ángulos como datos de entrada, teniendo en cuenta que los 3 ángulos de un triángulo
// suman 180 °.

const prompt=require("prompt-sync")({sigint:true});

function encontrarAngulo(){//definimos una funcion para encontrar el angulo faltante
    var angulo1 = parseInt(prompt("Ingrese el primer angulo: "));//se pide el primer angulo al usuario  
    var angulo2 = parseInt(prompt("Ingrese el segundo angulo: "));//se pide el segundo angulo al usuario
    var anguloFaltante = 180 - (angulo1 + angulo2);//se define anguloFaltante como la formula 
    console.log("El valor del tercer angulo de un triangulo con angulos de ", angulo1, " y ", angulo2, " es de: ", anguloFaltante);
    //usamos console.log para mostrar los datos
}
//se llama la función
encontrarAngulo();