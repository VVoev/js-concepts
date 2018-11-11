// scope = variable acess
// context = this

var a = 1;

function foo() {
    var b = 2;
}

foo();
console.log(b);