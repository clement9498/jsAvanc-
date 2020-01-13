const Orc = require("./Orc")
const Creature = require("./Creature")

module.exports = class ChiefOrc extends Orc {

    constructor(name, age, strength) {
        super(name, age, strength+2);
        this.isChief = true;
    }
      
    giveOrder(someone, message) {
        if (!(someone instanceof Creature)) {
            throw `"Oups, ${this.name} ne peut donner des ordres qu'a une créature ^^`;
        }

        console.log(`${this.name} dit a ${someone.name} de faire "${message}"`);
      }
}