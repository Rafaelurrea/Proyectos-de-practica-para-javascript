// -Fecha de publicación: Martes 20 de Junio del 2023
// - Hora: 7:11 pm 
// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que calcule el volumen 
// de una esfera, teniendo en cuenta la siguiente formula: (((4/3*pi)*(r^3))

const PROMPT = require("prompt-sync")();

function volumenCalcular(){//definimos una funcion para calcular el volumende la esfera
    const pi = Math.PI;//definimos pi como una constante 
    const radio = parseFloat(prompt("Ingrese el radio: ")); //pedimos los datos al usuario
    const volumen = ((4/3)*pi* (Math.pow(radio,3))); //definimos la variable volumen como la formula de conversion
    console.log("El volumen de la esfera con radio: ", radio, " es ", volumen);//usamos console.log para mostrar los datos ya convertidos
  }
//llamamos la funcion
volumenCalcular();


