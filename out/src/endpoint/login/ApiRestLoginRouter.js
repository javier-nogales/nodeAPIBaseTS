"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRestRouterBase_1 = __importDefault(require("../../router/ApiRestRouterBase"));
var Login_1 = __importDefault(require("../user/Login"));
var ApiRestLoginController_1 = __importDefault(require("./ApiRestLoginController"));
var ApiRestLoginRouter = /** @class */ (function (_super) {
    __extends(ApiRestLoginRouter, _super);
    function ApiRestLoginRouter(config) {
        return _super.call(this, config) || this;
    }
    ApiRestLoginRouter.prototype.loadRoutes = function () {
        var _this = this;
        this.router.post(this.basePath, function (req, res) {
            ApiRestLoginController_1.default.signIn(req.body.login);
            try {
                var login = new Login_1.default(req.body.login.id, req.body.login.passwd);
                res.json({
                    ok: true,
                    path: _this.basePath,
                    result: login,
                });
            }
            catch (err) {
                var trace = err.stack;
                console.log("Endpoint /login Error:\n" + trace);
                res.json({
                    ok: false,
                    path: _this.basePath,
                    result: 'Error'
                });
            }
        });
    };
    return ApiRestLoginRouter;
}(ApiRestRouterBase_1.default));
exports.default = ApiRestLoginRouter;
//# sourceMappingURL=ApiRestLoginRouter.js.map