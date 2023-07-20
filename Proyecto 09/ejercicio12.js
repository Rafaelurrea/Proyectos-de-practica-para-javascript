// -Fecha de publicación: 20/06/2003
// -Hora: 10:00 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa resuleve: Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:
// - Si trabaja 40 horas o menos se le paga $16 por hora- Si trabaja mas de 40 horas se le paga $16 por cada una de las primeras 40 horas y $20 por cada hora extra. Datos de entrada: Nro de horas trabajadas.

function calcularSalarioSemanal(){
    var horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas: "));
    var salario = 0;
    var horasNormales = 40;
    var tarifaNormal = 16;
    var tarifaExtra = 20;
  
    if (horasTrabajadas <= horasNormales) {
      salario = horasTrabajadas * tarifaNormal;
    } else {
      var horasExtras = horasTrabajadas - horasNormales;
      salario = (horasNormales * tarifaNormal) + (horasExtras * tarifaExtra);
    }
  
    return salario;
  }
  
  
  var salarioSemanal = calcularSalarioSemanal();
  console.log("El salario semanal del obrero es: $" + salarioSemanal.toFixed(2));
  