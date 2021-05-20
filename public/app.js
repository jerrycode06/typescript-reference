// Interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(p: number): number;
// }
// const me: IsPerson = {
//   name: "Jerry",
//   age: 21,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number) {
//     console.log("I spent ", amount);
//     return amount;
//   },
// };
// console.log(me);
// const greetPerson = (person: IsPerson) => {
//   console.log("Hello", person.name);
// };
// greetPerson(me);
import { Invoice } from "./modules/invoice.js"; // because ts compiler compiles ts into js
import { Payments } from "./modules/payments.js";
import { ListTemplate } from "./modules/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("sasuke", "app work", 6000);
// docTwo = new Payments("sakura", "cooking", 3000);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// create a object from class
const invOne = new Invoice("Jerry", "work for mobile App", 6000);
const invTwo = new Invoice("Kiba", "work for server", 8000);
// console.log(invOne, invTwo);
let invoices = []; //this array contains all the invoices object
// invoices.push("Hello") // Not gonna work
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.format());
});
const anchor = document.querySelector("a");
// sometime it gives warning like anchor may be undefined so we will do some checks like put ! after querySelector
console.log(anchor.href);
// const form = document.querySelector('form'); when you hover on form it shows HTMLFormElement
// const form = document.querySelector(".new-item-form"); when you hover it show only Element
// so we do something like
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// List Template Instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
