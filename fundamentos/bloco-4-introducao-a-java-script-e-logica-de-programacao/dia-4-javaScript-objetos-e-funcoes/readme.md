Dia 4 do bloco 4.
Aprendizado sobre objetos, For/in e For/of e funções.

Exercícios Objetos:

1 - Crie um objeto player contendo as variáveis listadas abaixo.
Copiar
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
Copiar
[2006, 2007, 2008, 2009, 2010, 2018]
4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
Agora veremos uma variação do laço for, que nos garante facilidade ao lidar com objetos.

Exercícios For/in e For/of

1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
Copiar
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
Copiar
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

Exercícios Funções:

Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
Após refatorar o seu código, verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.
