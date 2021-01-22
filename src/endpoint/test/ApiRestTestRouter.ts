import { Router } from "express";
import ApiRestRouter from "../../router/ApiRestRouter";
import { Request, Response } from 'express';
import SecurityFilter from "../../security/securityFilter";
import { ApiRestRouterConfig } from "../../router/ApiRestRouterConfig";

export default class ApiRestTestRouter implements ApiRestRouter {

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

    private init():void {
        if (this.securityFilter) {
            this.securizeRoute(this.securityFilter);
        }
        this.loadRoutes();
    }

    private loadRoutes():void {
        this.router.get(this.basePath, (req:Request, res:Response) => {
            res.json({
                ok: true,
                path: this.basePath,
            });
        });
    }

    private securizeRoute(securityFilter:SecurityFilter):void {
        this.router.all(
            this.basePath,
            securityFilter.checkAuth,
            (req, res, next) => {
                next();
            }
        );
    }
}