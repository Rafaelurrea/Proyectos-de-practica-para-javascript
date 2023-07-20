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

const espacios = (cant, cont) =>{
  // Ciclo while: repetir hasta que cont sea menor que cant
  while (cont < cant) {
    process.stdout.write("  "); // Imprimir dos espacios en la consola
    cont++;
  }
}

const figura = (esp1, esp2) =>{
  // Ciclo while: repetir hasta que esp1 sea igual a 0 o menor que 17
  while (esp1 === 0 || esp1 <= 17) {
    // Verificar condición esp1 === 0
    if (esp1 === 0) {
      espacios(esp2, 0);
      console.log("Z");
      esp1 += 2;
      esp2 -= 1;
    } else {
      espacios(esp2, 0);
      process.stdout.write("Z");
      espacios(esp1, 0);
      console.log("Z");
      esp1 += 2;
      esp2 -= 1;
    }
  }
}

const main = () =>{
  var esp1 = 0;
  var esp2 = 9;
  figura(esp1, esp2);
}

main();
