"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRestAppError_1 = __importDefault(require("./ApiRestAppError"));
var ApiRestLoginError_1 = __importDefault(require("./ApiRestLoginError"));
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.controllerErrorHandler = function (err, req, res, next) {
        var trace = err.stack;
        console.log('ERROR Catched with controllerErrorHandler');
        console.log("Endpoint /login Error:\n" + trace);
        res.json({
            ok: false,
            result: trace
        });
    };
    ErrorHandler.prototype.requestErrorHandler = function (err, req, res, next) {
        if (err instanceof ApiRestAppError_1.default) {
            console.log('Aplication error catched.');
            if (err instanceof ApiRestLoginError_1.default) {
                console.log('Login error catched.');
            }
            var msg = err.message;
            var name_1 = err.name;
            res.json({
                error: {
                    name: name_1,
                    msg: msg
                }
            });
        }
        else {
            console.log('Unknow error catched.');
            res.status(500);
            // res.render('error', {
            //     error: err
            // });
            var msg = err.message;
            var name_2 = err.name;
            res.json({
                error: {
                    name: name_2,
                    msg: msg
                }
            });
        }
    };
    return ErrorHandler;
}());
exports.default = new ErrorHandler();
//# sourceMappingURL=ErrorHandler.js.map