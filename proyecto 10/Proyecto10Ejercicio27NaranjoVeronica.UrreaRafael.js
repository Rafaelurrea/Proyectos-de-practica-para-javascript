// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción:                                             
//                         Z   <--- Debe estar en la columna 10
            //            Z Z
            //           Z   Z
            //          Z     Z
            //         Z       Z
            //        Z         Z
            //       Z           Z
            //      Z             Z
            //     Z               Z
            //    Z                 Z

function espacios(cant, cont) {
    if (cont < cant) {
        process.stdout.write("  ");
        cont++;
        espacios(cant, cont);
    }
}

function figura(esp1, esp2) {
    if (esp1 === 0) {
        espacios(esp2, 0);
        console.log("Z");
        figura(esp1 + 2, esp2 - 1);
    } else if (esp1 <= 17) {
        espacios(esp2, 0);
        process.stdout.write("Z");
        espacios(esp1, 0);
        console.log("Z");
        figura(esp1 + 2, esp2 - 1);
    }
}

function main() {
    var esp1 = 0;
    var esp2 = 9;
    figura(esp1, esp2);
}

main();
                                  