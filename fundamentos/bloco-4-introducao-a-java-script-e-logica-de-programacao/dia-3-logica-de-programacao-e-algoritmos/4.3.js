// Questão 1:

// let fatorial = 1
// for (let index = 11; index > 0; index -= 1) {
//     fatorial *= index;
// }
// console.log(fatorial);

// Questão 2:

// let word = 'joelho';
// let reverse = "";
// for (let index = 0; index < word.length; index += 1) {
//     reverse += word[word.length - 1 - index];
// }
// console.log(reverse);

// Questão 3:

// let words = ['java', 'javascript', 'python', 'html', 'css'];

// let palavraPequena = words[0];
// let palavraGrande = words[0];

// for (let index = 0; index < words.length; index += 1) {
//     if (words[index].length > palavraGrande.length) {
//         palavraGrande = words[index];
//     }
// }

// for (let index = 0; index < words.length; index += 1) {
//     if (words[index].length < palavraPequena.length) {
//         palavraPequena = words[index];
//     }
// }

// console.log(palavraPequena);
// console.log(palavraGrande);

// Questão 4:

let maiorPrimo = 0;


for (let index = 2; index <= 50; index += 1) {
    let primo = true;
    for (let divisor = 2; divisor < index; divisor += 1) {
        if (index % divisor === 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorPrimo = index;
    }
}
console.log(maiorPrimo);