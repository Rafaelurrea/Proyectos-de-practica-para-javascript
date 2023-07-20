// -Fecha de publicación: 20/06/2003
// -Hora: 9:55 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: Un hombre desea saber cuanto dinero se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco. El decidirá
// reinvertir los intereses siempre y cuando estos excedan a $7,000, y en ese caso desea saber cuanto dinero tendrá finalmente en su cuenta.
// Datos de entrada: Interes, capital inicial


function calcularInteresesYSaldo() {
    var interes = parseFloat(prompt("Ingrese el % de interés: "));
    // Convertir el interés a decimal
    var interesDecimal = interes / 100;
    var capital = parseFloat(prompt("Ingrese el capital a invertir: "));
    // Calcular los intereses generados
    var interesesGenerados = capital * interesDecimal;
  
    // Verificar si los intereses generados exceden los $7,000
    if (interesesGenerados > 7000) {
      // Calcular el saldo final al reinvertir los intereses
      var saldoFinal = capital + interesesGenerados;
      return {
        interesesGenerados: interesesGenerados.toFixed(2),
        saldoFinal: saldoFinal.toFixed(2)
      };
    } else {
      return {
        interesesGenerados: interesesGenerados.toFixed(2),
        mensaje: "NO INVIERTA."
      };
    }
  }
  
  var resultado = calcularInteresesYSaldo();
  console.log("Los intereses generados son: $" + resultado.interesesGenerados);
  if (resultado.saldoFinal) {
    console.log("INVIERTA. El saldo final de la cuenta a sera $" + resultado.saldoFinal);
  } else {
    console.log(resultado.mensaje);
  }
  