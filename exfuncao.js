/* Exercício 01
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100
Uso da função:


function calcPct(n1, n2) {
    return (`${n1} / ${n2} * ${100}`);
}
 
let n1 = 40;
let n2 = 10;
let pct = calcPct(n1, n2);
console.log(pct);
*/

// Correção abaixo ( Em cima fiz errado

function calcPct(n1, n2) {
    let pct = (n2 / n1) * 100;
    return pct;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

/*Exercício 02
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
Uso da função


let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa está no valor de: R$ ${preco}`);

function precoCasa(a, b) {
    let preco() => {
        if(quartos = 1) {
            return (3.000 * 1);
        } else if (quartos = 2) {
            return (3.000 * 1.2);
        } else (quartos = 3) {
            return (3.000 * 1.5);
        };  
        
    };
};
Solução acima está errada. A correção vem abaixo. 
*/ 

// correção abaixo

function calcularImovel(metragem, quartos) {
    let m2 = 3.000; // Adicionou o valor padrão
    let preco = 0; // Abriu uma variável do resultado com o valor zerado para calcular nas condicionais abaixo.

    switch(quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    } // Montou as condiconais e adicionou a variável de preço para return.

    return preco;

}

let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos); // Fazer uma função com calcularImovel
console.log(`A casa está no valor de R$ ${preco}`);

/* 
Exercício 03

Crie uma função que valide o usuário e senha.
Usuário correto: Pedro
Senha: 123
Uso da função
*/

let usuario = 'Pedro'
let senha = '123';
let validacao = validar(usuario, senha);
if(validacao) {
    console.log('Acesso concedido');
} else {
    console.log('Acesso NEGADO');
};

function validar(usuario, senha){
    if(usuario === 'Pedro' && senha === '123') {
        return true;
    } else {
        return false;
    };
};