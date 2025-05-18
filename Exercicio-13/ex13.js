// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.


let soma = 0;
let quantidade = 0;
let numero;

do {
  numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar):"));

  if (numero !== 0) {
    soma += numero;
    quantidade++;
  }

} while (numero !== 0);

if (quantidade > 0) {
  let media = soma / quantidade;
  alert("A média aritmética dos números é: " + media.toFixed(2));
} else {
  alert("Nenhum número foi inserido.");
}
