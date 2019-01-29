function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.max)(5, 10, 15);

debugger;
var arr = [5, 10, 15];
noisy(Math.max)(...arr)