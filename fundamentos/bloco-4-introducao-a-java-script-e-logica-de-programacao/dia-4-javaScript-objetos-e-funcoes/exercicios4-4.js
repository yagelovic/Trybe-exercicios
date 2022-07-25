// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
    nome: 'Marta',
    lastName: 'Silva',
    age: 34,
    bestInTheWorld: ['2006', '2007', '2008', '2009', '2010', '2018'],
    medals: {
        golden: 2,
        silver: 3,
    }
}

console.log("A jogadora " + player['nome'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' anos de idade.' )
console.log("A jogadora " + player['nome'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')