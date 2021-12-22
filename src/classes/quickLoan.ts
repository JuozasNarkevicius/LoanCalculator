import Loan from './loan.js';

export default class QuickLoan extends Loan {
  constructor(amount:number, maturity:number) {
    super(amount, maturity);
    this.interest = 20;
    this.maxAmount = 5000;
    this.maxMaturity = 24;
  }
}
