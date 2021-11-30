var printLabel = function (montlyPayment, quickLoan) {
    var label = document.querySelector('#answer');
    label.innerHTML = "\n  Monthly payment: ".concat(montlyPayment.toFixed(2), "\u20AC <br/>\n  Loan interest: ").concat(quickLoan.interest, "% <br/>\n  Maximum loan amount: ").concat(quickLoan.maxAmount, "\u20AC <br/>\n  Maximum loan maturity: ").concat(quickLoan.maxMaturity / 12, " years (").concat(quickLoan.maxMaturity, " months) <br/>");
};
export default printLabel;
//# sourceMappingURL=printLabel.js.map