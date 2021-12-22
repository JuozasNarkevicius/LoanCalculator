import QuickLoan from '../classes/quickLoan.js';

const printLabel = (montlyPayment: number, quickLoan: QuickLoan) => {
  const label = document.querySelector('#answer') as HTMLLabelElement;
  label.innerHTML = `
  Monthly payment: ${montlyPayment.toFixed(2)}€ <br/>
  Loan interest: ${quickLoan.interest}% <br/>
  Maximum loan amount: ${quickLoan.maxAmount}€ <br/>
  Maximum loan maturity: ${quickLoan.maxMaturity / 12} years (${quickLoan.maxMaturity} months) <br/>`;
};

export default printLabel;
