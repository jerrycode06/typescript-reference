// Interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(p: number): number;
}

const me: IsPerson = {
  name: "Jerry",
  age: 21,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number) {
    console.log("I spent ", amount);
    return amount;
  },
};

// console.log(me);
const greetPerson = (person: IsPerson) => {
  console.log("Hello", person.name);
};
greetPerson(me);

import { Invoice } from "./modules/invoice.js"; // because ts compiler compiles ts into js

// create a object from class
const invOne = new Invoice("Jerry", "work for mobile App", 6000);
const invTwo = new Invoice("Kiba", "work for server", 8000);
// console.log(invOne, invTwo);

let invoices: Invoice[] = []; //this array contains all the invoices object
// invoices.push("Hello") // Not gonna work
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
invoices.forEach((inv) => {
  console.log(inv.client, inv.details, inv.format());
});

const anchor = document.querySelector("a")!;

// sometime it gives warning like anchor may be undefined so we will do some checks like put ! after querySelector
console.log(anchor.href);

// const form = document.querySelector('form'); when you hover on form it shows HTMLFormElement
// const form = document.querySelector(".new-item-form"); when you hover it show only Element
// so we do something like

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
