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
// - Un descriptivo de que hace el programa: EL programa resuleve: Una empresa quiere hacer una compra de varias piezas de la misma clase a una fabrica de refacciones. La empresa, dependiendo del
// monto total de la compra, decidirá que hacer para pagar al fabricante.

// Si el monto total de la compra excede de $500000 la empresa tendrá la capacidad de invertir de su propio dinero un 55% del monto de
// la compra, pedir prestado al banco un 30% y el resto lo pagara solicitando un crédito al fabricante.

// Si el monto total de la compra no excede de $500000 la empresa tendrá capacidad de invertir de su propio dinero un 70% y el restante
// 30% lo pagara solicitando crédito al fabricante. El fabricante cobra por concepto de intereses un 20% sobre la cantidad que se le pague
// a crédito. Datos de entrada: CostoPieza, NumeroDePiezas.
// Datos de salida: CantidadInvertida, ValorPrestamoBanco, ValorCreditoFabricante, InteresCobradoPorFabricante.

function calcularFormaDePago(costoPieza, numeroDePiezas) {
    var montoTotal = costoPieza * numeroDePiezas;
    var cantidadInvertida, valorPrestamoBanco, valorCreditoFabricante, interesCobradoPorFabricante;
  
    if (montoTotal > 500000) {
      cantidadInvertida = montoTotal * 0.55;
      valorPrestamoBanco = montoTotal * 0.3;
      valorCreditoFabricante = montoTotal - cantidadInvertida - valorPrestamoBanco;
      interesCobradoPorFabricante = valorCreditoFabricante * 0.2;
    } else {
      cantidadInvertida = montoTotal * 0.7;
      valorCreditoFabricante = montoTotal - cantidadInvertida;
      interesCobradoPorFabricante = valorCreditoFabricante * 0.2;
      valorPrestamoBanco = 0;
    }
  
    return {
      cantidadInvertida: cantidadInvertida,
      valorPrestamoBanco: valorPrestamoBanco,
      valorCreditoFabricante: valorCreditoFabricante,
      interesCobradoPorFabricante: interesCobradoPorFabricante
    };
  }
  
  // Solicitar entrada al usuario
  var costoPieza = parseFloat(prompt('Ingrese el costo de cada pieza:'));
  var numeroDePiezas = parseInt(prompt('Ingrese el número de piezas:'));
  
  // Calcular forma de pago y valores correspondientes
  var resultado = calcularFormaDePago(costoPieza, numeroDePiezas);
  
  // Mostrar los resultados
  console.log('Cantidad invertida:', resultado.cantidadInvertida);
  console.log('Valor del préstamo del banco:', resultado.valorPrestamoBanco);
  console.log('Valor del crédito al fabricante:', resultado.valorCreditoFabricante);
  console.log('Intereses cobrados por el fabricante:', resultado.interesCobradoPorFabricante);
  