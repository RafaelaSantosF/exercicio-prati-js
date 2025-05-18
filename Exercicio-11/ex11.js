// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.


let soma = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));
  if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
    i--; // repete a iteração
  } else {
    soma += numero;
  }
}

alert(`A soma total dos números é: ${soma}`);
