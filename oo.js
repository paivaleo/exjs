/*1 - Programação orientada a Objetos (POO - OOP)
2 - Programação Funcional (PF - FP) (Funtional Programming Paradigm)

Entre eles, tem a programação procedural (Sequência de código).
*/

// Classes: Action.


class Person {

    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAStep() {
        this.steps++;
    }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.takeAStep();
p1.takeAStep();
console.log(`Passos de ${p1.name}: ${p1.steps}`);
console.log(`Passos de ${p2.name}: ${p2.steps}`);