class Bike{
    constructor(public price: number, public max_speed: number, public miles: number) {
        this.miles = 0;
    }
    displayInfo = () => {
        console.log("price: " + this.price,
            "maximum speed: " + this.max_speed,
            "total miles: " + this.miles);
        return this;
    }
    ride = () => {
        console.log(this.miles);
        this.miles += 10
        console.log(this.miles);
        return this;
    }
    reverse = () => {
        console.log("reversing");
        this.miles -= 5;
        return this;
    }
}

let bike1 = new Bike(100, 25, 0);
bike1.ride().ride().ride().reverse().displayInfo();
let bike2 = new Bike(175, 27, 0);
bike2.ride().ride().reverse().reverse().displayInfo();
