// Function Signatures

// Example 1
let greetss: (a: string, b: string) => void; // This is a signature of function greetss

greetss = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// greetss = (name: string, greeting: number) => {
//     console.log(`${name} says ${greeting}`);
//   }; gives an error -> parameter don't match with signature

// Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
  if (action === "add") return num1 + num2;
  else return num1 - num2;
};

// Example 3
let logdetails: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };

logdetails = (shinobi: person) => {
  console.log(`${shinobi.name} has age ${shinobi.age}`);
};
