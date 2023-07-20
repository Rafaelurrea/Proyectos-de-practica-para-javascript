// -Fecha de publicación: Martes 20 de Junio del 2023
// - Hora: 7:15 pm
// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que imprima el perímetro de un rectángulo que tome su largo y su ancho como
// datos de entrada, teniendo en cuenta que el perímetro es la suma de sus 4 lados.


function calcularPerimetro(){ //definimos una funcion para calcular el perimetro
    var largo = prompt("Ingrese el largo del rectangulo: ");//pedimos los datos
    var ancho = prompt("Ingrese el ancho del rectangulo: ");//pedimos los datos
    var perimetro = ((2 * largo) + (2 * ancho));//definimos perimetro como la formula de conversion
    console.log("El perimetro del rectángulo es: ", perimetro);//usamos console.log para mostrar los datos ya convertidos
   }
  //llamamos la funcion
  calcularPerimetro();