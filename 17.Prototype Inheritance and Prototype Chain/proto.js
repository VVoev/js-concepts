function Cat(name) {
    this.name = name;
}

let cat = new Cat('Hektor');
cat1 = Cat('baxur');


console.log(cat);
console.log(cat1);


/* Code 1 */
var bikeFunc = function () {
}
console.log(bikeFunc.prototype);  //[object Object] { ... }
var bike = { name: 'ninja' }
console.log(bike.__proto__);     //[object Object] { ... }


/* Code 2 */
function Car(name) {
    this.name = name;
}
Car.prototype.start = function () {
    return "engine of " + this.name + " starting...";
};
var c1 = new Car("Santa Fe");
var c2 = new Car("Fiesta");
c2.speak = function () {
    console.log("Hello, " + this.start());
};
c2.speak();  //"Hello, engine of Fiesta starting..."



function Car(name) {
    this.name = name;
}
Car.prototype.start = function () {
    return "engine of " + this.name + " starting...";
};
var carni1 = new Car("Santa Fe");
var carni2 = new Car("Fiesta");

let f = function () {
    this.a = 1;
    this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// add properties in f function's prototype
f.prototype.b = 3;
f.prototype.c = 4;

