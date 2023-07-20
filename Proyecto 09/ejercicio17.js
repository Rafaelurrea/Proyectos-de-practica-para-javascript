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
// - Un descriptivo de que hace el programa: El programa calcula el índice de masa corporal de una persona, donde: (IMC = peso [kg] /altura2 [m]) e indique el estado en el que se encuentra esa persona en función del valor de IMC: Nota 1: se recomienda el empleo de sentencia if) Nota 2: Los operandos (peso y altura) deben ser introducidos por teclado por el usuario.

function calcularIMC(peso, altura) {
    var alturaEnMetros = altura / 100; // Convertir altura de centímetros a metros
    var imc = peso / (alturaEnMetros * alturaEnMetros);
    return imc;
  }
  
  // Ejemplo de uso
  var peso = parseFloat(prompt('Ingrese su peso en kg:'));
  var altura = parseFloat(prompt('Ingrese su altura en cm:'));
  
  var imc = calcularIMC(peso, altura);
  
  console.log('Su índice de masa corporal (IMC) es:', imc);
  

function estadoIMC(){
    var IMC = parseFloat(prompt("Ingrese su IMC: "))
        if(IMC < 16){
            console.log("Criterio de ingreso en hospital")
        } else if(IMC  > 16 && IMC < 17){
            console.log("infrapeso")
        } else if(IMC  > 17 && IMC < 18){
            console.log("bajo peso")
        } else if(IMC  > 18 && IMC < 25){
            console.log("peso normal (saludable)")
        } else if(IMC  > 25 && IMC < 30){
            console.log("sobrepeso (obesidad grado 1)")
        } else if(IMC  > 30 && IMC < 35){
            console.log("sobrepeso crónico(obesidad grado 2)")
        } else if(IMC  > 35 && IMC < 40){
            console.log("obesidad premórbida (obesidad grado 3)")
        } else if(IMC > 40){
            console.log("obesiada morbida (obesidad grado 4)")
        }
}

estadoIMC();

