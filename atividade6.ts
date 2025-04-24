/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno:Guilherme Caetano
*/
let teclado = require(`prompt-sync`)();

console.log(`-----------------------------`);
console.log(`-  NÚMEROS PARES E ÍMPARES  -`);
console.log(`-----------------------------`);

let contadorPar: number = 0;
let contadorImpar: number = 0;
let textoPar: string = '';
let textoImpar: string = '';

let i = 1;

while (i <= 10) {
    let numero = parseInt(teclado(`Digite o ${i}º número: `));

    if (numero % 2 === 0) {
        contadorPar++;
        textoPar += numero + ' ';
    } else {
        contadorImpar++;
        textoImpar += numero + ' ';
    }  i++;
}

console.log(`Quantidade de pares: ${contadorPar}`);
console.log(`Números pares: ${textoPar}`);
console.log(`Quantidade de ímpares: ${contadorImpar}`);
console.log(`Números ímpares: ${textoImpar}`);