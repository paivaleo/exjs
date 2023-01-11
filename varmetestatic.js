class Person {

    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Oi, eu sou ${this.name} e tenho ${this.hands} mãos.`) // Chamar dessa forma, usando o this, hands vai ficar indefinido, pois o this só trata do objeto em questão. Então o modo correto para acessar o hands será ${Person.hands}.



        console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos.`); // Forma certa de acessar ou alterar. 


        // O método estático é independente de qualquer objeto e tudo que está dentro dessa função também.
    }
}

let p1 = new Person("Leonardo");
p1.sayHi();