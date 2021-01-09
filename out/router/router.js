"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("../model/user"));
var securityFilter_1 = __importDefault(require("../security/securityFilter"));
var router = express_1.Router();
router.all('/*', new securityFilter_1.default().checkAuth, function (req, res, next) {
    next();
});
router.get('/', function (req, res) {
    res.json({
        ok: true,
        msg: 'Hello World with router'
    });
});
router.get('/get/:id', function (req, res) {
    var id = req.params.id;
    res.json({
        ok: true,
        path: '/get/:id',
        result: "/get/" + id,
    });
});
router.post('/post/:id', function (req, res) {
    var id = req.params.id;
    res.json({
        ok: true,
        path: '/post/:id',
        result: "/post/" + id,
    });
});
router.post('/user/', function (req, res) {
    try {
        var user = new user_1.default(req.body.user.id, req.body.user.name, req.body.user.age);
        res.json({
            ok: true,
            path: '/user',
            result: user,
        });
    }
    catch (err) {
        var trace = err.stack;
        console.log("Endpoint /user Error:\n" + trace);
        res.json({
            ok: false,
            path: 'user',
            result: 'Error'
        });
    }
});
// router.post('/login', (req:Request, res:Response) => {
//     try {
//         let login:Login = new Login(
//                                 req.body.login.id,
//                                 req.body.login.passwd);
//         res.json({
//             ok: true,
//             path: '/login',
//             result: login,
//         });
//     } catch (err) {
//         let trace:string|undefined = (err as Error).stack;
//         console.log(`Endpoint /login Error:\n${trace}`);
//         res.json({
//             ok: false,
//             path: 'login',
//             result: 'Error'
//         });
//     }
// });
exports.default = router;
//# sourceMappingURL=router.js.map