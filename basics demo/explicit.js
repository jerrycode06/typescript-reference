"use strict";
// Explicit Types
var character;
var age;
var isLoggedIn;
// age = "twenty"; not gonna work
age = 20;
// isLoggedIn = "Yes" not gonna work
isLoggedIn = true;
// Explicit Types --> arrays
var shinobis = []; // array which will contain all strings
// shinobis = [10,20,30,40] not gonna work
shinobis.push("itachi");
// Union Types
var mixed = [];
mixed.push("itachi");
mixed.push(99);
mixed.push(false);
var eId;
eId = "GJ5713";
eId = 98451;
// objects
var shinobiOne;
shinobiOne = { name: "Kakash", age: 20 };
shinobiOne = [10, 45, 78]; // will work - array is also an object
var shinobiTwo;
shinobiTwo = { name: "Kakashi", age: 20, nickname: "Copy Ninja" };
