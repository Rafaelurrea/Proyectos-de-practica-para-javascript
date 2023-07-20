// -Fecha de publicación: 20/06/2003
// -Hora: 10:00 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Programa utilizado: chat GTP
// _ Version del programa: 3.5
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa resuelve: Una compañía dedicada al alquiler de automóviles cobra un monto fijo de $400000 para los primeros 300 km de recorrido. Para más de 300 km y hasta 1000 km, cobra un monto adicional de $ 15.000 por cada kilómetro en exceso sobre 300. Para más de 1000 km cobra un monto adicional de $ 10.000 por cada kilómetro en exceso sobre 1000. Los precios ya incluyen el 20% del impuesto general a las ventas,IVA. Diseñe un algoritmo que determine el monto a pagar por el alquiler de un vehículo y el monto incluido del impuesto.

function calcularAlquiler(kilometros) {
    const montoFijo = 400000; // Monto fijo para los primeros 300 km
    const kmLimite1 = 300; // Límite de km para el primer tramo
    const kmLimite2 = 1000; // Límite de km para el segundo tramo
    const costoExtra1 = 15000; // Costo adicional por km en exceso sobre 300 km
    const costoExtra2 = 10000; // Costo adicional por km en exceso sobre 1000 km
    const impuesto = 0.2; // Porcentaje del impuesto general a las ventas (IVA)
  
    let montoImpuesto = 0; // Monto incluido del impuesto
    let montoPagar = 0; // Monto total a pagar
  
    if (kilometros <= kmLimite1) {
      montoImpuesto = montoFijo * impuesto;
      montoPagar = montoFijo + montoImpuesto;
    } else if (kilometros <= kmLimite2) {
      const kmExceso = kilometros - kmLimite1;
      const montoExtra = kmExceso * costoExtra1;
      montoImpuesto = (montoFijo + montoExtra) * impuesto;
      montoPagar = montoFijo + montoExtra + montoImpuesto;
    } else {
      const kmExceso1 = kmLimite2 - kmLimite1;
      const kmExceso2 = kilometros - kmLimite2;
      const montoExtra1 = kmExceso1 * costoExtra1;
      const montoExtra2 = kmExceso2 * costoExtra2;
      montoImpuesto = (montoFijo + montoExtra1 + montoExtra2) * impuesto;
      montoPagar = montoFijo + montoExtra1 + montoExtra2 + montoImpuesto;
    }
  
    console.log("Monto a pagar por el alquiler: $" + montoPagar);
    console.log("Monto incluido del impuesto: $" + montoImpuesto);
  }
  
  // Obtener la cantidad de kilómetros del usuario
  const kilometros = parseFloat(prompt("Ingrese la cantidad de kilómetros a recorrer:"));
  
  // Verificar si el valor ingresado es un número válido
  if (!isNaN(kilometros)) {
    calcularAlquiler(kilometros);
  } else {
    console.log("Debe ingresar un valor numérico válido.");
  }
  