"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRestServerDefault_1 = __importDefault(require("./server/ApiRestServerDefault"));
var securityFilter_1 = __importDefault(require("./security/securityFilter"));
var ApiRestUserRouter_1 = __importDefault(require("./router/ApiRestUserRouter"));
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
            new ApiRestUserRouter_1.default({
                basePath: '/user',
                securityFilter: this.securityFilter
            }),
        ];
    }
    Main.prototype.init = function () {
        this.server.useRouters(this.router);
        this.server.start(function () {
            console.log('Main init server');
        });
    };
    return Main;
}());
exports.default = Main;
//# sourceMappingURL=main.js.map