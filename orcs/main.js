const Creature = require("./Creature");
const Orc = require("./Orc");
const Urukhai = require("./Urukhai");
const ChiefOrc = require("./ChiefOrc");

var TheBeast = new Creature("La Bete", 85, 50);
var Willy = new Orc("Willy", 15, 100);
var Lugdush = new Urukhai("Lugdush", 45, 200);
var Orque = new ChiefOrc("Orque", 55, 400);

try {
    TheBeast.saySomething('Hello World');
    TheBeast.identity();

    Willy.saySomething('Je peux parler');
    Willy.scream('Mais je peux crier aussi !');
    Willy.bite(TheBeast);
    Willy.identity();


    Lugdush.saySomething('Je peux parler');
    Lugdush.scream('Mais je peux crier aussi !');
    Lugdush.bite(TheBeast);
    Lugdush.kill(Willy);
    Lugdush.identity();


    Orque.saySomething('Je peux parler');
    Orque.scream('Mais je peux crier aussi !');
    Orque.bite(Lugdush);
    Orque.giveOrder(Willy,'tais toi !');

} catch(e) {
    console.log(e)
}