var first = {
    name: 'vlad',
    age: 25
}

var second = first;

console.log(first);
console.log(second);


second.name = 'pete';

console.log(first);
console.log(second);

var third = Object.assign({}, first);
third.name = 'Petya';

console.log(first);
console.log(second);
console.log(third)