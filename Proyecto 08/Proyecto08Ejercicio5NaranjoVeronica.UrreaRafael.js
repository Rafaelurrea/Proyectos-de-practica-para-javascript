// -Fecha de publicación: Martes 20 de Junio del 2023
// - Hora: 7:23 pm
// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que pida horas y minutos como datos 
// de entrada e imprima el total en minutos.

function convertirMinutos(){ //definimos una funcion para convertir horas y minutos en minutos
    var horas = parseInt(prompt("Ingrese la cantidad de horas: "));//pedimos los datos al usuario
    var minutos = parseInt(prompt("Ingrese la cantidad de minutos: "));//pedimos los datos al usuario
    var convertir = (horas * 60) + minutos;//definimos millas como la formula de conversion
    console.log(horas, "horas y ", minutos, "minutos equivalen a ", convertir, " minutos");//usamos console.log para mostrar los datos ya convertidos
  }
  //llamamos la funcion
  convertirMinutos();
  

