"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRestServerDefault_1 = __importDefault(require("./server/ApiRestServerDefault"));
var securityFilter_1 = __importDefault(require("./security/securityFilter"));
var ApiRestUserRouter_1 = __importDefault(require("./router/ApiRestUserRouter"));
var ApiRestExampleRouter_1 = __importDefault(require("./router/ApiRestExampleRouter"));
////////////////////////////////////////////////////////////
// Router
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Server
////////////////////////////////////////////////////////////
var serverConfig = {
    port: 3000,
    basePath: '/',
    loginPath: '/login',
    securityFilter: new securityFilter_1.default(),
};
var server = ApiRestServerDefault_1.default.from(serverConfig);
// server.useRouter(mainRouter);
////////////////////////////////////////////////////////////
// User (remove)
////////////////////////////////////////////////////////////
var userRouter = new ApiRestUserRouter_1.default({
    securityFilter: new securityFilter_1.default(),
    basePath: '/user'
});
var exampleRouter = new ApiRestExampleRouter_1.default();
// server.useRouters(userRouter.router);
// server.useRouters(exampleRouter.router);
server.start(function () {
    console.log("Server running at port " + serverConfig.port);
});
// function logClass (target: any) {
//     console.log('logClass -> ', target);
//     return target;
// }  
// function changeName(data:string) {
//   return function<T extends { new(...args:any[]):{} }> (constructor:T) {
//     let c:T = class extends constructor {
//       name = data;
//       surname = 'Nogales';
//     }
//     c.prototype.setSurname = function (surname:string) {
//       this.surname = surname;
//     }
//     return c;
//   }
// }
// @changeName('Carlos')
// class Tests {
//   public name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
//   public setName(value:string) {
//     this.name = value;
//   }
//   public getName() {
//     return this.name;
//   }
// }
// const t = new Tests("Javi");
// console.log(t);
//# sourceMappingURL=app.js.map