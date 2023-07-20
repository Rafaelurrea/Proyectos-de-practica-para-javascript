// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa que mediante la serie de taylor imprima el resultado de cosh(x) siendo x
//   una variable ingresada por el usuario.

var prompt = require('prompt-sync')();//Se invoca el prompt
var prompt = require('prompt-sync')();// Se importa la libreria prompt-sync


const readline = require('readline');// Se importa la libreria readline

const rl = readline.createInterface({// Se crea la constante rl en la función readline               
  input: process.stdin,// Se crea la entrada de datos
  output: process.stdout// Se crea la salida de datos
});

console.log("Este programa genera la suma de la serie de Taylor para cos(x)");// Se imprime en consola el enunciado del programa

rl.question("Ingrese el valor de x en radianes: ", function (x) {// Se crea la pregunta en consola              
  rl.question("Ingrese el número de términos: ", function (final) {// Se crea la pregunta en consola       
    console.log("La suma de la serie Taylor para cos(x) es:");// Se imprime en consola el enunciado del programa

    function factorial(number) {// Se crea la función factorial
      if (number === 0) {// Se crea la condición si number es igual a 0
        return 1;// Se retorna 1                    
      } else {// Se crea la condición si no
        return number * factorial(number - 1);// Se retorna number por la función factorial de number menos 1
      }
    }

    function cosx(numero, final, acumula) {// Se crea la función cosx       
      if (numero <= final) {// Se crea la condición si numero es menor o igual a final
        const termino = (Math.pow(x, numero) / factorial(numero)) * Math.pow(-1, numero / 2);
        acumula += termino;// Se crea la constante termino en la variable x elevado a numero dividido por la función factorial de numero por la función Math.pow de -1 elevado a numero dividido 2
        cosx(numero + 2, final, acumula);// Se crea la constante acumula en la variable acumula más la función cosx de numero más 2, final y acumula
      } else {// Se crea la condición si no
        console.log(acumula);// Se imprime en consola la constante acumula
      }
    }

    cosx(0, parseInt(final) * 2 - 2, 1);// Se crea la función cosx de 0, final por 2 menos 2 y 1

    rl.close();// Se cierra la pregunta                     
  });   
});