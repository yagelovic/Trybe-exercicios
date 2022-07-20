// Questão 1:
// Faça cinco programas, um para cada operação aritmética básica.
//  Seu programa deve ter duas constantes, a e b, definidas no começo 
//  com os valores que serão operados. Faça programas para:
// - Adição (a + b)
// - Subtração (a - b)
// - Multiplicação (a * b)
// - Divisão (a / b)
// - Módulo (a % b)
// ------------------------Resolução----------------------------

const a = 10;
const b = 15;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Questão 2:
// Faça um programa que retorne o maior de dois números. 
// Defina no começo do programa duas constantes com os valores que 
// serão comparados.
// ------------------------Resolução----------------------------

const c = 5;
const d = 2;

if (c < d) {
    console.log(d);
} else {
    console.log(c);
}

// Questão 3:
// Faça um programa que retorne o maior de três números.
// Defina no começo do programa três constantes com os
// valores que serão comparados.
// ------------------------Resolução----------------------------

const e = 1;
const f = 90;
const g = 5;

if (e > f && e > g) {
    console.log(e);
} else if (f > e && f > g) {
    console.log(f);
} else {
    console.log(g);
}

// Questão 4:
// Faça um programa que, dado um valor definido numa constante,
// retorne "positive" se esse valor for positivo, "negative" 
// se for negativo e "zero" caso contrário.
// ------------------------Resolução----------------------------

const h = 0;

if (h < 0) {
    console.log("negative");
} else if (h > 0) {
    console.log("positive");
} else {
    console.log("zero");
}

// Questão 5:
// 🚀 Faça um programa que defina três constantes 
// com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um 
// triângulo e false, caso contrário. Se algum ângulo for 
// inválido o programa deve retornar uma mensagem de erro.
// ------------------------Resolução----------------------------

const i = 90;
const j = -45;
const k = 45;

if (i + j + k === 180) {
    console.log("true");
} else if (i || j || k <= 0) {
    console.log("Só trabalhamos com numeros positivos!!!")
} else {
    console.log("false");
}

// Questão 6:
// Escreva um programa que receba o nome de uma peça de xadrez 
// e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se 
// receber o nome de uma peça com letras maiúsculas quanto 
// com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma 
// string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar 
// uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais) 

const PEAO = "Somente para frente.";
const TORRE = "Movimentos horizontais e verticais.";
const CAVALO = "Movimentos em L.";
const BISPO = "Movimentos no sentido diagonal.";
const RAINHA = "Todos os lados.";
const REI = "Todos os lados(somente uma casa).";