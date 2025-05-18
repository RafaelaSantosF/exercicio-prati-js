//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: 
//Isósceles, escaleno ou eqüilátero.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o seu primeiro lado: ", (lado1) => {
  rl.question("Digite o segundo lado: ", (lado2) => {
    rl.question("Digite o terceiro lado: ", (lado3) => {
        let la1 = Number(lado1);
        let la2 = Number(lado2);
        let la3 = Number(lado3);
            
        if (la1 + la2 > la3 && la2 + la3 > la1 && la3 + la1 > la2) {
            console.log("Válido");

            if (la1 == la2 && la2 == la3) {
                console.log("Triângulo Equilátero");
            } else if (
              (la1 == la2 && la1 != la3) || 
              (la2 == la3 && la2 != la1) || 
              (la3 == la1 && la3 != la2)
            ) {
                console.log("Triângulo Isósceles");
            } else {
                console.log("Triângulo Escaleno");
            }

        } else {
            console.log("Não é um triângulo válido");
        }

        rl.close();
    });
  });
});








