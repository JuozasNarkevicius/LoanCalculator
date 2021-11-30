var exceedsMax = function (amount, maturity, maxAmount, maxMaturity) {
    if (amount > maxAmount) {
        alert("You exceeded the maximum loan amount of ".concat(maxAmount, "\u20AC!"));
        return true;
    }
    if (maturity > maxMaturity) {
        alert("You exceeded the maximum loan maturity of ".concat(maxMaturity, " months!"));
        return true;
    }
    return false;
};
export default exceedsMax;
//# sourceMappingURL=verification.js.map