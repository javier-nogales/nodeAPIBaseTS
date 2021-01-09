import express = require('express');
import ApiRestServer from './ApiRestServer';
import Login from '../endpoint/login/Login';
import SecurityFilter from '../security/securityFilter';
import {ApiRestServerConfig} from './ApiRestServerConfig'
import ApiRestRouter from '../router/ApiRestRouter';

export default class ApiRestServerDefault implements ApiRestServer{

    private port:number;
    private app:express.Application;

    basePath: string;
    loginPath: string;
    securityFilter: SecurityFilter;

    public static from(config:ApiRestServerConfig):ApiRestServerDefault {
        return new ApiRestServerDefault(config);
    }

    public start(callback:Function):void {
        this.app.listen(this.port, callback());
    }

    constructor(config:ApiRestServerConfig) {
        this.port = config.port;
        this.basePath = config.basePath;
        this.loginPath = config.loginPath;
        this.securityFilter = config.securityFilter;
        this.app = express();
        this.init();
    }

    private init():void {
        this.useJson();
        this.enableLogin();
        // this.securizeAll();
    }

    private useJson():void {
        this.app.use(express.json());
    }

    private securizeAll():void {
        this.app.all(
            this.basePath,
            this.securityFilter.checkAuth,
            (req, res, next) => {
                next();
            }
        );
    }

    private enableLogin():void {
        this.app.post(
            this.loginPath, 
            (req:express.Request, res:express.Response) => {
                try {
                    let login:Login = new Login(
                                            req.body.login.id,
                                            req.body.login.passwd);
                    res.json({
                        ok: true,
                        path: this.loginPath,
                        result: login,
                    });
                } catch (err) {
                    let trace:string|undefined = (err as Error).stack;
                    console.log(`Endpoint /login Error:\n${trace}`);
                    res.json({
                        ok: false,
                        path: this.loginPath,
                        result: 'Error'
                    });
                }
        });
    }

    // public useRouters(...routes:express.Router[]):void {
    //     routes.forEach((route) => {
    //         this.app.use(route);
    //     });
    // }

    public useRouters(routers:ApiRestRouter[]):void {
        routers.forEach((router) => {
            this.app.use(router.get());
        });
    }


}