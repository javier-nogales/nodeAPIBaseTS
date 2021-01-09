"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Login_1 = __importDefault(require("../model/Login"));
var ApiRestServerDefault = /** @class */ (function () {
    function ApiRestServerDefault(config) {
        this.port = config.port;
        this.basePath = config.basePath;
        this.loginPath = config.loginPath;
        this.securityFilter = config.securityFilter;
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
        this.enableLogin();
        // this.securizeAll();
    };
    ApiRestServerDefault.prototype.useJson = function () {
        this.app.use(express.json());
    };
    ApiRestServerDefault.prototype.securizeAll = function () {
        this.app.all(this.basePath, this.securityFilter.checkAuth, function (req, res, next) {
            next();
        });
    };
    ApiRestServerDefault.prototype.enableLogin = function () {
        var _this = this;
        this.app.post(this.loginPath, function (req, res) {
            try {
                var login = new Login_1.default(req.body.login.id, req.body.login.passwd);
                res.json({
                    ok: true,
                    path: _this.loginPath,
                    result: login,
                });
            }
            catch (err) {
                var trace = err.stack;
                console.log("Endpoint /login Error:\n" + trace);
                res.json({
                    ok: false,
                    path: _this.loginPath,
                    result: 'Error'
                });
            }
        });
    };
    // public useRouters(...routes:express.Router[]):void {
    //     routes.forEach((route) => {
    //         this.app.use(route);
    //     });
    // }
    ApiRestServerDefault.prototype.useRouters = function (routers) {
        var _this = this;
        routers.forEach(function (router) {
            _this.app.use(router.get());
        });
    };
    return ApiRestServerDefault;
}());
exports.default = ApiRestServerDefault;
//# sourceMappingURL=ApiRestServerDefault.js.map