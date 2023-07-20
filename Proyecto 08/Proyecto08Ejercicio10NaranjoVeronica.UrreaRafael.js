// -Fecha de publicación:Martes 20 de Junio del 2023
// -Hora 7:48 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que convierta de mph (millas por hora) a m/s, teniendo en cuenta que una
// milla tiene 1609.344 m y una hora tiene 3600 segundos.

const prompt=require("prompt-sync")({sigint:true});

function convertirMillas(){// se define una funcion para convertir de mp/h a m/s
    var millas = parseInt(prompt("Ingrese la cantidad mph que desea convertir a m/s: "));//se pide el valor en mp/h al usuario
    var convertir = (millas * (1609.344/3600));//se define convertir como la formula para la conversión
    console.log(millas, "mph equivalen a ", convertir, "m/s");//usamos console.log para mostrar los datos
}
//se llama la función
convertirMillas();

