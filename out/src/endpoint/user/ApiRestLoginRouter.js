"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ApiRestLoginRouter = /** @class */ (function () {
    function ApiRestLoginRouter(config) {
        this.router = express_1.Router();
        this.securityFilter = config.securityFilter;
        this.basePath = config.basePath;
        this.securizeRoute();
        this.build();
    }
    ApiRestLoginRouter.prototype.get = function () {
        return this.router;
    };
    ApiRestLoginRouter.prototype.build = function () {
        var _this = this;
        this.router.get(this.basePath, function (req, res) {
            res.json({
                ok: true,
                path: _this.basePath,
            });
        });
    };
    ApiRestLoginRouter.prototype.securizeRoute = function () {
        this.router.all(this.basePath, this.securityFilter.checkAuth, function (req, res, next) {
            next();
        });
    };
    return ApiRestLoginRouter;
}());
exports.default = ApiRestLoginRouter;
//# sourceMappingURL=ApiRestLoginRouter.js.map