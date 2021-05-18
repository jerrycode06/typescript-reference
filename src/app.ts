// Classes
class Invoice {
  //   readonly client: string; // can access outside the class but you'll not change the value
  //   public details: string; // can access or can change the value outside the class
  //   private amount: number; //can't access outside the class but can access through class method

  //   constructor(c: string, d: string, a: number) {
  //     this.client = c;
  //     this.details = d;
  //     this.amount = a;
  //   }

  // A short way to do all things specified above
  constructor(
    readonly client: string,
    public details: string,
    private amount: number
  ) {} // value will be assigned automatically

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

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
