// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.


let numero = parseInt(prompt("Digite um número inteiro:"));

// Verifica se a entrada é um número válido
if (!isNaN(numero)) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i}ª vez: ${numero}`);
  }
} else {
  console.log("Valor inválido. Por favor, digite um número inteiro.");
}
