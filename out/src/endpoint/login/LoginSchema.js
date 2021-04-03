"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var LoginSchema = /** @class */ (function () {
    function LoginSchema() {
        this.loginUser = joi_1.default.object({
            id: joi_1.default.string()
                .alphanum()
                .min(4)
                .max(10)
                .required(),
            passwd: joi_1.default.string()
                .alphanum()
                .min(4)
                .required()
        });
    }
    return LoginSchema;
}());
exports.default = new LoginSchema();
// module LoginSchema {
//     export loginUserSchema = Joi.object({
//         id: Joi.string()
//                .alphanum()
//                .min(4)
//                .required(),
//         passwd: Joi.string()
//                    .alphanum()
//                    .min(4)
//                    .required()
//     });
// }
// const loginUserSchema = Joi.object({
//     id: Joi.string()
//            .alphanum()
//            .min(4)
//            .required(),
//     passwd: Joi.string()
//                .alphanum()
//                .min(4)
//                .required()
// });
//# sourceMappingURL=LoginSchema.js.map