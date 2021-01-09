import { RequestHandler, Request, Response } from "express";

export default class SecurityFilter{

    constructor() {

    }

    public checkAuth(req:Request, res:Response, next:Function):void {
        let isLogged:boolean = false;
        if (isLogged) {
            next();
        } else {
            res
                .status(401)
                .json({
                    ok: false,
                    msg: 'Login requierd'
                });
        }
    }
}