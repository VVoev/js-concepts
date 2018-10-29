var people = [
    { name: 'John Hill', age: 22 },
    { name: 'Jack Chill', age: 27 }
];

var getInitials = function(name) {
    // Reusing the name argument makes little sense in general.
    // We are making this assignment here for demonstrating
    // the difference between value types and reference types.
    name = name.split(' ').map(function(word) {
        return word.charAt(0);
    }).join('');

    console.log(name);

    return name;
}

var increaseAge = function(person) {
    person.age += 1;
}

var addPerson = function(people, name, age) {
    people.push({ name: name, age: age });
}

// Part 1: getInitials
console.log(getInitials(people[0].name));
console.log(people[0].name);

// Part 2: increaseAge
increaseAge(people[1]);
console.log(people[1].age);

// Part 3: addPerson
addPerson(people, 'Jim Gordon', 32);
console.table(people);