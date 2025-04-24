/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno:Guilherme Caetano
*/

let teclado = require('prompt-sync')();

let numeroUm: number = parseInt(teclado(' Digite o primeiro número: '));
let numeroDois: number = parseInt(teclado(' Digite o segundo número: '));

let atual: number = numeroUm;

if (numeroUm > numeroDois) {
    atual = numeroDois;
    numeroDois = numeroUm;
}

console.log('Números ímpares no intervalo: ');
while (atual <= numeroDois) {
    if (atual % 2 !== 0) {
        console.log(atual);
    }
    atual++;
}