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
// - Un descriptivo de que hace el programa: El programa imprime de un articulo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es uno (1) el descuento es del 10% y si la clave es 2 el descuento en del 20% (solo existen dos claves). Datos de entrada: Clave, PrecioOriginal

function calcularPrecioConDescuento(clave, precioOriginal) {
    var descuento;
  
    if (clave === 1) {
      descuento = 0.1; // 10% de descuento
    } else if (clave === 2) {
      descuento = 0.2; // 20% de descuento
    } else {
      return 'Clave no válida';
    }
  
    var precioConDescuento = precioOriginal - (precioOriginal * descuento);
    return precioConDescuento;
  }
  
  // Solicitar entrada al usuario
  var clave = parseInt(prompt('Ingrese la clave (1 o 2):'));
  var precioOriginal = parseFloat(prompt('Ingrese el precio original:'));
  
  // Calcular precio con descuento
  var precioConDescuento = calcularPrecioConDescuento(clave, precioOriginal);
  
  // Mostrar el resultado
  if (typeof precioConDescuento === 'number') {
    console.log('Clave:', clave);
    console.log('Precio original:', precioOriginal);
    console.log('Precio con descuento:', precioConDescuento);
  } else {
    console.log(precioConDescuento);
  }
  