//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)  utilizando if-else.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("Digite seu peso: ", (pesado) => {
    rl.question("Digite sua altura: ",  (altura) => {
    
    let imc = parseFloat(pesado) / parseFloat(altura**2) 

    if (imc < 18.5){
        console.log("Baixo do peso")
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log("Peso normal")
    }else if(imc >= 25 && imc <= 29.9){
        console.log("Execesso de peso")
    }else if (imc > 30){
        console.log("obsidade")
    }
        
  rl.close();
});
});



// rl.question("Digite seu nome: ", (nome) => {
  
//   rl.close();
// });








