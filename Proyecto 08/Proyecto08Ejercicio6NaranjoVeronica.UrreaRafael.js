// -Fecha de publicación: Martes 20 de Junio del 2023
// - Hora: 7:25 pm
// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que reciba el número de minutos como datos de entrada e imprima en pantalla el total de horas y minutos.

const prompt=require("prompt-sync")({sigint:true});

function horasMinutos(){//definimos una funcion para convertir minutos en horas y minutos
    var minutos = prompt("Ingrese los minutos: ");//pedimos al usuario que ingrese los minutos
    var horas = 0;//definimos una variable horas que inicia en 0
    var minutosHoras = 0;//definimos una variable minutosHoras que incia en 0;
    if(minutos > 60){//agregamos un condicional que si minutos es mayor a 60 retorna true
        horas = minutos / 60;//si retorna true, horas va a ser igual a minutos dividido 60 ya que una hora tiene 60 minutos
        minutosHoras = minutos % 60;//al hacer la division anterior usamos el resto (operacion mod %) para saber los minutos de las horas ya divididas
    }

    console.log(minutos, " minutos equivalen a ", Math.trunc(horas), "horas y ", Math.trunc(minutosHoras), "minutos");//usamos console.log para mostrar los datos ya convertidos
}
//llamamos la función
horasMinutos();