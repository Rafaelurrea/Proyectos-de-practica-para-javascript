// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa que mediante la serie de taylor imprima el resultado de sen(x) siendo x
//   una variable ingresada por el usuario.


var prompt = require('prompt-sync')();//Se invoca el prompt
// Este programa genera la suma de la serie de Taylor para cosh(x)
// Ingrese el valor de x:
function factorial(i) {
    if (i == 0)
        return 1;
    else
        return i * factorial(i - 1);
}

function seno(c, x, t, z) {
    if (c < t) {
        let r = (Math.pow(-1, c) * Math.pow(x, 2 * c + 1)) / factorial(2 * c + 1);
        z = z + r;
        return seno(c + 1, x, t, z);
    } else {
        return z;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Este programa da el resultado de sen(x) a través de una serie de Taylor\nIngrese el número de términos de la serie: ", (t) => {
    rl.question("Ingrese un valor para x: ", (x) => {
        const result = seno(1, x, t, 1.0);
        console.log("El resultado es " + result.toFixed(8));
        rl.close();
    });
});