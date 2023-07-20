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
                            //      A
                            //     AA
                            //    AAA
                            //   AAAA
                            //  AAAAA
                            // AAAAAA <--- Debe ser columna 40 y fila 6
                            //  AAAAA
                            //   AAAA
                            //    AAA
                            //     AA
                            //      A

const espacios = (cant, cont) =>{
  // Ciclo while: repetir hasta que cont sea menor que cant
  while (cont < cant) {
    process.stdout.write(" "); // Imprimir un espacio en la consola
    cont++;
  }
}

const figura = (cant, cont, esp) =>{
  // Ciclo while: repetir hasta que cont sea menor o igual que cant
  while (cont <= cant) {
    if (cont === 0) {
      espacios(esp, 0);
    }
    process.stdout.write("A");
    cont++;
  }
}

const numimp = (max, num, esp) =>{
  // Ciclo while: repetir hasta que num sea menor que max
  while (num < max) {
    figura(num, 0, esp);
    console.log("");
    num++;
    esp--;
  }
  
  num -= 2;
  esp += 2;
  
  // Ciclo while: repetir hasta que num sea mayor o igual que 0
  while (num >= 0) {
    figura(num, 0, esp);
    console.log("");
    num -= 2;
    esp += 2;
  }
}

const main = () =>{
  var num = 0;
  var max = 6;
  var esp = 39;
  numimp(max, num, esp);
}

main();
                        