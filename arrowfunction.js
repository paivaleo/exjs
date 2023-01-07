/*function somar(x, y) {
    return x + y;
}

console.log(somar(10, 6));
*/

//Arrow Function abaixo
const somar = (x, y) => x + y;

console.log(somar(1000, 523))

const sobrenome = (sob) => 'Leonardo' + sob;
console.log(sobrenome(' Paiva'));

// Outras formas de criar as funções;

const sobrenome = sob => 'Leonardo ' + sob;

const sobrenome = (sob) => 'Leonardo ' + sob;

const sobrenome = (sob) => {
    return 'Leonardo ' + sob;
}

const sobrenome = (sob) => {
    let nomeCompleto = 'Leonardo ' + sob;
    return nomeCompleto;
}

// Todas essas funções fazem a mesma coisa. Basta escolher a melhor forma. 