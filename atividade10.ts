/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno:Guilherme Caetano
*/
let teclado = require('prompt-sync')();

let somaAlturas: number = 0;
let contadorMaiores: number = 0;
let contador: number = 1;

while (contador <= 10) {
    console.log(`Pessoa ${contador}: `);
    let idade: number = parseInt(teclado('Digite a idade: '));
    let altura: number = parseFloat(teclado('Digite a altura em metros: '));

    if (idade >= 18) {
        somaAlturas += altura;
        contadorMaiores++;
    }

    contador++;
}

if (contadorMaiores > 0) {
    let media: number = somaAlturas / contadorMaiores;
    console.log(`A média de altura das pessoas maiores de idade é: ${media} metros`);
} else {
    console.log(`Nenhuma pessoa maior de idade foi cadastrada.`);
}