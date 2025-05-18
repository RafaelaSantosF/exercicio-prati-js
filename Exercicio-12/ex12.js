// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.


// Solicita ao usuário que digite um número
let numero = parseInt(prompt("Digite um número para ver a tabuada (de 1 a 10):"));

console.log(`Tabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

