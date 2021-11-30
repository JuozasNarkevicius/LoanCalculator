var Loan = /** @class */ (function () {
    function Loan(amount, maturity) {
        this.amount = amount;
        this.maturity = maturity;
    }
    Loan.prototype.calculateMonthlyPayment = function () {
        return (+this.amount + ((this.interest / +100) * this.amount)) / this.maturity;
    };
    return Loan;
}());
export default Loan;
//# sourceMappingURL=loan.js.map