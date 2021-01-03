import ApiRestServer from './server/ApiRestServer';
import { ApiRestServerConfig } from './model/ApiRestServerConfig';
import SecurityFilter from './security/securityFilter';
import ApiRestUserRouter from './router/ApiRestUserRouter';
import ApiRestExampleRouter from './router/ApiRestExampleRouter';

////////////////////////////////////////////////////////////
// Router
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
// Server
////////////////////////////////////////////////////////////
const serverConfig:ApiRestServerConfig = {
    port: 3000,
    basePath: '/',
    loginPath: '/login',
    securityFilter: new SecurityFilter(),

}
const server:ApiRestServer = ApiRestServer.from(serverConfig);
// server.useRouter(mainRouter);

////////////////////////////////////////////////////////////
// User (remove)
////////////////////////////////////////////////////////////
const userRouter = new ApiRestUserRouter({
                        securityFilter: new SecurityFilter(),
                        basePath: '/user'
                    });
const exampleRouter = new ApiRestExampleRouter();
server.useRoutes(userRouter.router);

server.useRoutes(exampleRouter.router);

server.start(() => {
    console.log(`Server running at port ${serverConfig.port}`);
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