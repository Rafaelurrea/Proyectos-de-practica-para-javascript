// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
// máximo de cuatro(4) ordenes “IMPRIMIR” )
                          //  PPPPPPPPPPPPP
                          //   NNNNNNNNNNN
                          //    LLLLLLLLL
                          //     JJJJJJJ
                          //      HHHHH
                          //       FFF
                          //        D

// Función que imprime el carácter especificado un número determinado de veces
const letras = (num, caracter) =>{
    while (num !== 0) { // Mientras num no sea igual a 0
        process.stdout.write(caracter); // Imprimir el carácter en la consola
        num--; // Decrementar el valor de num en 1
    }
}

// Función que retorna el carácter correspondiente al número especificado
const caracter = (num) =>{
    switch (num) { // Evaluar el valor de num
        case 1:
            return "P";
        case 2:
            return "N";
        case 3:
            return "L";
        case 4:
            return "J";
        case 5:
            return "H";
        case 6:
            return "F";
        case 7:
            return "D";
        default:
            return "*";
    }
}

// Función principal que ejecuta la impresión del triángulo de letras
function main(num, espacios) {
    while (num > 0) { // Mientras num sea mayor que 0
        letras(espacios, " "); // Imprimir una cantidad de espacios según el valor de espacios
        letras(num, caracter(espacios + 1)); // Imprimir una cantidad de letras según el valor de num y el carácter retornado por la función caracter(espacios + 1)
        process.stdout.write("\n"); // Imprimir un salto de línea en la consola
        num -= 2; // Decrementar el valor de num en 2
        espacios++; // Incrementar el valor de espacios en 1
    }
}

main(13, 0); // Llamar a la función main con los valores iniciales de num y espacios

                                               