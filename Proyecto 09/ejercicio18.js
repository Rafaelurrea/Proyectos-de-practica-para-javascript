// -Fecha de publicación: 20/06/2003
// -Hora: 10:00 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: chat GTP
// _ Version del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa resulev: En un estacionamiento cobran $1.800 por hora o fracción. Diseñe un algoritmo que determine cuanto debe pagar un cliente por el estacionamiento de su vehículo, conociendo el tiempo de estacionamiento en horas y minutos.

function calcularPagoEstacionamiento(horas, minutos) {
    var fraccionHora = Math.ceil(minutos / 60);
    var totalHoras = horas + fraccionHora;
    var montoPago = totalHoras * 1800;
  
    return montoPago;
  }
  
  // Solicitar al usuario los datos de estacionamiento
  var horasEstacionamiento = parseInt(prompt("Ingrese las horas de estacionamiento:"));
  var minutosEstacionamiento = parseInt(prompt("Ingrese los minutos de estacionamiento:"));
  
  // Verificar si los valores ingresados son válidos
  if (isNaN(horasEstacionamiento) || isNaN(minutosEstacionamiento)) {
    console.log("Por favor, ingrese valores numéricos válidos.");
  } else {
    // Calcular el monto a pagar
    var montoTotal = calcularPagoEstacionamiento(horasEstacionamiento, minutosEstacionamiento);
  
    console.log("El monto a pagar es: $" + montoTotal);
  }
  