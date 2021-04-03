"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Login_1 = __importDefault(require("./Login"));
var ApiRestLoginDataHandler = /** @class */ (function () {
    function ApiRestLoginDataHandler() {
    }
    ApiRestLoginDataHandler.mapRequestLogin = function (req) {
        // map request 
        var login = new Login_1.default(req.body.login.id, req.body.login.passwd);
        return login;
    };
    ApiRestLoginDataHandler.mapResponseLogin = function (ok, result) {
        // map request 
        return { ok: ok, result: result };
    };
    return ApiRestLoginDataHandler;
}());
exports.default = ApiRestLoginDataHandler;
//# sourceMappingURL=ApiRestLoginRequestMapper.js.map