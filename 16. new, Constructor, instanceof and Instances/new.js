function Student(name, age) {
    this.name = name;
    this.age = age;
}


var first = new Student('John', 26);
console.log(Student.prototype);

var second = new Student('Dia', 18);


Student.prototype.sayInfo = function () {
    console.log(this.name + ' is ' + this.age + ' years old');
}