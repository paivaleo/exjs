let manu = {
    nome: 'Manuella',
    idade: 11,
    cidade: 'Embu',
    carro: [
        {
        marca: 'Fiat',
        cor: 'Preto'
    }
]
}
console.log(`${manu.nome} tem ${manu.idade} anos, e mora em ${manu.cidade}.`);

console.log(manu.carro[0].marca);

// Aqui eu fiz um array[carro] dentro do objeto manu e abri um objeto {carro} dentro desse array. O console.log eu acessei a cor e depois a marca. 