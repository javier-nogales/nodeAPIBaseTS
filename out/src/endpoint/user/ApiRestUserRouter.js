"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("./user"));
var ApiRestUserRouter = /** @class */ (function () {
    function ApiRestUserRouter(config) {
        this.router = express_1.Router();
        this.basePath = config.basePath;
        this.securityFilter = config.securityFilter;
        this.init();
    }
    ApiRestUserRouter.prototype.get = function () {
        return this.router;
    };
    ApiRestUserRouter.prototype.init = function () {
        if (this.securityFilter) {
            this.securizeRoutes(this.securityFilter);
        }
        this.loadRoutes();
    };
    ApiRestUserRouter.prototype.loadRoutes = function () {
        var _this = this;
        this.router.post(this.basePath, function (req, res) {
            try {
                var user = new user_1.default(req.body.user.id, req.body.user.name, req.body.user.age);
                res.json({
                    ok: true,
                    path: _this.basePath,
                    result: user,
                });
            }
            catch (err) {
                var trace = err.stack;
                console.log("Endpoint /user Error:\n" + trace);
                res.json({
                    ok: false,
                    path: 'user',
                    result: 'Error'
                });
            }
        });
    };
    ApiRestUserRouter.prototype.securizeRoutes = function (securityFilter) {
        this.router.all(this.basePath, securityFilter.checkAuth, function (req, res, next) {
            next();
        });
    };
    return ApiRestUserRouter;
}());
exports.default = ApiRestUserRouter;
//# sourceMappingURL=ApiRestUserRouter.js.map