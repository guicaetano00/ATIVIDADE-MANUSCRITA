/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno:Gulherme Caetano
*/
let teclado = require(`prompt-sync`)();

console.log(`-----------------------------`);
console.log(`-    CÁLCULOS DA MÉDIA      -`);
console.log(`-----------------------------`);

let soma: number = 0;
let contador: number = 0;
let continuação: string = `s`;

while (continuação == `s` || continuação == `S`) {
    let numero: number = parseFloat(teclado(`Digite um numero: `));
    soma += numero;
    contador++;
    continuação = teclado(`Você quer digitar outro numero? (s/n): `);
} 

if (contador > 0) {
   let media: number = soma / contador;
   console.log(`A média dos numeros que foram digitados são: ${media} `);
} else {
   console.log(`Nenhum numero foi digitado. `);
}