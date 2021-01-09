"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("../model/user"));
var ApiRestUserRouter = /** @class */ (function () {
    function ApiRestUserRouter() {
        this.router = express_1.Router();
        this.build();
    }
    ApiRestUserRouter.prototype.build = function () {
        this.router.post('/user/', function (req, res) {
            try {
                var user = new user_1.default(req.body.user.id, req.body.user.name, req.body.user.age);
                res.json({
                    ok: true,
                    path: '/user',
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
    return ApiRestUserRouter;
}());
exports.default = ApiRestUserRouter;
