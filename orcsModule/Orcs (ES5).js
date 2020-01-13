
/***************************
 * Constructeur "Creature"
****************************/

function Creature(name, age, strength) {
  this.name = name;
  this.age = age;
  this.strength = strength;
}

Creature.prototype.saySomething = function saySomething(words) {
  console.info(this.name + " dit : " + words);
}

Creature.prototype.identity = function() {
  console.info(`
      NOM : ${this.name},
      AGE : ${this.age},
      STRENGTH : ${this.strength}`);
}

/***************************
 * Constructeur "Orque"
****************************/

function Orc(name, age, strength) {
  Creature.call(this, name, age, strength);
}

Orc.prototype = Object.create(Creature.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.scream = function scream(words) {
  console.info(this.name + ' screams : ' + words.toUpperCase() + ' !!!');
}

Orc.prototype.bite = function bite(someone) {
  if (!(someone instanceof Creature)) {
    throw new Error("`someone` is not a Creature");
  }

  console.info(this.name + ' bites ' + someone.name + ' to the neck !');
}

/***************************
 * Constructeur "Uruk-hai"
****************************/

function Urukhai(name, strength) {
  Orc.call(this, name, null, strength + 10);
}

Urukhai.prototype = Object.create(Orc.prototype);
Urukhai.prototype.constructor = Urukhai;

Urukhai.prototype.kill = function kill(someone) {
  if (!(someone instanceof Creature)) {
    throw new Error("`someone` is not a Creature");
  }

  console.error(this.name + ' kills ' + someone.name + ' savagely !!!!!');
}

/***************************
 * Constructeur "Chief Orc"
****************************/

function ChiefOrc(name, age, strength) {
  Orc.call(this, name, age, strength + 2);
  this.isChief = true;
}

ChiefOrc.prototype = Object.create(Orc.prototype);
ChiefOrc.prototype.constructor = ChiefOrc;

ChiefOrc.prototype.giveOrder = function giveOrder(someone, message) {
  if (!(someone instanceof Creature)) {
    throw new Error("`someone` is not a Creature");
  }

  this.scream("Hey you, " + someone.name + "! " + message);
}

ChiefOrc.prototype.identity = function identity() {
  Creature.prototype.identity.call(this);
  console.info("... and i am THE CHIEF, BITCHES!");
}


/*************
 * Invocation
**************/

let myCreature = new Creature("Kreattur", 45, 10);
let myOrc = new Orc("Orka", 15, 100);
let myUrukhai = new Urukhai("Uruck", 500);
let myChief = new ChiefOrc("BigBoss", 30, 200);


myCreature.identity(); // NOM : Kreattur
                      //  AGE : 45
                      //  STRENGTH : 10
myCreature.saySomething('Salut'); // "Kreattur dit : Salut"

myOrc.scream("heyho!"); // "Orka screams : HEYHO! !!!"
myOrc.bite(myCreature); // "Orka bites Kreattur to the neck !"

myUrukhai.scream("I'm gonna kill you !"); // "Uruck screams : I'M GONNA KILL YOU ! !!!"
myUrukhai.kill(myCreature); // "Uruck kills Kreattur savagely !!!!!"

myChief.isChief; // true
myChief.giveOrder(myUrukhai, "message"); // "BigBoss screams : HEY YOU, URUCK! MESSAGE !!!"
myChief.identity(); // NOM : BigBoss
                    // AGE : 30
                    // STRENGTH : 202
                    // ... and i am THE CHIEF, BITCHES!
