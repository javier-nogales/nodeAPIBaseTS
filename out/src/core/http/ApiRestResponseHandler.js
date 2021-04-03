"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRestResponseHandler = /** @class */ (function () {
    function ApiRestResponseHandler() {
    }
    ApiRestResponseHandler.prototype.respond = function (res, dataOut) {
        res.json(dataOut);
    };
    return ApiRestResponseHandler;
}());
// Singleton
exports.default = new ApiRestResponseHandler();
//# sourceMappingURL=ApiRestResponseHandler.js.map