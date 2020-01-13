const Orc = require("./Orc")
const Creature = require("./Creature")

module.exports = class Urukhai extends Orc {

    constructor(name, strength) {
        super(name, null, strength+10);
    }

    kill(someone) {
        if (!(someone instanceof Creature)) {
            throw `"Oups, ${this.name} ne peut tuer qu'une créature ^^`;
        }
      
        console.log(`${this.name} a tué ${someone.name} `);
    }
}