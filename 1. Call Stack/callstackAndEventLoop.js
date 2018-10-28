console.log('start');

setTimeout(() => {
    console.log('inside of cb 2sec')
}, 2000);

setTimeout(() => {
    console.log('inside of cb 0sec')
}, 0);

console.log(':)')

console.log('finish')