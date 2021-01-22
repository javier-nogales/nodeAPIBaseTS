"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Login = /** @class */ (function () {
    function Login(id, passwd) {
        this.id = id;
        this.passwd = passwd;
        Login.assertIsValid(this);
    }
    Login.isValid = function (user) {
        return typeof user.id === 'string' &&
            typeof user.passwd === 'string';
    };
    Login.assertIsValid = function (login) {
        if (!Login.isValid(login))
            throw Error("Invalid User arguments: [" + login.id + "/" + typeof login.id + "], [" + login.passwd + "/" + typeof login.passwd + "] do not match to (string/string/number)");
    };
    return Login;
}());
exports.default = Login;
//# sourceMappingURL=Login.js.map