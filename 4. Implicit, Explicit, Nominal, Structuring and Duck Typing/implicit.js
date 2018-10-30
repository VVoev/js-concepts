3 * "3" //9
1 + "2" + 1 //121

true + true //2
10 - true //9


const foo = {
    valueOf: () => 2
}
3 + foo // 5
4 * foo // 8

const bar = {
    toString: () => " promise is a boy :)"
}
1 + bar // "1 promise is a boy :)"


4 * [] // 0
4 * [2] // 8
4 + [2] // "42"
4 + [1, 2] // "41,2"
4 * [1, 2] // NaN

"string" ? 4 : 1 // 4
undefined ? 4 : 1 // 1

console.log(3 * "3")