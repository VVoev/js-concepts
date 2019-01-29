function makeFunc() {
    var name = 'Mozilla';
    var browser = "Google Chrome";
    function displayName() {
        alert(name);
    }

    function displayBrowser() {
        alert(browser)
    }


    return {
        displayName,
        displayBrowser
    }
}

var myFunc = makeFunc();


function addWeapon(person) {
    return function (gun) {
        return person.weapon = gun;
    }
}

var persons = [{
    name: 'gosho',
},
{
    name: 'vlado'
}
]


var addPistol = addWeapon(persons[0]);
addPistol('pistol');


var counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    };
})();

var passed = 3;

var addTo = function () {
    var inner = 2;
    return passed + inner;
}



var students = [
    { name: 'Georgy', grade: 5.40, class: 8 },
    { name: 'Petko', grade: 4.40, class: 9 },
    { name: 'Vlado', grade: 3.40, class: 10 },
    { name: 'Yana', grade: 5.20, class: 11 },
    { name: 'Gerzi', grade: 6.00, class: 12 },
    { name: 'Zuna', grade: 4.51, class: 10 },
]


var goodStudents = [];

function calculateAverageGrade(students, cb) {
    var avg = 0;
    students.forEach((student) => {
        avg += student.grade
    })
    cb(avg / students.length)
}

function isGradeEnought(student) {
    if (student.grade > 4.49) {
        return true;
    } return false;
}
students.forEach((student) => {
    if (isGradeEnought(student)) {
        goodStudents.push(student)
    }
})

function finishCalculation(result) {
    console.log('finish')
    console.log(`Result is ${result}`)
    pisnaMi();
}

function pisnaMi() {
    console.log('fuck off')
}

calculateAverageGrade(goodStudents, finishCalculation)

