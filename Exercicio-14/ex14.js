// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.


// Solicita o número ao usuário
const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

// Verifica se o número é válido (inteiro não negativo)
if (isNaN(numero) || numero < 0) {
  console.log("Por favor, digite um número inteiro não negativo.");
} else {
  let fatorial = 1;
  
  // Calcula o fatorial usando loop for
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  
  console.log(`O fatorial de ${numero} é ${fatorial}.`);
}
