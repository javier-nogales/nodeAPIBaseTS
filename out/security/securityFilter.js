"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecurityFilter = /** @class */ (function () {
    function SecurityFilter() {
    }
    SecurityFilter.prototype.checkAuth = function (req, res, next) {
        var isLogged = false;
        if (isLogged) {
            next();
        }
        else {
            res
                .status(401)
                .json({
                ok: false,
                msg: 'Login requierd'
            });
        }
    };
    return SecurityFilter;
}());
exports.default = SecurityFilter;
//# sourceMappingURL=securityFilter.js.map