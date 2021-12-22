import Loan from './loan.js';

export default class ConsumerLoan extends Loan {
  itemType:string;

  constructor(amount:number, maturity:number, itemType:string) {
    super(amount, maturity);
    this.itemType = itemType;
    this.maxAmount = 10000;
    this.maxMaturity = 60;
    this.setInterest();
  }

  setInterest() {
    if (this.itemType === 'housing') {
      this.interest = 5;
    } else if (this.itemType === 'car') {
      this.interest = 10;
    } else {
      this.interest = 30;
    }
  }
}
