"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ApiRestTestRouter = /** @class */ (function () {
    function ApiRestTestRouter(config) {
        this.router = express_1.Router();
        this.basePath = config.basePath;
        this.securityFilter = config.securityFilter;
        this.init();
    }
    ApiRestTestRouter.prototype.get = function () {
        return this.router;
    };
    ApiRestTestRouter.prototype.init = function () {
        if (this.securityFilter) {
            this.securizeRoute(this.securityFilter);
        }
        this.loadRoutes();
    };
    ApiRestTestRouter.prototype.loadRoutes = function () {
        var _this = this;
        this.router.get(this.basePath, function (req, res) {
            res.json({
                ok: true,
                path: _this.basePath,
            });
        });
    };
    ApiRestTestRouter.prototype.securizeRoute = function (securityFilter) {
        this.router.all(this.basePath, securityFilter.checkAuth, function (req, res, next) {
            next();
        });
    };
    return ApiRestTestRouter;
}());
exports.default = ApiRestTestRouter;
//# sourceMappingURL=ApiRestTestRouter.js.map