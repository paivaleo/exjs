
class Person {

    _age = 35;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAStep() {
        this.steps++;
    }

    get age() {
        return this._age;
    } // Ciação de variável para puxar no console.

    set age(x) {
        if (typeof x == 'number') {
            this._age = x;
        } else {
            alert ('A idade só pode conter números');
        }
    }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.age = 37;

console.log(`${p1.name} tem ${p1.age} anos.`);