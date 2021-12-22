export default abstract class Loan {
  amount:number;

  maturity:number;

  maxAmount:number;

  maxMaturity:number;

  interest:number;

  constructor(amount: number, maturity:number) {
    this.amount = amount;
    this.maturity = maturity;
  }

  calculateMonthlyPayment() {
    return (+this.amount + ((this.interest / +100) * this.amount)) / this.maturity;
  }
}
