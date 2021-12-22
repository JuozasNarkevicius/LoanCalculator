import ConsumerLoan from '../classes/consumerLoan.js';
import exceedsMax from '../helperFunctions/verification.js';
import printLabel from '../helperFunctions/printLabel.js';

const form = document.querySelector('#formEl') as HTMLFormElement;

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const amount = formData.get('amount') as unknown as number;
  const maturity = formData.get('maturity') as unknown as number;
  const itemType = formData.get('type') as unknown as string;

  const consumerLoan = new ConsumerLoan(amount, maturity, itemType);

  if (exceedsMax(amount, maturity, consumerLoan.maxAmount, consumerLoan.maxMaturity)) {
    return false;
  }

  const monthlyPayment = consumerLoan.calculateMonthlyPayment();
  printLabel(monthlyPayment, consumerLoan);
  return false;
};
