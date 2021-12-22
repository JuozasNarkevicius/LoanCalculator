import QuickLoan from '../classes/quickLoan.js';
import exceedsMax from '../helperFunctions/verification.js';
import printLabel from '../helperFunctions/printLabel.js';
var form = document.querySelector('#formEl');
form.onsubmit = function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var amount = formData.get('amount');
    var maturity = formData.get('maturity');
    var quickLoan = new QuickLoan(amount, maturity);
    if (exceedsMax(amount, maturity, quickLoan.maxAmount, quickLoan.maxMaturity)) {
        return false;
    }
    var monthlyPayment = quickLoan.calculateMonthlyPayment();
    printLabel(monthlyPayment, quickLoan);
    return false;
};
//# sourceMappingURL=quickLoan.js.map