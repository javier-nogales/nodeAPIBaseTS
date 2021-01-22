import { Router } from "express";
import { Request, Response } from 'express';
import { ApiRestRouterConfig } from "../../router/ApiRestRouterConfig";
import User from "./user";
import SecurityFilter from "../../security/securityFilter";
import ApiRestRouter from "../../router/ApiRestRouter";

export default class ApiRestUserRouter implements ApiRestRouter {
    router:Router;
    basePath:string;

    securityFilter?:SecurityFilter;

    constructor(config:ApiRestRouterConfig) {
        this.router = Router();
        this.basePath = config.basePath;
        this.securityFilter = config.securityFilter;
        
        this.init();
    }

    public get():Router {
        return this.router;
    }

    private init() {
        if (this.securityFilter) {
            this.securizeRoutes(this.securityFilter);
        }
        this.loadRoutes();
    }

    private loadRoutes():void {
        this.router.post(this.basePath, (req:Request, res:Response) => {
            try {
                let user:User = new User(req.body.user.id,
                                         req.body.user.name,
                                         req.body.user.age);
                res.json({
                    ok: true,
                    path: this.basePath,
                    result: user,
                });
            } catch (err) {
                let trace:string|undefined = (err as Error).stack;
                console.log(`Endpoint /user Error:\n${trace}`);
                res.json({
                    ok: false,
                    path: 'user',
                    result: 'Error'
                });
            }
        });
    }

    private securizeRoutes(securityFilter:SecurityFilter):void {
        this.router.all(
            this.basePath,
            securityFilter.checkAuth,
            (req, res, next) => {
                next();
            }
        )
    }
}