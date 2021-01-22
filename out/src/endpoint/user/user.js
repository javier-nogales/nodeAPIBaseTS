"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        User.assertIsValid(this);
    }
    User.isValid = function (user) {
        return typeof user.id === 'string' &&
            typeof user.name === 'string' &&
            typeof user.age === 'number';
    };
    User.assertIsValid = function (user) {
        if (!User.isValid(user))
            throw Error("Invalid User arguments: [" + user.id + "/" + typeof user.id + "], [" + user.name + "/" + typeof user.name + "], [" + user.age + "/" + typeof user.age + "] do not match to (string/string/number)");
    };
    return User;
}());
exports.default = User;
//# sourceMappingURL=user.js.map