
/***************************
 * Classe "Creature"
****************************/

export class Creature {
  constructor(name, age, strength) {
    this.name = name;
    this.age = age;
    this.strength = strength;
  }
  
  saySomething(words) {
    console.info(this.name + " dit : " + words);
  }
  
  identity() {
    console.info(`
      NOM : ${this.name},
      AGE : ${this.age},
      STRENGTH : ${this.strength}`);
  }
}


/***************************
 * Classe "Orque"
****************************/

export class Orc extends Creature {
  constructor(name, age, strength) {
    super(name, age, strength);
  }

  scream(words) {
    console.info(this.name + ' screams : ' + words.toUpperCase() + ' !!!');
  }
  
  bite(someone) {
    if (!(someone instanceof Creature)) {
      throw new Error("`someone` is not a Creature");
    }
  
    console.info(this.name + ' bites ' + someone.name + ' to the neck !');
  }
}

/***************************
 * Classe "Uruk-hai"
****************************/

export class Urukhai extends Orc {
  constructor(name, strength) {
    super(name, null, strength + 10);
  }

  kill(someone) {
    if (!(someone instanceof Creature)) {
      throw new Error("`someone` is not a Creature");
    }
  
    console.error(this.name + ' kills ' + someone.name + ' savagely !!!!!');
  }
}

/***************************
 * Classe "Chief Orc"
****************************/

export class ChiefOrc extends Orc {
  constructor(name, age, strength) {
    super(name, age, strength + 2);
    this.isChief = true;
  }
  
  giveOrder(someone, message) {
    if (!(someone instanceof Creature)) {
      throw new Error("`someone` is not a Creature");
    }
  
    this.scream("Hey you, " + someone.name + "! " + message);
  }
  
  identity() {
    super.identity();
    console.info("... and i am THE CHIEF, BITCHES!");
  }
}
