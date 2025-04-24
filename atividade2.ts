/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno:Guilherme Caetano
*/

let teclado = require(`prompt-sync`)();

console.log (`--------------------------`);
console.log (`-   Ordem decrescente    -`);
console.log (`--------------------------`);


let V1: number = parseInt(teclado(`Digite o primeiro número: `));
let V2: number = parseInt(teclado(`Digite o segundo número: `));
let V3: number = parseInt(teclado(`Digite o terceiro número: `));

let maior: number, meio: number, menor: number;

if (V1 >= V2 && V1 >= V3) {
    maior =  V1;
    if (V2 >= V3) {
       meio = V2;
       menor = V3;
    } else {
       meio = V3;
       menor = V2;
    }
} else if (V2 >= V1 && V2 >= V3) {
       maior = V2;
    if (V1 >= V3) {
       meio = V1;
       menor = V3;
    } else {
       meio = V3;
       menor = V1;
    }
} else {
       maior = V3;
    if (V1 >= V2) {
       meio = V1;
       menor = V2;
    } else {
       meio = V2;
       menor = V1;
    }
}

console.log(`Ordem decrescente: ${maior}, ${meio}, ${menor} `);