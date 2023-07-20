// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: 22.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
// máximo de cuatro(4) ordenes “IMPRIMIR” )
                                //  PPPPPPPPPPPPP
                                //   PPPPPPPPPPP
                                //    PPPPPPPPP
                                //     PPPPPPP
                                //      PPPPP
                                //       PPP
                                //        P   <--- Debe estar en la columna 40

// Función que imprime el carácter especificado un número determinado de veces
const letras = (num, caracter) =>{
    while (num !== 0) { // Mientras num no sea igual a 0
        process.stdout.write(caracter); // Imprimir el carácter en la consola
        num--; // Decrementar el valor de num en 1
    }
}

// Función principal que ejecuta la impresión del triángulo de letras
const main = (num, espacios) =>{
    while (num > 0) { // Mientras num sea mayor que 0
        letras(espacios + 32, " "); // Imprimir una cantidad de espacios según el valor de espacios + 32
        letras(num, "P"); // Imprimir una cantidad de letras según el valor de num y el carácter "P"
        process.stdout.write("\n"); // Imprimir un salto de línea en la consola
        num -= 2; // Decrementar el valor de num en 2Proyecto13Ejercicio14NaranjoVeronica.UrreaRafael
        espacios++; // Incrementar el valor de espacios en 1
    }
}

main(13, 0); // Llamar a la función main con los valores iniciales de num y espacios

                                  