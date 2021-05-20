import { HasFormatter } from "./../interfaces/HasFormaterr.js";
export class Payments implements HasFormatter {
  constructor(
    readonly receipient: string,
    public details: string,
    private amount: number
  ) {}

  format() {
    return `${this.receipient} is owed ${this.amount} for ${this.details}`;
  }
}
