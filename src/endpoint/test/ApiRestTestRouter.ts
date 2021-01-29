import { Router } from "express";
import ApiRestRouterBase from "../../router/ApiRestRouterBase";
import { Request, Response } from 'express';
import SecurityFilter from "../../security/securityFilter";
import { ApiRestRouterConfig } from "../../router/ApiRestRouterConfig";

export default class ApiRestTestRouter extends ApiRestRouterBase {

    constructor(config:ApiRestRouterConfig) {
        super(config);
    }

    protected loadRoutes():void {
        this.router.get(this.basePath, (req:Request, res:Response) => {
            res.json({
                ok: true,
                path: this.basePath,
            });
        });
    }
}