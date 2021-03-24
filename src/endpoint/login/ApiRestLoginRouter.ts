import ApiRestRouterBase from "../../router/ApiRestRouterBase";
import { Request, Response } from 'express';
import { ApiRestRouterConfig } from "../../router/ApiRestRouterConfig";
import Login from "../user/Login";
import ApiRestLoginController from "./ApiRestLoginController";
import ErrorHandler from "../../error/ErrorHandler";

export default class ApiRestLoginRouter extends ApiRestRouterBase {

    constructor(config:ApiRestRouterConfig) {
        super(config);
    }

    protected loadRoutes():void {
        this.loginUser();
    }

    private loginUser():void {
        this.router.post(
            this.basePath, 
            (req:Request, res:Response) => {
                try {
                    // map request 
                    let login:Login = new Login(req.body.login.id,
                                                req.body.login.passwd);
                    // call to controller
                    ApiRestLoginController.signIn(login)
                                          .then((login:Login) => {
                                              // map return to response
                                            res.json({
                                                ok: true,
                                                path: this.basePath,
                                                result: login,
                                            });
                                          })
                                          .catch(err => ErrorHandler.controllerErrorHandler(err, res));
                   
                } catch (err) {
                    ErrorHandler.requestErrorHandler(err, res);
                }
        });
    }

}

