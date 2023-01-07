// O Array é uma lista, praticamente.

let colors = [
    'blue','green','red'
];
console.log(colors);

/*
Array começa sempre a contagem pelo zero[0]. Nesse caso, se quisermos pegar o primeiro item da lista, seria console.log(colors[0]); 
*/

let idades = [10, 20, 35, 'Leonardo', true];
console.log(idades);
// Podemos armazenar dados misturados, exemplo: Number, Strings, Boolean...

let lista = [
    'blabla', [
        'nb', 'yy', 'ht'
    ]
];
console.log(lista[0]); // Acessei o primeiro item(0) do array lista.

console.log(lista[1][0]); // Acessei o array lista, entrei no segundo item(1), que também é um array e depois acessei o primeiro item(0). 

let array2 = lista[1];
console.log(array2[1]); // Armazenei o primeiro array em uma variável e acessei o segundo item(1) desse array.

/*
Funções do array:

length - Conta quantos itens tem no array
push - Adiciona um item no array
shift - Exclui o primeiro item do array
pop - Exclui o último item do array