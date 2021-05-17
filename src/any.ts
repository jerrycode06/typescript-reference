let age: any = 25;

age = true;
console.log(age);
age = "twenty";
console.log(age);
age = { name: "Jerry" };
console.log(age);

let mixed: any[] = [];
mixed.push("Jerry");
mixed.push(21);
mixed.push(true);
console.log(mixed);

let shinobi: { name: any; age: any };
shinobi = { name: "Itachi", age: 15 };
console.log(shinobi);
shinobi = { name: 55, age: "Jiraiya" };
console.log(shinobi);
