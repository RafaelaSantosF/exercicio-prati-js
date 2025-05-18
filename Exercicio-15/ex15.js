// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.


// Inicializa os dois primeiros números da sequência
let a = 0;
let b = 1;

console.log("Sequência de Fibonacci (10 primeiros números):");
for (let i = 0; i < 10; i++) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
}
