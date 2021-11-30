import HousingLoan from '../classes/housingLoan.js';
import exceedsMax from './verification.js';
import printLabel from './printLabel.js';

const form = document.querySelector('#formEl') as HTMLFormElement;

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const amount = formData.get('amount') as unknown as number;
  const maturity = formData.get('maturity') as unknown as number;
  const salary = formData.get('salary') as unknown as number;
  const childrenCount = formData.get('children') as unknown as number;

  const housingLoan = new HousingLoan(amount, maturity, salary, childrenCount);

  if (exceedsMax(amount, maturity, housingLoan.maxAmount, housingLoan.maxMaturity)) {
    return false;
  }

  const monthlyPayment = housingLoan.calculateMonthlyPayment();
  printLabel(monthlyPayment, housingLoan);
  return false;
};
