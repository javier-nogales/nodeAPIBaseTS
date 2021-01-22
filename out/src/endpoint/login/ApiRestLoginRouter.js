"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Login_1 = __importDefault(require("../user/Login"));
var ApiRestLoginRouter = /** @class */ (function () {
    function ApiRestLoginRouter(config) {
        this.router = express_1.Router();
        // this.securityFilter = config.securityFilter;
        this.basePath = config.basePath;
        this.build();
    }
    ApiRestLoginRouter.prototype.get = function () {
        return this.router;
    };
    ApiRestLoginRouter.prototype.build = function () {
        var _this = this;
        this.router.post(this.basePath, function (req, res) {
            try {
                var login = new Login_1.default(req.body.login.id, req.body.login.passwd);
                res.json({
                    ok: true,
                    path: _this.basePath,
                    result: login,
                });
            }
            catch (err) {
                var trace = err.stack;
                console.log("Endpoint /login Error:\n" + trace);
                res.json({
                    ok: false,
                    path: _this.basePath,
                    result: 'Error'
                });
            }
        });
    };
    return ApiRestLoginRouter;
}());
exports.default = ApiRestLoginRouter;
//# sourceMappingURL=ApiRestLoginRouter.js.map