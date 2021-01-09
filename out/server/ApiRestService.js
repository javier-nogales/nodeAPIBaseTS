"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Login_1 = __importDefault(require("../model/Login"));
var ApiRestServer = /** @class */ (function () {
    function ApiRestServer(config) {
        this.BASE_PATH = '/';
        this.port = config.port;
        this.loginUrl = config.loginUrl;
        this.securityFilter = config.securityFilter;
        this.app = express();
        this.init();
    }
    ApiRestServer.init = function (config) {
        return new ApiRestServer(config);
    };
    ApiRestServer.prototype.init = function () {
        this.useJson();
        this.enableLogin();
        this.securizeAll();
    };
    ApiRestServer.prototype.useJson = function () {
        this.app.use(express.json());
    };
    ApiRestServer.prototype.enableLogin = function () {
        this.app.post(this.loginUrl, function (req, res) {
            try {
                var login = new Login_1.default(req.body.login.id, req.body.login.passwd);
                res.json({
                    ok: true,
                    path: '/login',
                    result: login,
                });
            }
            catch (err) {
                var trace = err.stack;
                console.log("Endpoint /login Error:\n" + trace);
                res.json({
                    ok: false,
                    path: 'login',
                    result: 'Error'
                });
            }
        });
    };
    ApiRestServer.prototype.securizeAll = function () {
        this.app.all(this.BASE_PATH, this.securityFilter.requireLogin, function (req, res, next) {
            next();
        });
    };
    ApiRestServer.prototype.useRouter = function (router) {
        this.app.use(router);
    };
    ApiRestServer.prototype.start = function (callback) {
        this.app.listen(this.port, callback());
    };
    return ApiRestServer;
}());
exports.default = ApiRestServer;
