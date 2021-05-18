"use strict";
// Classes
var Invoice = /** @class */ (function () {
    //   readonly client: string; // can access outside the class but you'll not change the value
    //   public details: string; // can access or can change the value outside the class
    //   private amount: number; //can't access outside the class but can access through class method
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    // A short way to do all things specified above
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    } // value will be assigned automatically
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
// create a object from class
var invOne = new Invoice("Jerry", "work for mobile App", 6000);
var invTwo = new Invoice("Kiba", "work for server", 8000);
// console.log(invOne, invTwo);
var invoices = []; //this array contains all the invoices object
// invoices.push("Hello") // Not gonna work
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.format());
});
var anchor = document.querySelector("a");
// sometime it gives warning like anchor may be undefined so we will do some checks like put ! after querySelector
console.log(anchor.href);
// const form = document.querySelector('form'); when you hover on form it shows HTMLFormElement
// const form = document.querySelector(".new-item-form"); when you hover it show only Element
// so we do something like
var form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
