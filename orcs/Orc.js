const Creature = require("./Creature")

module.exports = class Orc extends Creature {

    scream(words) {
        console.log(`${this.name} cri et dit "${words.toUpperCase()}"`);
    }
    
    bite(someone) {
        if (!(someone instanceof Creature)) {
            throw `"Oups, ${this.name} ne peut mordre qu'une créature ^^`;
        }
      
        console.log(`${this.name} a mordu ${someone.name} `);
    }
}