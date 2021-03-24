"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ServerApp_1 = __importDefault(require("./src/ServerApp"));
var serverApp = new ServerApp_1.default({
    port: 3000,
    basePath: '/',
});
serverApp.init();
//# sourceMappingURL=exec.js.map