/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno:Guilherme Caetano
*/
const teclado = require('prompt-sync')();

let somaMasculino: number = 0;
let somaFeminino: number = 0;
let contadorMasculino: number = 0;
let contadorFeminino: number = 0;

let contador: number = 1;

while (contador <= 50) {
    console.log(`Pessoa ${contador}`);
    let idade: number = parseInt(teclado(` Digite a idade: `));
    let sexo: string = teclado(`Digite o sexo (M para masculino, F para feminino): `).toUpperCase();

    if (sexo === 'M') {
        somaMasculino += idade;
        contadorMasculino++;
        contador++;
    } else if (sexo === 'F') {
        somaFeminino += idade;
        contadorFeminino++;
        contador++;
    } else {
        console.log(`Sexo inválido! Digite 'M' para masculino ou 'F' para feminino.`);
    }

    console.log(`--------------------------`);
}

let mediaMasculino: number = contadorMasculino > 0 ? somaMasculino / contadorMasculino : 0;
let mediaFeminino: number = contadorFeminino > 0 ? somaFeminino / contadorFeminino : 0;

console.log(`Média de idade dos homens: ${mediaMasculino}`);
console.log(`Média de idade das mulheres: ${mediaFeminino}`);