import HousingLoan from '../classes/housingLoan.js';
import exceedsMax from './verification.js';
import printLabel from './printLabel.js';
var form = document.querySelector('#formEl');
form.onsubmit = function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var amount = formData.get('amount');
    var maturity = formData.get('maturity');
    var salary = formData.get('salary');
    var childrenCount = formData.get('children');
    var housingLoan = new HousingLoan(amount, maturity, salary, childrenCount);
    if (exceedsMax(amount, maturity, housingLoan.maxAmount, housingLoan.maxMaturity)) {
        return false;
    }
    var monthlyPayment = housingLoan.calculateMonthlyPayment();
    printLabel(monthlyPayment, housingLoan);
    return false;
};
//# sourceMappingURL=housingLoan.js.map