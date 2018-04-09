function Ninja (name){
    this.name = name;
    let health = 100;
    const speed = 3;
    const strength =3;

    this.getHealth = function(){
        return health;
    }
    this.setHealth = function(int){
        health = int;
        return;
    }
    this.getSpeed = function(){
        return speed;
    }
    this.setSpeed = function(int){
        speed = int;
        return;
    }
    this.getStrength= function(){
        return strength;
    }
    this.setStrength = function(int){
        strength = int;
        return;
    }

}

Ninja.prototype.sayName = function(){
    console.log(this.name);
    return;
}
Ninja.prototype.showStats = function(){
    console.log("Name: "+ this.name + ", Health: " + this.getHealth() + ", Speed: "+ this.getSpeed() + ", Strength: "+ this.getStrength());
    return;
}
Ninja.prototype.drinkSake = function(){
    health = this.getHealth();
    this.setHealth(health+=10);
    return;
}
Ninja.prototype.punch = function(ninja){
    if(ninja instanceof Ninja){
        health = ninja.getHealth();
        ninja.setHealth(health -= 5);
        let attacked = ninja.name;
        let name = this.name;
        console.log(`${attacked} was punched by ${name}, and lost 5 health!`);
        return;
    }
    console.log("you can only punch other ninjas jerk!");
    return;
}
Ninja.prototype.kick = function(ninja){
    if(ninja instanceof Ninja){
        health = ninja.getHealth();
        ninja.setHealth(health -= 15);
        let attacked = ninja.name;
        let name = this.name;
        console.log(`${attacked} was kicked by ${name}, and lost 5 health!`);
        return;
    }
    console.log("you can only kick other ninjas jerk!");
    return;
}

const ninja1 = new Ninja("Hyabusa");
const ninja2 = new Ninja("Bob Barker");
let cat = {};
ninja2.punch(ninja1);
ninja2.punch(cat);