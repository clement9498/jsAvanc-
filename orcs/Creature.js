module.exports = class Creature {

    constructor(name, age, strength) {
        this.name = name;
        this.age = age;
        this.strength = strength;
    }
    
    saySomething(words) {
        console.log(`${this.name} parle et dit "${words}"`);
    }
    
    identity() {
        if(this.age !== null) {
            console.log(`${this.name} a ${this.age}ans et a ${this.strength}points de force`);
        } else {
            console.log(`${this.name} a ${this.strength}points de force`);
        }
    }
}