//Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.


let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 0 && idade <= 12) {
    alert("Você é uma criança.");
}else if (idade >= 13 && idade <= 17) {
    alert("Você é um adolescente.");
}else if (idade >= 18 && idade <= 59) {
    alert("Você é um adulto.");
}else if (idade >= 60) {
    alert("Você é um idoso.");
}else {
    alert("Idade inválidad.");
}

console.log()










