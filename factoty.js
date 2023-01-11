class Person {

    age = 0;

    constructor(name) {
        this.name = name;
    }
}

function createPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson('Leonardo', 35);

console.log(`${p1.name} tem ${p1.age} anos.`);