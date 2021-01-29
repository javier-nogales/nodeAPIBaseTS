import { Router } from "express";
import SecurityFilter from "../security/securityFilter";
import ApiRestRouter from "./ApiRestRouter";
import { ApiRestRouterConfig } from "./ApiRestRouterConfig";

export default abstract class ApiRestRouterBase implements ApiRestRouter{

    protected router:Router;
    protected basePath:string;

    protected securityFilter?:SecurityFilter;

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

    protected abstract loadRoutes():void;


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