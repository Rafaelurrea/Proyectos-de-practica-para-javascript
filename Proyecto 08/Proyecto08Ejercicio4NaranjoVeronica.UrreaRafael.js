// -Fecha de publicación: Martes 20 de Junio del 2023
// - Hora: 7:20 pm
// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que convierta de Km/h a mph (millas por hora), teniendo en cuenta que 1Km =
// 0.621371 millas

function convertirMillas(){ //definimos una funcion para convertir km/h a mp/h
    var kilometros = prompt("digite cuatos km/h quiere convertir a mph: ");//Se pide al usuario el parametro de entrada y se guarda en la variable kilomentros
    var millas = (kilometros * 0.621371);//definimos millas como la formula de conversion
    console.log(kilometros, "km/h equivalen a ", millas, "mph.");//usamos console.log para mostrar los datos ya convertidos
  }
  //llamamos la funcion
  convertirMillas();
