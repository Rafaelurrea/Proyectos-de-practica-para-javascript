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
// máximo de cuatro(4) ordenes “IMPRIMIR”)

                    //    Z                 Z
                    //     Z               Z
                    //      Z             Z
                    //       Z           Z
                    //        Z         Z
                    //         Z       Z
                    //          Z     Z
                    //           Z   Z
                    //            Z Z
                    //             Z
                    
const espacios = (cant, cont) => {
  // Ciclo while: repetir hasta que cont sea menor que cant
  while (cont < cant) {
    process.stdout.write("  "); // Imprimir dos espacios en la consola
    cont++;
  }
};

const figura = (esp1, esp2) => {
  // Ciclo while: repetir hasta que esp1 sea mayor que 0
  while (esp1 > 0) {
    espacios(esp2, 0); // Llamar a la función espacios para imprimir los espacios iniciales
    process.stdout.write("Z"); // Imprimir la letra "Z" en la consola
    espacios(esp1, 0);
    process.stdout.write("Z\n");
    esp1 -= 2;
    esp2 += 1;
  }

  // Verificar condición esp1 === -1
  if (esp1 === -1) {
    espacios(esp2, 0);
    process.stdout.write("Z");
  }
};

const main = () => {
  const esp1 = 17;
  const esp2 = 0;
  figura(esp1, esp2); // Iniciar la generación de la figura
};

main();
