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
var ErrorHandler_1 = __importDefault(require("../../error/ErrorHandler"));
var ApiRestLoginRouter = /** @class */ (function (_super) {
    __extends(ApiRestLoginRouter, _super);
    function ApiRestLoginRouter(config) {
        return _super.call(this, config) || this;
    }
    ApiRestLoginRouter.prototype.loadRoutes = function () {
        var _this = this;
        this.router.post(this.basePath, function (req, res) {
            try {
                var login = new Login_1.default(req.body.login.id, req.body.login.passwd);
                ApiRestLoginController_1.default.signIn(login)
                    .then(function (login) {
                    res.json({
                        ok: true,
                        path: _this.basePath,
                        result: login,
                    });
                })
                    .catch(function (err) { return ErrorHandler_1.default.controllerErrorHandler(err, res); });
            }
            catch (err) {
                ErrorHandler_1.default.requestErrorHandler(err, res);
            }
        });
    };
    return ApiRestLoginRouter;
}(ApiRestRouterBase_1.default));
exports.default = ApiRestLoginRouter;
//# sourceMappingURL=ApiRestLoginRouter.js.map