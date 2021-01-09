"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Login_1 = __importDefault(require("../model/Login"));
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    securizeWith(securityFilter) {
        this.app.all('/', securityFilter.requireLogin, (req, res, next) => {
            next();
        });
    }
    setLoginPath(url) {
        this.app.post(url, (req, res) => {
            try {
                let login = new Login_1.default(req.body.login.id, req.body.login.passwd);
                res.json({
                    ok: true,
                    path: '/login',
                    result: login,
                });
            }
            catch (err) {
                let trace = err.stack;
                console.log(`Endpoint /login Error:\n${trace}`);
                res.json({
                    ok: false,
                    path: 'login',
                    result: 'Error'
                });
            }
        });
    }
    useJson() {
        this.app.use(express.json());
    }
    useRouter(router) {
        this.app.use(router);
    }
    static init(port) {
        return new Server(port);
    }
    start(callback) {
        this.app.listen(this.port, callback());
    }
}
exports.default = Server;
