import QuickLoan from '../classes/quickLoan.js';
import exceedsMax from '../helperFunctions/verification.js';
import printLabel from '../helperFunctions/printLabel.js';

const form = document.querySelector('#formEl') as HTMLFormElement;

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const amount = formData.get('amount') as unknown as number;
  const maturity = formData.get('maturity') as unknown as number;

  const quickLoan = new QuickLoan(amount, maturity);

  if (exceedsMax(amount, maturity, quickLoan.maxAmount, quickLoan.maxMaturity)) {
    return false;
  }

  const monthlyPayment = quickLoan.calculateMonthlyPayment();
  printLabel(monthlyPayment, quickLoan);
  return false;
};
