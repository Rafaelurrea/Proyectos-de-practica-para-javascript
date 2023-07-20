// -Fecha de publicación: 20/06/2003
// -Hora: 9:49 pm
// - Versión de su código: 1.0
// -Autores. Ing(c): Veronica Naranjo Ing(c): Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Un descriptivo de que hace el programa: El programa hace que leyendo por teclado la antigüedad en años, que calcule el sueldo mensual que le corresponde al trabajador de una empresa
// que cobra 40.000 euros anuales, el programa debe realizar los cálculos en función de los siguientes criterios:
// a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
// b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
// c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
// d. Si lleva menos de 3 años se le aplica un aumento del 3%.

function sueldoMensual(){
    const sueldoBaseAnual = 40000;
    var sueldoMensual = 0; 
    var aumento = 0;
    var antiguedad = prompt("Este programa leyendo por teclado la antigüedad en años, calcula el sueldo mensual que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales, Ingrese la antiguedad: ");
    if (antiguedad > 10) {
        aumento = sueldoBaseAnual * 0.1;
      } else if (antiguedad > 5) {
        aumento = sueldoBaseAnual * 0.07;
      } else if (antiguedad > 3) {
        aumento = sueldoBaseAnual * 0.05;
      } else {
        aumento = sueldoBaseAnual * 0.03;
      }

    sueldoMensual = (sueldoBaseAnual + aumento) / 12;
    sueldoMensual = sueldoMensual.toFixed(2);
    console.log(`El sueldo mensual correspondiente es: ${sueldoMensual} euros.`);
}
sueldoMensual();