const numbers = [2, 4, 8, 10];
const halves = numbers.map(x => x / 2);
// halves is [1, 2, 4, 5]


const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);
// longWords is ["exuberant", "destruction", "present"]


const total = [1, 2, 3, 4, 5].reduce((cur, acc) => {
    return cur + acc;
}, 0)


const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const composeMore = (...fns) => x => fns.reduce((v, f) => f(v), x);
const add1 = n => n + 1;
const double = n => n * 2;
const triple = n => n * 3;
const add1ThenDouble = compose(
    double,
    add1
);

const add1ThenDoubleThenTriple = composeMore(
    triple,
    double,
    add1
)

console.log(
    add1ThenDoubleThenTriple(5)
)

console.log(
    add1ThenDouble(2)
)
// 6
// ((2 + 1 = 3) * 2 = 6)

let api = {
    deleteItem: function (item) {
        console.log(`item with number has been deleted ${item}`)
    }
}

let itemsIds = [1, 2, 3, 4, 5];
itemsIds.reduce((promise, itemId) => {
    return promise.then(_ => api.deleteItem(itemId));
}, Promise.resolve());

itemsIds.reduce(function (prevVal, elem, index, array) {
    console.log(prevVal);
    console.log(elem);
    console.log(index);
    console.log(array);
}, 0);




