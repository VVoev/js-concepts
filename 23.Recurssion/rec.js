
print = (f, param, cb) => {
    cb(f(param));
}


var duma = 'nqma takava';
var number = 5;
factorial = n => {
    if (n === 1)
        return 1
    return n * factorial(n - 1);
}

function reverse(str) {
    if (str.length <= 1) {
        return str;
    }
    return reverse(str.substr(1)) + str[0];
}

print(factorial, number, console.log);
print(reverse, duma, console.log);
