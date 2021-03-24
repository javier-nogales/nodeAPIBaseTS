"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.controllerErrorHandler = function (err, res) {
        var trace = err.stack;
        console.log('ERROR Catched with controllerErrorHandler');
        console.log("Endpoint /login Error:\n" + trace);
        res.json({
            ok: false,
            result: trace
        });
    };
    ErrorHandler.requestErrorHandler = function (err, res) {
        var trace = err.stack;
        console.log('ERROR Catched by requestErrorHandler');
        console.log("Endpoint /login Error:\n" + trace);
        res.json({
            ok: false,
            result: trace
        });
    };
    return ErrorHandler;
}());
exports.default = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map