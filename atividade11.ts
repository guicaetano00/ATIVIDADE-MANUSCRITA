/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno:Guilherme Caetano
*/

let teclado = require(`prompt-sync`)();

console.log('-------------------------');
console.log('-  BEM-VINDO A AUTOCAR   -');
console.log('-------------------------');

console.log(`Modelos disponíveis:`);
console.log(`1 - FERRARI (R$ 650000)`);
console.log(`2 - CIVIC (R$ 80000)`);
console.log(`3 - CHIRON (R$ 1540000)`);
console.log(`4 - URUS (R$ 2000000)`);

const modeloEscolhido: number = parseInt(teclado('Digite o número do modelo desejado: '));

let valorBase: number = 0;
let nomeModelo: string = '';

if (modeloEscolhido === 1) {
    valorBase = 650000;
    nomeModelo = 'Ferrari';
} else if (modeloEscolhido === 2) {
    valorBase = 80000;
    nomeModelo = 'Civic';
} else if (modeloEscolhido === 3) {
    valorBase = 1540000;
    nomeModelo = 'Chiron';
} else if (modeloEscolhido === 4) {
    valorBase = 2000000;
    nomeModelo = 'Urus';
} else {
    console.log('Modelo inválido.');
}

console.log('Formas de pagamento:');
console.log('1 - À vista (15% de desconto)');
console.log('2 - Parcelado (13% de acréscimo)');

const formaPagamento: number = parseInt(teclado('Escolha a forma de pagamento (1 ou 2): '));
let valorFinal: number = valorBase;

if (formaPagamento === 1) {
    valorFinal = valorBase * 0.85;
} else if (formaPagamento === 2) {
    valorFinal = valorBase * 1.13;
} else {
    console.log('Forma de pagamento inválida.');
}

console.log(`Resumo da compra:`);
console.log(`Modelo escolhido: ${nomeModelo}`);
console.log(`Valor final da compra: R$ ${valorFinal}`);
