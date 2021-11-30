var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Loan from './loan.js';
var QuickLoan = /** @class */ (function (_super) {
    __extends(QuickLoan, _super);
    function QuickLoan(amount, maturity) {
        var _this = _super.call(this, amount, maturity) || this;
        _this.interest = 20;
        _this.maxAmount = 5000;
        _this.maxMaturity = 24;
        return _this;
    }
    return QuickLoan;
}(Loan));
export default QuickLoan;
//# sourceMappingURL=quickLoan.js.map