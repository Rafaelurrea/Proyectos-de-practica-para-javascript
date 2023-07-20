// - Fecha de publicación: Martes 20 de Junio del 2023
// - Hora 7:30 pm
// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que pida como datos de entrada el nombre, apellido y año de nacimiento y
// luego los imprima juntos.


const prompt=require("prompt-sync")({sigint:true});

function imprimir(){//definimos una funcion para imprimir nombre, apellido y año de nacimiento juntos.(concatenar strings)
    var nombre = prompt("Ingrese su nombre: ");//se pide el nombre al usuario
    var apellido = prompt("Ingrese su apellido: ");//se pide el apellido al usuario
    var nacimiento = prompt("Ingrese su año de nacimiento: ");//pedimos el año de nacimiento al usuario
    console.log(nombre + " ", apellido, " " + nacimiento);//usamos console.log para imprimir el resultado
}
//llamamos la función
imprimir();