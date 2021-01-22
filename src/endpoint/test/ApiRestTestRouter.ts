import { Router } from "express";
import ApiRestRouter from "../../router/ApiRestRouter";
import { Request, Response } from 'express';
import SecurityFilter from "../../security/securityFilter";
import { ApiRestRouterConfig } from "../../router/ApiRestRouterConfig";

export default class ApiRestTestRouter implements ApiRestRouter {

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

    public get():Router {
        return this.router;
    }

    private build():void {
        this.router.get(this.basePath, (req:Request, res:Response) => {
            res.json({
                ok: true,
                path: this.basePath,
            });
        });
    }

    private securizeRoute():void {
        this.router.all(
            this.basePath,
            this.securityFilter.checkAuth,
            (req, res, next) => {
                next();
            }
        );
    }
}