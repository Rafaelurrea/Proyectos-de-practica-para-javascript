// - Versión de su código: 1.0
// - Autores. Ing(c): Veronica Naranjo y Rafael Urrea
// - Nombre del lenguaje utilizado: ECMAScript
// - Versión del lenguaje utilizado: 6.0
// - Programa utilizado: Chat GPT
// - Versión del programa: 3.5
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Descripción: Una empresa marca todos sus productos con un código QR como el de la figura,
// que es un arreglo de 30x30 píxeles negros y blancos(string de 900 caracteres). Es posible detectar un producto
// falsificado comprobando una serie de características en el código QR.

let qr = ' '.repeat(900).split('');//crea una matriz de 900 espacios en 

const HacerInterior = (contador, final) => {
  if (contador <= final) {
    qr[contador] = Math.random() < 0.25 ? '█' : ' ';//25% muros 75% muros negros 
    HacerInterior(contador + 1, final);
  }
};

HacerInterior(31, 868);

const HacerMurosHorizontales = (contador, final) => {
  if (contador <= final) {
    qr[contador] = ' ';//asigna los espacios en blanco a la periferia 
    HacerMurosHorizontales(contador + 1, final);
  }
};

HacerMurosHorizontales(0, 29);
HacerMurosHorizontales(870, 899);

const HacerMuroIzq = (contador, final) => {
  if (contador <= final) {
    qr[contador] = ' ';
    HacerMuroIzq(contador + 30, final);
  }
};

HacerMuroIzq(30, 870);

const HacerMuroDer = (contador, final) => {
  if (contador <= final) {
    qr[contador] = ' ';
    HacerMuroDer(contador + 30, final);
  }
};

HacerMuroDer(29, 869);

console.log('         012345678901234567890123456789');
console.log('        ┌------------------------------┐');
for (let i = 0; i < 900; i += 30) {
  const row = qr.slice(i, i + 30).join('');//crea un subconjunto de la matriz de i hasta i + 30 y .join sirve para que no exista un separador 
  console.log(`${Math.floor(i / 30)}\t|${row}|${Math.floor(i / 30)}`);
}
console.log('        └------------------------------┘');
console.log('         012345678901234567890123456789');
console.log('\nQR con cuadrícula:\n');



const ImprimirCaracteres = (contador, final) => {
    let row = '';
    if (contador <= final) {
      row += `${qr[contador]}│`;//creamos el row que son la linea y los cuadros negros o el espacio 
      row += ImprimirCaracteres(contador + 1, final);//concatena row con el valor del siguiente elemento del arreglo
    }
    return row;
  };
  
  const ImprimirQRcuadricula = (contador, final, finalref) => {
    if (contador <= final) {
      const column = Math.floor(contador / 30);
      const row = ImprimirCaracteres(contador, finalref);
      console.log(`${column}\t│${row}${column}`);
      console.log('\t├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤');
      ImprimirQRcuadricula(contador + 30, final, finalref + 30);
    }
  };
  

console.log('\t│0│1│2│3│4│5│6│7│8│9│0│1│2│3│4│5│6│7│8│9│0│1│2│3│4│5│6│7│8│9│');

ImprimirQRcuadricula(0, 899, 29);
console.log('\t│0│1│2│3│4│5│6│7│8│9│0│1│2│3│4│5│6│7│8│9│0│1│2│3│4│5│6│7│8│9│');

const EvaluarCuadrado = (contador, final, cuenta) => {
  if (contador <= final) {
    if (contador === 59 || contador === 89 || contador === 119 || contador === 149 || contador === 179 || contador === 209) {//esta linea evalua la siguiente del 7*7 
      return EvaluarCuadrado(contador + 23, final, cuenta);
    } else {
      cuenta = qr[contador] === '█' ? cuenta + 1 : cuenta;//pregunta que si en ese lugar de la matriz hay un cuadro negro si lo hay suma uno a cuenta
      return EvaluarCuadrado(contador + 1, final, cuenta);
    }
  }
  return cuenta;
};

console.log('\n\nCondicion a: se cumple, existen los espacios en blanco por la periferia');

const cuadradoNegro = EvaluarCuadrado(52, 238, 0);
if (cuadradoNegro >= 25) {
  console.log(`Condición b: Se cumple. El número de pixeles negros es de: ${cuadradoNegro}`);
} else {
  console.log(`Condición b: NO se cumple. El número de pixeles negros es de: ${cuadradoNegro}`);
}

const EvaluarError1 = cuenta => {//le damos un valor de cero y va devolver o 1 o 0
  return qr[182] === '█' ? cuenta : cuenta + 1;
};

const EvaluarError2 = cuenta => {
  return qr[184] === '█' ? cuenta : cuenta + 1;
};

const EvaluarError3 = cuenta => {
  return qr[205] === '█' ? cuenta : cuenta + 1;
};

if (EvaluarError1(0) + EvaluarError2(0) + EvaluarError3(0) === 0) {
  console.log('Condición c: Se cumple. Hubieron 0 errores.');
} else {
  console.log(`Condición c: NO se cumple.\nErrores: ${EvaluarError1(0) + EvaluarError2(0) + EvaluarError3(0)} No es original.`);
}


