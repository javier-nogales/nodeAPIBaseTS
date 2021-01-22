"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
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
        // this.enableLogin();
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
    // private enableLogin():void {
    //     this.app.post(
    //         this.loginPath, 
    //         (req:express.Request, res:express.Response) => {
    //             try {
    //                 let login:Login = new Login(
    //                                         req.body.login.id,
    //                                         req.body.login.passwd);
    //                 res.json({
    //                     ok: true,
    //                     path: this.loginPath,
    //                     result: login,
    //                 });
    //             } catch (err) {
    //                 let trace:string|undefined = (err as Error).stack;
    //                 console.log(`Endpoint /login Error:\n${trace}`);
    //                 res.json({
    //                     ok: false,
    //                     path: this.loginPath,
    //                     result: 'Error'
    //                 });
    //             }
    //     });
    // }
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