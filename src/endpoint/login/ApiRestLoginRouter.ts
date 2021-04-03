import ApiRestRouterBase from "../../router/ApiRestRouterBase";
import { Request, Response } from 'express';
import { ApiRestRouterConfig } from "../../router/ApiRestRouterConfig";
import Login from "./Login";
import ApiRestLoginController from "./ApiRestLoginController";
import ErrorHandler from "../../core/error/ErrorHandler";
import ApiRestResponseHandler from "../../core/http/ApiRestResponseHandler";
import ApiRestLoginValidationHandler from "./ApiRestLoginValidationHandler";

const paths = {
    LOGIN_USER: "/userlogin"
}

export default class ApiRestLoginRouter extends ApiRestRouterBase {

    private LOGIN_USER:String = "/userlogin";

    constructor(config:ApiRestRouterConfig) {
        super(config);
    }

    protected loadRoutes():void {
        this.loginUser();
    }

    private loginUser():void {
        this.router.post(
            this.basePath + paths.LOGIN_USER, 
            async (req:Request, res:Response) => {
                try {
                    //[1] Validate request entry
                    const login:Login = await ApiRestLoginValidationHandler.login(req);
                    //[2] Call to controller method
                    const dataOut:any = await ApiRestLoginController.signIn(login);
                    //[3] Send response
                    ApiRestResponseHandler.respond(res, dataOut);
                } catch (err) {
                    ErrorHandler.requestErrorHandler(res, err);
                }
        });
    }

}

