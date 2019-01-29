var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('gotov sam'));
    }, 500);
})

promise.then((val) => {
    console.log(val)
})


const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
        phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error)); // fat arrow
};

askMom();

let resultA, resultB, resultC;

function addAsync(num1, num2, callback) {
    // use the famous jQuery getJSON callback API
    // 	return $.getJSON('http://www.example.com', {
    // 		num1: num1,
    // 		num2: num2
    // 	}, callback);
    const cb = $.Callbacks();
    cb.add(callback);
    cb.fire(num1 + num2);
}

addAsync(1, 2, success => {
    // callback 1
    resultA = success; // you get result = 3 here

    addAsync(resultA, 3, success => {
        // callback 2
        resultB = success; // you get result = 6 here

        addAsync(resultB, 4, success => {
            // callback 3
            resultC = success; // you get result = 10 here

            console.log('total' + resultC);
            console.log(resultA, resultB, resultC);
        });
    });
});

var counter = 0;

increaseCounter = () => {
    counter += 1;
    return Promise.resolve(counter)
}

var itemsCountWillIncrease = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(increaseCounter(counter));
    }, 1000);
})

itemsCountWillIncrease
    .then(increaseCounter)
    .then(increaseCounter)
    .then(increaseCounter)
    .then(increaseCounter)
    .then(increaseCounter)
    .then((v) => console.log(v));

