// Explicit Types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "twenty"; not gonna work
age = 20;

// isLoggedIn = "Yes" not gonna work
isLoggedIn = true;

// Explicit Types --> arrays
let shinobis: string[] = []; // array which will contain all strings
// shinobis = [10,20,30,40] not gonna work

shinobis.push("itachi");

// Union Types
let mixed: (string | number | boolean)[] = [];
mixed.push("itachi");
mixed.push(99);
mixed.push(false);

let eId: string | number;
eId = "GJ5713";
eId = 98451;

// objects
let shinobiOne: object;
shinobiOne = { name: "Kakash", age: 20 };
shinobiOne = [10, 45, 78]; // will work - array is also an object

let shinobiTwo: {
  name: string;
  age: number;
  nickname: string;
};

shinobiTwo = { name: "Kakashi", age: 20, nickname: "Copy Ninja" };
