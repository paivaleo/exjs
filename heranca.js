class Person {

    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} diz Oi.`);
    }
}

class Student extends Person {
    
    constructor(name, id) {
        super(name); // super está herdando o name de Person
        this.id = id; // this.id recebe uma variável de nome id.
    }

    sayHello() {
        super.sayHi(); // sayHello está herdando o sayHi de Person.
    }
}

let p1 = new Student("Leonardo", 01); // Novo objeto.
p1.age = 35;

console.log(`${p1.name} tem ${p1.age} anos e matícula ${p1.id}`);
p1.sayHello();