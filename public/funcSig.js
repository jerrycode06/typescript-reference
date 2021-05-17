"use strict";
// Function Signatures
// Example 1
var greetss; // This is a signature of function greetss
greetss = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// greetss = (name: string, greeting: number) => {
//     console.log(`${name} says ${greeting}`);
//   }; gives an error -> parameter don't match with signature
// Example 2
var calc;
calc = function (num1, num2, action) {
    if (action === "add")
        return num1 + num2;
    else
        return num1 - num2;
};
// Example 3
var logdetails;
logdetails = function (shinobi) {
    console.log(shinobi.name + " has age " + shinobi.age);
};
