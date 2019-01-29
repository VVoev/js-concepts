function repeat(n, action) {
    for (var i = 0; i < n; i += 1) {
        action(i);
    }
}


repeat(5, console.log);

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});

console.log(labels);

var proveIt = function () {
    debugger;
    if (this.id !== "") {
        alert("you triggered " + this.id);
    } else {
        alert('no such element with id')
    }
};

document.getElementById("clicker").addEventListener("click", proveIt);
document.getElementById("wrapper").addEventListener("click", proveIt);
document.querySelector("h3").addEventListener("click", proveIt);


var attitude = function (original, replacement, source) {
    return function (source) {
        return source.replace(original, replacement);
    };
};

var snakify = attitude(/millenials/ig, "Snake People");
var hippify = attitude(/baby boomers/ig, "Aging Hippies");

console.log(snakify("The Millenials are always up to something."));
// The Snake People are always up to something.
console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.


const people = [
    { name: 'John Doe', age: 16 },
    { name: 'Thomas Calls', age: 19 },
    { name: 'Liam Smith', age: 20 },
    { name: 'Jessy Pinkman', age: 18 },
];


const peopleAbove18 = (collection) => {
    return collection
        .filter((person) => person.age >= 18);
}


// ES6 version
const characters = [
    { name: 'Luke Skywalker', img: 'http://example.com/img/luke.jpg', species: 'human' },
    { name: 'Han Solo', img: 'http://example.com/img/han.jpg', species: 'human' },
    { name: 'Leia Organa', img: 'http://example.com/img/leia.jpg', species: 'human' },
    { name: 'Chewbacca', img: 'http://example.com/img/chewie.jpg', species: 'wookie' }
];

const humans = data => data.filter(character => character.species === 'human');
const images = data => data.map(character => character.img);
const compose = (func1, func2) => data => func2(func1(data));
const displayCharacterImages = compose(humans, images);

console.log(displayCharacterImages(characters));






