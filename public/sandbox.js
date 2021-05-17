"use strict";
var circles = function (radius) {
    return radius * radius * Math.PI;
};
// console.log(circles("Hello"))
console.log(circles(5));
// Arrays
var names = ["Jerry", "Batman", "Flash", "Aquaman"];
names.push("Wonder Woman");
// names.push(78); error
// names[1] = 21; error
// names = "897" --> gives me error because can't change data type of array or objects after declaring
var mixed = ["pizza", 150, "pasta", 116, "coke"];
mixed.push(20); // will work if you define a mixed array which contails different datatypes previously
mixed[3] = "burger"; // will work
// Objects
var shinobi = {
    name: "itachi",
    jutsu: "genjutsu",
    age: 15,
};
shinobi.age = 25; // gonna work
shinobi.name = "shishui"; //gonna work
// shinobi.age = '25' // not gonna work, you can't change value after declaration first time
// shinobi.skills = [] // not gonna work, you can't add other key-values after declaration
