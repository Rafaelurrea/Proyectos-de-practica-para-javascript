// -Fecha de publicación: Martes 20 de Junio del 2023
// -Hora 8:02 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que pida horas, minutos y segundos como datos de entrada y muestre en
// pantalla el número de milisegundos.

const prompt=require("prompt-sync")({sigint:true});

function mostrarMilisegundo(){//se define una función para convertir horas, minutos y segundos en milisegundos
    var horas = parseInt(prompt("Digite horas: "));//se pide las horas al usuario
    var minutos = parseInt(prompt("Minutos: "));//se pide los minutos al usuario
    var segundos = parseInt(prompt("Segundos: "));//se pide los segundos al usuario

    //se define totalSegundos como el calculo para saber total de segundos
    var totalSegundos = horas * 3600 + minutos * 60 + segundos;

    //se define totalMilisegundos como el calculo para saber el total de milisegundos
    var totalMilisegundos = totalSegundos * 1000;

    //usamos console.log para mostrar los datos ya convertidos
    console.log("La cantidad de milisegundos para ", horas, " hora", minutos, " minutos ", segundos, " segundos ", " es de: ", totalMilisegundos);

}
//se llama la función
mostrarMilisegundo();