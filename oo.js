/*1 - Programação orientada a Objetos (POO - OOP)
2 - Programação Funcional (PF - FP) (Funtional Programming Paradigm)

Entre eles, tem a programação procedural (Sequência de código).
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person("João", 20);
let p2 = new Person("Maria", 37);
let p3 = new Person("Pedro", 55);

console.log(p1.age);
console.log(p2.age);
console.log(p3.age);