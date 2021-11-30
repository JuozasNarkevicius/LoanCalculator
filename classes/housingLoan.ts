import Loan from './loan.js';

export default class HousingLoan extends Loan {
  salary: number;

  childCount: number;

  constructor(amount:number, maturity:number, salary:number, childCount:number) {
    super(amount, maturity);
    this.salary = salary;
    this.childCount = childCount;
    this.interest = 2;
    this.maxMaturity = 360;
    this.calulateMaxAmount();
  }

  calulateMaxAmount() {
    this.maxAmount = this.salary * 5;
  }
}
