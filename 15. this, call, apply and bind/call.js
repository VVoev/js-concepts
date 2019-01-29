console.log('call');
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

for (let i = 0; i < animals.length; i++) {
    (function (i) {
        this._print = function () {
            console.log(`Index ${i} with name ${this.name} with species ${this.species}`)
        }
        this._print();
    }).call(animals[i], i)
}

var obj = {
    name: 'Bryan Adams',
}

var greeting = function (args) {
    var b = [...args]
    var formated = b.join().replace(/,/g, " ")
    return `welcome ${this.name} best hit ${formated}`
}

var neshto = ['i', 'do', 'it', 'for', 'you'];
console.log(greeting.call(obj, neshto))

function changeColor(color) {
    this.classList = ''
    this.classList.add(color)
}

var button = document.getElementById('butonche');
var ul = document.getElementById('father');
console.log(ul);
console.log(button)
var isClicked = true;

button.addEventListener('click', function () {
    isClicked = !isClicked

    if (!isClicked) {
        var children = [].slice.call(document.getElementById('father').children);
        children.forEach((c) => {
            changeColor.call(c, 'red')
        })
    } else {
        var children = [].slice.call(document.getElementById('father').children);
        children.forEach((c) => {
            changeColor.call(c, 'green')
        })
    }
})


var numbers = [5, 6, 2, 3, 7];
var another = [-15, 2, 3]


var person = {
    name: "yanko",
    getName: function () {
        return this.name
    }
}

var personName = person.getName;
var nameTobeChecked = personName.bind(person);
console.log(nameTobeChecked())

function smqh() {
    console.log(arguments)
}

smqh(5, 10, 'petar');

function list() {
    return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
    return arg1 + arg2
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var result1 = addArguments(1, 2); // 3
console.log('da');

var thirtyFiveFront = list.bind(null, 35);
var secondList = thirtyFiveFront();
var print = console.log;
var list2 = thirtyFiveFront(5, 10, 15);
print(list2)


var obj = { num: 2 }
var addToThis = function (a, b, c) {
    return this.num + a + b + c
}

var arr = [15, 10, 20]
print(addToThis.call(obj, 15, 10, 20))
print(obj)

print(addToThis.apply(obj, arr))
print(obj)


addToObj = addToThis.bind(obj);
print(
    addToObj(5, 100, 200)
)

var objWithName = {
    name: 'neshto',
    getName: function () {
        return this.name
    }
}

var objWithoutName = {
    name: 'drugoNeshto',
}

function returnName(name) {
    return this.name
}

print(
    returnName.call(objWithoutName)
)

print(
    returnName.call(objWithName)
)


var addTo = function (a) {
    return function (b) {
        return a + b
    }
}

var addToFive = addTo(5);
print(addToFive(13));

var avg = function (...n) {
    let tot = 0;
    for (let i = 0; i < n.length; i += 1) {
        tot += n[i]
    }
    return tot / n.length
}

var spicyUp = function (fn, ...n) {
    return function (...m) {
        return fn.apply(this, n.concat(m))
    }
}

print(avg(1, 2, 10))
var doAvg = spicyUp(avg, 1, 2, 3)
print(doAvg(6))

var saySomething = function (a) {
    return function (b) {
        return function (c) {
            console.log(`saying ${a} to ${b} ${c}`)
        }
    }
}
print(
    saySomething('Hello')('Javascript')('World')
)

var sayHi = saySomething('Hello');
var sayHiToMe = sayHi('Vlado')
var sayHiToMeUsiningNothing = sayHiToMe('nothing');


