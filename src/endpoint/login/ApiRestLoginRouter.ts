import ApiRestRouterBase from "../../router/ApiRestRouterBase";
import { Request, Response } from 'express';
import { ApiRestRouterConfig } from "../../router/ApiRestRouterConfig";
import Login from "../user/Login";
import ApiRestLoginController from "./ApiRestLoginController";

export default class ApiRestLoginRouter extends ApiRestRouterBase {

    constructor(config:ApiRestRouterConfig) {
        super(config);
    }

    protected loadRoutes():void {
        this.router.post(
            this.basePath, 
            (req:Request, res:Response) => {
                ApiRestLoginController.signIn(req.body.login);
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