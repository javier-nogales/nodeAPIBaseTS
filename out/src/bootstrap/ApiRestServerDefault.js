"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ApiRestServerDefault = /** @class */ (function () {
    function ApiRestServerDefault(config) {
        this.port = config.port;
        this.app = express();
        this.init();
    }
    ApiRestServerDefault.from = function (config) {
        return new ApiRestServerDefault(config);
    };
    ApiRestServerDefault.prototype.start = function (callback) {
        this.app.listen(this.port, callback());
    };
    ApiRestServerDefault.prototype.init = function () {
        this.useJson();
        this.app.use(this.errorHandler);
    };
    ApiRestServerDefault.prototype.useJson = function () {
        this.app.use(express.json());
    };
    ApiRestServerDefault.prototype.useRouters = function (routers) {
        var _this = this;
        routers.forEach(function (router) {
            _this.app.use(router.get());
        });
    };
    ApiRestServerDefault.prototype.errorHandler = function (err, req, res, next) {
        if (res.headersSent) {
            return next(err);
        }
        // res.status(500);
        // res.render('error', { error: err });
        return res.status(500).render('500');
    };
    return ApiRestServerDefault;
}());
exports.default = ApiRestServerDefault;
//# sourceMappingURL=ApiRestServerDefault.js.map