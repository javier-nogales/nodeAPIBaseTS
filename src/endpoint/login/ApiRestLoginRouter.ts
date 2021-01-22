import { Router } from "express";
import ApiRestRouter from "../../router/ApiRestRouter";
import { Request, Response } from 'express';
import { ApiRestRouterConfig } from "../../router/ApiRestRouterConfig";
import Login from "../user/Login";

export default class ApiRestLoginRouter implements ApiRestRouter {

    router:Router;
    basePath:string;

    constructor(config:ApiRestRouterConfig) {
        this.router = Router();
        this.basePath = config.basePath;
        this.build();
    }

    public get():Router {
        return this.router;
    }

    private build():void {
        this.router.post(
            this.basePath, 
            (req:Request, res:Response) => {
                try {
                    let login:Login = new Login(req.body.login.id,
                                                req.body.login.passwd);
                    res.json({
                        ok: true,
                        path: this.basePath,
                        result: login,
                    });
                } catch (err) {
                    let trace:string|undefined = (err as Error).stack;
                    console.log(`Endpoint /login Error:\n${trace}`);
                    res.json({
                        ok: false,
                        path: this.basePath,
                        result: 'Error'
                    });
                }
        });
    }
}