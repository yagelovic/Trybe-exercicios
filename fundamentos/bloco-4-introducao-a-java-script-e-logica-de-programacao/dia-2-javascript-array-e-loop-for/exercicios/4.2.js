// Questão 1:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index += 1) {

//     console.log(numbers[index]);
// }

//----------------------------------------------------------

// Questão 2:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
// resultado += numbers[index];
// }
// console.log(resultado);

// Questão 3 e 4:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;
// let divisor = numbers.length;


// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }
// let media = resultado / divisor;
// console.log(media);
// if (media > 20) {
// console.log("Valor maior que 20");
// } else {
//     console.log("Valor menor ou igual a 20");
// }

// Questão 5:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = 0;
// for (let index = 0; index < numbers.length-1; index += 1) {
// if (numbers[index] > maior) {
//     maior = numbers[index];
// }
// }
// console.log(maior);

// Questão 6:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let contador = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 != 0) {
//         contador += 1;
//     }
// }
// if (contador === 0) {
//     console.log("Nenhum valor ímpar encontrado!");
// }   else {
//     console.log(contador, "números ímpar");
// }

// Questão 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menor = 100000;
// for (let index = 0; index < numbers.length - 1; index += 1) {
//     if (numbers[index] < menor) {
//         menor = numbers[index];
//     }
// }
// console.log(menor);

// Questão 8:

let contador1 = [];
for (let index = 1; index < 26; index += 1) {
    contador1.push(index);
}
console.log(contador1[24]);