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
// - Un descriptivo de que hace el programa: El programa hace un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o mas se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%. Datos de entrada: NumeroDeCamisas, Precio.

function camisasDescuento(){
    var precio = parseFloat(prompt("Ingrese el precio de las camisas: "));
    var cantidad = parseInt(prompt("Ingrese la cantiad de camisas a comprar: "));
    if(cantidad >= 3){
        var precioTotal =(precio - (precio * 0.2));
    } else {
        var precioTotal =(precio - (precio * 0.1));
    }
    console.log("El precio final es de: ", precioTotal);
}

camisasDescuento();