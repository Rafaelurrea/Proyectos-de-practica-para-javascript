// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: 20.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
// máximo de cuatro(4) ordenes “IMPRIMIR” ).
                            //      A
                            //     AA
                            //    AAA
                            //   AAAA
                            //  AAAAA
                            // AAAAAA

                            
// Función para imprimir un carácter determinado un número de veces
const letras = (num, caracter) =>{
    while (num !== 0) { // Mientras num no sea igual a 0
        process.stdout.write(caracter); // Imprimir el carácter en la consola
        num--; // Decrementar el valor de num en 1
    }
}

// Función principal que ejecuta la impresión del patrón
const main = (i) =>{
    while (i !== 25) { // Mientras i no sea igual a 25
        letras(80 - i, " "); // Imprimir una cantidad de espacios según el cálculo (80 - i)
        letras(i, "A"); // Imprimir una cantidad de letras 'A' según el valor de i
        process.stdout.write("\n"); // Imprimir un salto de línea
        i++; // Incrementar el valor de i en 1
    }
}

main(0); // Llamar a la función main con el valor inicial de i como 0

    