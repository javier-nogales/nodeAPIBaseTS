"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ApiRestExampleRouter = /** @class */ (function () {
    function ApiRestExampleRouter() {
        this.router = express_1.Router();
        this.build();
    }
    ApiRestExampleRouter.prototype.build = function () {
        this.router.get('/example', function (req, res) {
            res.json({
                ok: true,
                path: '/example'
            });
        });
    };
    return ApiRestExampleRouter;
}());
exports.default = ApiRestExampleRouter;
//# sourceMappingURL=ApiRestExampleRouter.js.map