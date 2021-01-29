"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ApiRestRouterBase = /** @class */ (function () {
    function ApiRestRouterBase(config) {
        this.router = express_1.Router();
        this.basePath = config.basePath;
        this.securityFilter = config.securityFilter;
        this.init();
    }
    ApiRestRouterBase.prototype.get = function () {
        return this.router;
    };
    ApiRestRouterBase.prototype.init = function () {
        if (this.securityFilter) {
            this.securizeRoute(this.securityFilter);
        }
        this.loadRoutes();
    };
    ApiRestRouterBase.prototype.securizeRoute = function (securityFilter) {
        this.router.all(this.basePath, securityFilter.checkAuth, function (req, res, next) {
            next();
        });
    };
    return ApiRestRouterBase;
}());
exports.default = ApiRestRouterBase;
//# sourceMappingURL=ApiRestRouterBase.js.map