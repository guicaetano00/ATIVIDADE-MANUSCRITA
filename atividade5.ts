/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Guilherme Caetano
*/

let teclado = require(`prompt-sync`)();

console.log(`-----------------------------`);
console.log(`-     CONJUNTO DE NOTAS     -`);
console.log(`-----------------------------`);

let maiorNota: number = 0;
let menorNota: number = 10;
let somaNotas: number = 0;

let i: number = 1;

while (i <= 5) {
    let nota: number = parseFloat(teclado(`Digite a ${i}ª nota: `));

    if (nota > maiorNota) {
        maiorNota = nota;
    }

    if (nota < menorNota) {
        menorNota = nota;
    }
    somaNotas += nota; i++; 
}
let media: number = somaNotas / 5;

console.log(`Maior nota: ${maiorNota}`);
console.log(`Menor nota: ${menorNota}`);
console.log(`Média das notas: ${media}`);