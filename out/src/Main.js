"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRestServerDefault_1 = __importDefault(require("./bootstrap/ApiRestServerDefault"));
var securityFilter_1 = __importDefault(require("./security/securityFilter"));
var ApiRestUserRouter_1 = __importDefault(require("./endpoint/user/ApiRestUserRouter"));
var ApiRestTestRouter_1 = __importDefault(require("./endpoint/test/ApiRestTestRouter"));
var ApiRestLoginRouter_1 = __importDefault(require("./endpoint/login/ApiRestLoginRouter"));
var Main = /** @class */ (function () {
    function Main(config) {
        this.config = config;
        this.securityFilter = new securityFilter_1.default();
        this.server = new ApiRestServerDefault_1.default({
            port: config.port,
            basePath: config.basePath,
            loginPath: '/login',
            securityFilter: this.securityFilter
        });
        this.router = [
            new ApiRestLoginRouter_1.default({
                basePath: '/login'
            }),
            new ApiRestTestRouter_1.default({
                basePath: '/test',
                securityFilter: this.securityFilter
            }),
            new ApiRestUserRouter_1.default({
                basePath: '/user',
                securityFilter: this.securityFilter
            }),
        ];
    }
    Main.prototype.init = function () {
        var _this = this;
        this.server.useRouters(this.router);
        this.server.start(function () {
            console.log("Init server on port " + _this.config.port);
        });
    };
    return Main;
}());
exports.default = Main;
//# sourceMappingURL=Main.js.map