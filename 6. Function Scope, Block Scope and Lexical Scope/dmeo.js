function myFunc() {
    var name = 'Luke'
    console.log(name); // 'Luke'
}

myFunc();

// console.log(name); // name is not defined  

function first() {
    second();
    function second() {
        third();
        function third() {
            fourth();
            function fourth() {
                // do something
            }
        }
    }
}
first();