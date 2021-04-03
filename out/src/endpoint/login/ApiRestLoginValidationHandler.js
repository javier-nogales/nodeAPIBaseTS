"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoginSchema_1 = __importDefault(require("./LoginSchema"));
var ApiRestLoginValidationHandler = /** @class */ (function () {
    function ApiRestLoginValidationHandler() {
    }
    ApiRestLoginValidationHandler.prototype.login = function (req) {
        return LoginSchema_1.default.loginUser.validateAsync(req.body.login);
    };
    return ApiRestLoginValidationHandler;
}());
// Singleton
exports.default = new ApiRestLoginValidationHandler();
//# sourceMappingURL=ApiRestLoginValidationHandler.js.map