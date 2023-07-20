// -Fecha de publicación: 20/06/2003
// -Hora: 9:55 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa resuleve: En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $100,000 ¿ Cual será la cantidad que pagara una persona por su compra? . Datos de entrada: Valor de la compra.

function descuentoAlmacen(){
    var compra = parseFloat(prompt("Ingrese el valor de la compra $:"));
    if (compra > 100000){
        var descuento = (compra - (compra * 0.2 ));
        console.log("El valor a pagar con con descuento es de: ", descuento);
    } else {
        console.log("la compra no supera $100.000");
    }   
}

descuentoAlmacen();