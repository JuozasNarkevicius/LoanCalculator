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
var HousingLoan = /** @class */ (function (_super) {
    __extends(HousingLoan, _super);
    function HousingLoan(amount, maturity, salary, childCount) {
        var _this = _super.call(this, amount, maturity) || this;
        _this.salary = salary;
        _this.childCount = childCount;
        _this.interest = 2;
        _this.maxMaturity = 360;
        _this.calulateMaxAmount();
        return _this;
    }
    HousingLoan.prototype.calulateMaxAmount = function () {
        this.maxAmount = this.salary * 5;
    };
    return HousingLoan;
}(Loan));
export default HousingLoan;
//# sourceMappingURL=housingLoan.js.map