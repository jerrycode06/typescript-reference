"use strict";
// let greet = () => {
//     console.log("Good Morning");
// }
var greet;
// greet = "hello" // Not gonna work now
var add = function (a, b) {
    console.log(a + b);
};
add(5, 6);
// we can use optional parameters -> P.S = Please use optional parameter at last after the required parameters
var add1 = function (a, b, c) {
    console.log(a + b);
};
// Function with no return always return void in typescript
add1(5, 6);
var minus = function (a, b) {
    return a - b;
};
// Typescript automatically specifies the return type with the type of value returned but we can also write the return type
var result = minus(87, 41);
