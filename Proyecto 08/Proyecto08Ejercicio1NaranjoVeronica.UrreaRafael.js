// -Fecha de publicación: Martes 20 de Junio del 2023
// - Hora: 7:11 pm
// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Escribir un programa que convierta de grados centígrados a grados fahrenheit, teniendo en cuenta la
// siguiente formula: F= (9/5)C+32

function convertir(){ //definimos funcion para converit de grados centigrados a fahrenheit
  const centigrados = parseFloat(prompt("Ingrese los grados centigrados: "));//se pregunta por el valor a convertir
  const fahrenheit =  (((9/5) * centigrados) + 32); //definimos la variable fahrenheit como la formula de conversion
  console.log(centigrados,"°C son  ",fahrenheit," grados fahrenheit")//usamos console.log para mostrar los grados ya convertidos
}
convertir();//se llama la funcion