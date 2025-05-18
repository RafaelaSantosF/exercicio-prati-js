//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("#MENU#")
console.log("Digite 1 para vê o seu destino")
console.log("Digite 2 para saber sua nota")
console.log("Digite  3 para qual opções que você quer seu atendimento")
console.log("Digite 4 para definir sua senha")

rl.question("Coloque um numero: ", (num) => {
  switch (num) {
    case '1':
        console.log('Seu destino é finalizado')
        break
    case '2':
        console.log('Sua nota é 0 zero')
        break
    case '3':
        console.log('Seu atendimento não foi finalizado')
        break
    case '4':
        console.log('A sua senha está errada')
        break
        
    default:
        break;
  }
  rl.close();
});


