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
var ConsumerLoan = /** @class */ (function (_super) {
    __extends(ConsumerLoan, _super);
    function ConsumerLoan(amount, maturity, itemType) {
        var _this = _super.call(this, amount, maturity) || this;
        _this.itemType = itemType;
        _this.maxAmount = 10000;
        _this.maxMaturity = 60;
        _this.setInterest();
        return _this;
    }
    ConsumerLoan.prototype.setInterest = function () {
        if (this.itemType === 'housing') {
            this.interest = 5;
        }
        else if (this.itemType === 'car') {
            this.interest = 10;
        }
        else {
            this.interest = 30;
        }
    };
    return ConsumerLoan;
}(Loan));
export default ConsumerLoan;
//# sourceMappingURL=consumerLoan.js.map