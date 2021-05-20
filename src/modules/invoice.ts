import { HasFormatter } from "./../interfaces/HasFormaterr.js";
export class Invoice implements HasFormatter {
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
