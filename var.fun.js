let count = 0; // Variável de escopo global.

function add() {
    let count = 0; //Variável de escopo local (Privada)
    count++;
}

add();
add();

console.log(count);

// Duas variáveis com o mesmo nome, a prefêrencia é a de dentro da função (escopo local).