class Vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getName() {
        return this.make + " " + this.model;
    }
}

class Car extends Vehicle {
    getName() {
        return super.getName();
    }
}

let car = new Car("Honda", "Accord", "Purple");

var array = [25, 5, 17, 14];
