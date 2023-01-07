// Função de multipicação
/* 
1 - Abre a função
2 - Adiciona nos parênteses a condição (números, letras, etc)
3 - trás o return da função com a conta a se fazer. 

4 Pode-se fazer também a função dentro de outra função. 

Obs. Sempre que fizer uma função dentro de outra, utilizar arrow function. Exemplo:

function addSquares(a,b) {
    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2,3));
*/


function addSquares(a,b) {
    function square(x) {
        return x * x;
    } 

    let sqrA = square(a); // Abrir variável para guardar o (a)

    let sqrB = square(b); // Abrir variável para guardar o (b)

    return sqrA + sqrB; // Trazer a soma das duas variáveis no retorno.
}

console.log(addSquares(2,3)); // Adicionar valores para (a) e (b), para obter o resultado da função. 