class Ninja{
    constructor(name){
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
    }
    
    sayName(){
        console.log(`My name is ${this.name}`);
        return;
    }
    showStats(){
        console.log(`My name is ${this.name}, my strength is ${this.strength}, my speed is ${this.speed}, and my health is ${this.health}`);
        return;
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

        speakWisdom(){
            super.drinkSake();
            console.log("php, slightly better than a hole in the head..");
            return;
        }
}

const ninja1 = new Ninja("Frank");
const ninja2 = new Ninja("Bob");

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

ninja1.showStats();
