// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.


// Solicita ao usuário a quantidade de maçãs compradas
let quantidade = parseInt(prompt("Digite o número de maçãs compradas:"));

let preco;

if (quantidade < 12) {
    preco = 0.30;
} else {
    preco = 0.25;
}

let total = quantidade * preco;

alert("Valor total da compra: R$ " + total.toFixed(2));
