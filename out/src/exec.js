"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Main_1 = __importDefault(require("./Main"));
var main = new Main_1.default({
    port: 3000,
    basePath: '/',
});
main.init();
//# sourceMappingURL=exec.js.map