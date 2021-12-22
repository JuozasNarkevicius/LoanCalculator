import ConsumerLoan from '../classes/consumerLoan.js';
import exceedsMax from '../helperFunctions/verification.js';
import printLabel from '../helperFunctions/printLabel.js';
var form = document.querySelector('#formEl');
form.onsubmit = function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var amount = formData.get('amount');
    var maturity = formData.get('maturity');
    var itemType = formData.get('type');
    var consumerLoan = new ConsumerLoan(amount, maturity, itemType);
    if (exceedsMax(amount, maturity, consumerLoan.maxAmount, consumerLoan.maxMaturity)) {
        return false;
    }
    var monthlyPayment = consumerLoan.calculateMonthlyPayment();
    printLabel(monthlyPayment, consumerLoan);
    return false;
};
//# sourceMappingURL=consumerLoan.js.map