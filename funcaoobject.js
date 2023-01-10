let person = {
    nome: 'Leonardo',
    sobrenome: 'Paiva',
    idade: 35,
    nomeCompleto: function() {
        return `Nome completo: ${this.nome} ${this.sobrenome}`;
    }

}

console.log(person.nomeCompleto());