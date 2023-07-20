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
// - Un descriptivo de que hace el programa: El programa resuelve: Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, ofreciendo un descuento del 15% por la compra de más de 3 docenas y 10% en caso contrario. Además por la compra de más de 3 docenas se obsequia una unidad del producto por cada docena en exceso sobre 3. Diseñe un algoritmo que determine el monto de la compra, el monto del descuento, el monto a pagar y el número de unidades de obsequio por la compra de cierta cantidad de docenas del producto.

function calcularCompra(docenas) {
  const precioPorDocena = 10; // Precio por docena del producto
  let montoCompra = docenas * precioPorDocena * 12; // Monto total de la compra
  let montoDescuento = 0; // Monto del descuento
  let unidadesObsequio = 0; // Número de unidades de obsequio

  if (docenas > 3) {
    montoDescuento = montoCompra * 0.15; // Descuento del 15% por la compra de más de 3 docenas
    unidadesObsequio = (docenas - 3) * 12; // Una unidad de obsequio por cada docena en exceso sobre 3
  } else {
    montoDescuento = montoCompra * 0.1; // Descuento del 10% en caso contrario
  }

  let montoPagar = montoCompra - montoDescuento; // Monto a pagar después del descuento

  console.log("Monto de la compra: $" + montoCompra);
  console.log("Monto del descuento: $" + montoDescuento);
  console.log("Monto a pagar: $" + montoPagar);
  console.log("Número de unidades de obsequio: " + unidadesObsequio);
}

// Ejemplo de uso
calcularCompra(4); // Calcula la compra para 4 docenas
