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
var user_1 = __importDefault(require("./user"));
var ApiRestRouterBase_1 = __importDefault(require("../../router/ApiRestRouterBase"));
var ApiRestUserRouter = /** @class */ (function (_super) {
    __extends(ApiRestUserRouter, _super);
    function ApiRestUserRouter(config) {
        return _super.call(this, config) || this;
    }
    ApiRestUserRouter.prototype.loadRoutes = function () {
        var _this = this;
        this.router.post(this.basePath, function (req, res) {
            try {
                var user = new user_1.default(req.body.user.id, req.body.user.name, req.body.user.age);
                res.json({
                    ok: true,
                    path: _this.basePath,
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
}(ApiRestRouterBase_1.default));
exports.default = ApiRestUserRouter;
//# sourceMappingURL=ApiRestUserRouter.js.map