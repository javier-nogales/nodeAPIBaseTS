"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ErrorHandler_1 = __importDefault(require("../core/error/ErrorHandler"));
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
        this.app.use(ErrorHandler_1.default.requestErrorHandler);
    };
    ApiRestServerDefault.prototype.useJson = function () {
        this.app.use(express.json());
    };
    ApiRestServerDefault.prototype.useRouters = function (routers) {
        var _this = this;
        routers.forEach(function (router) {
            router.get().use(ErrorHandler_1.default.requestErrorHandler);
            _this.app.use(router.get());
        });
    };
    return ApiRestServerDefault;
}());
exports.default = ApiRestServerDefault;
//# sourceMappingURL=ApiRestServerDefault.js.map