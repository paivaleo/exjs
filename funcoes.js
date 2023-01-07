// O que é uma função ?
function motor() {
    console.log('Motor ligado');
    console.log('40 km/h');
};

// Variáveis de funções só existem dentro das funções 
function marcha(m1, m2) {
    let resultado = m1 + m2;
    console.log('Marcha: ' + resultado);
}
motor()
marcha(1,2);

function carro(marca, modelo) {
    console.log(`${marca} ${modelo}`);
};

carro("Chevrolet", "Cruze");
carro("Fiat", "Toro");


//Retorno de uma função
function nomeCompleto (nome, sobrenome) {
    return`${nome} ${sobrenome}`;
};

let completo = nomeCompleto("Leonardo", "Paiva");
console.log("Completo: " + completo);

// Função com retorno condicional. 
function maiorDeIdade(idade) {
    if(idade >= 18) {
        return('Você é maior de idade!');
    } else {
        return('Você é MENOR de idade!');
    };
};

let verificacao = maiorDeIdade(18);
console.log(verificacao);
