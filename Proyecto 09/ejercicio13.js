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
// - Un descriptivo de que hace el programa: El programa resuleve: Una persona enferma, que pesa 70 kg, se encuentra en reposo y desea saber cuantas calorías consume su cuerpo durante todo el tiempo que realice una misma actividad. Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo. Los datos que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto. Datos de entrada: actividad(string), tiempo de la actividad.

function calcularCalorias(actividad, tiempo) {
    var caloriasPorMinuto;
  
    if (actividad === 'dormir') {
      caloriasPorMinuto = 1.08;
    } else if (actividad === 'reposo') {
      caloriasPorMinuto = 1.66;
    } else {
      return 'Actividad no válida';
    }
  
    var calorias = caloriasPorMinuto * tiempo;
    return calorias;
  }
  
  // Solicitar entrada al usuario
  var actividad = prompt('Ingrese la actividad (dormir o reposo):');
  var tiempo = parseInt(prompt('Ingrese el tiempo de la actividad en minutos:'));
  
  // Calcular calorías
  var calorias = calcularCalorias(actividad, tiempo);
  
  // Mostrar el resultado
  if (typeof calorias === 'number') {
    console.log('Calorías consumidas:', calorias);
  } else {
    console.log(calorias);
  }
  