import { Router } from "express";
import { Request, Response } from 'express';
import { ApiRestRouterConfig } from "../../router/ApiRestRouterConfig";
import User from "./user";
import SecurityFilter from "../../security/securityFilter";
import ApiRestRouterBase from "../../router/ApiRestRouterBase";

export default class ApiRestUserRouter extends ApiRestRouterBase {

    constructor(config:ApiRestRouterConfig) {
        super(config);
    }

    protected loadRoutes():void {
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
}