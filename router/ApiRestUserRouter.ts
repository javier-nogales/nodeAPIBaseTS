import { Router } from "express";
import { Request, Response } from 'express';
import { ApiRestRouterConfig } from "../model/ApiRestRouterConfig";
import User from "../model/user";
import SecurityFilter from "../security/securityFilter";

export default class ApiRestUserRouter {
    router:Router;
    securityFilter:SecurityFilter;
    basePath:string;

    constructor(config:ApiRestRouterConfig) {
        this.router = Router();
        this.securityFilter = config.securityFilter;
        this.basePath = config.basePath;
        this.securizeRoute();
        this.build();
    }

    private build():void {
        this.router.post(this.basePath, (req:Request, res:Response) => {
            try {
                let user:User = new User(req.body.user.id,
                                         req.body.user.name,
                                         req.body.user.age);
                res.json({
                    ok: true,
                    path: '/user',
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

    private securizeRoute():void {
        this.router.all(
            '/user',
            this.securityFilter.checkAuth,
            (req, res, next) => {
                next();
            }
        );
    }
}