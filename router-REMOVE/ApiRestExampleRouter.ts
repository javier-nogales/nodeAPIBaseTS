import { Router } from "express";
import { Request, Response } from 'express';
import User from "../src/endpoint/user/user";

export default class ApiRestExampleRouter {
    router:Router;
    
    constructor() {
        this.router = Router();
        this.build();
    }

    private build():void {
        this.router.get('/example', (req:Request, res:Response) => {
            res.json({
                ok: true,
                path: '/example'
            });
        });
    }
}