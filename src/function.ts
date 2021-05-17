// let greet = () => {
//     console.log("Good Morning");
// }

let greet: Function;

// greet = "hello" // Not gonna work now

const add = (a: number, b: number) => {
  console.log(a + b);
};
add(5, 6);

// we can use optional parameters -> P.S = Please use optional parameter at last after the required parameters
const add1 = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};
// Function with no return always return void in typescript

add1(5, 6);

const minus = (a: number, b: number): number => {
  return a - b;
};
// Typescript automatically specifies the return type with the type of value returned but we can also write the return type
let result = minus(87, 41);
