// -Fecha de publicación: 20/06/2003
// -Hora: 9:55 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa determina si un alumno aprueba a reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 3,0; reprueba en caso contrario. Datos de entrada: Tres(3) notas.

function calcularPromedio(nota1, nota2, nota3){
    var nota1 = parseFloat(prompt("Ingrese la nota #1: "));
    var nota2 = parseFloat(prompt("Ingrese la nota #2: "));
    var nota3 = parseFloat(prompt("Ingrese la nota #3: "));
    var promedio = (nota1 + nota2 + nota3) / 3;
    return promedio.toFixed(1);
  }
  
  function verificarAprobacion(promedio){
    if (promedio >= 3.0) {
      console.log("El alumno ha aprobado el curso con un promedio de " + promedio);
    } else {
      console.log("El alumno ha reprobado el curso con un promedio de " + promedio);
    }
  }
  
  var promedioCalculado = calcularPromedio();
  verificarAprobacion(promedioCalculado);