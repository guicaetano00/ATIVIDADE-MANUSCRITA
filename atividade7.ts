/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:Guilherme Caetano
*/
const teclado = require('prompt-sync')();

console.log('------------------------------');
console.log('-       SOMANDO ATÉ 100      -');
console.log('------------------------------');

let soma = 0;

while (soma <= 100) {
    let numero = parseFloat(teclado(' Digite um número: '));
    soma += numero;
}

console.log(`A soma passou de 100, o total é: ${soma}`);
