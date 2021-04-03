"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRestAppError = /** @class */ (function (_super) {
    __extends(ApiRestAppError, _super);
    function ApiRestAppError() {
        var _newTarget = this.constructor;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = _super.apply(this, params) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        _this.name = ApiRestAppError.name;
        return _this;
    }
    return ApiRestAppError;
}(Error));
exports.default = ApiRestAppError;
//# sourceMappingURL=ApiRestAppError.js.map