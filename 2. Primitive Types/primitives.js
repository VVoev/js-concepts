typeof true; //"boolean"
typeof Boolean(true); //"boolean"
typeof new Boolean(true); //"object"
typeof (new Boolean(true)).valueOf(); //"boolean"

typeof "abc"; //"string"
typeof String("abc"); //"string"
typeof new String("abc"); //"object"
typeof (new String("abc")).valueOf(); //"string"

typeof 123; //"number"
typeof Number(123); //"number"
typeof new Number(123); //"object"
typeof (new Number(123)).valueOf(); //"number"

String.prototype.returnMe = function () {
    return this;
}

var a = "abc";
var b = a.returnMe();

a; //"abc" 
typeof a; //"string" (still a primitive)
b; //"abc"
typeof b; //"object"