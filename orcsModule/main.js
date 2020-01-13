import * as orcs from './Orcs.js';


let myCreature = new orcs.Creature("Kreattur", 45, 10);
let myOrc = new orcs.Orc("Orka", 15, 100);
let myUrukhai = new orcs.Urukhai("Uruck", 500);
let myChief = new orcs.ChiefOrc("BigBoss", 30, 200);


myCreature.identity();
                    
                    
myCreature.saySomething('Salut');

myOrc.scream("heyho!");
myOrc.bite(myCreature);

myUrukhai.scream("I'm gonna kill you !");
myUrukhai.kill(myCreature);

myChief.isChief;
myChief.giveOrder(myUrukhai, "message");
myChief.identity();