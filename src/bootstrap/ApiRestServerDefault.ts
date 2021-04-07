import express = require('express');
import ApiRestServer from './ApiRestServer';
import {ApiRestServerConfig} from './ApiRestServerConfig'
import ApiRestRouterBase from '../router/ApiRestRouterBase';

import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../core/error/ErrorHandler';

export default class ApiRestServerDefault implements ApiRestServer{

    private port:number;
    private app:express.Application;

    public static from(config:ApiRestServerConfig):ApiRestServerDefault {
        return new ApiRestServerDefault(config);
    }

    public start(callback:Function):void {
        this.app.listen(this.port, callback());
    }

    constructor(config:ApiRestServerConfig) {
        this.port = config.port;
        this.app = express();
        this.init();
    }

    private init():void {
        this.useJson();
        this.app.use(ErrorHandler.requestErrorHandler);
    }

    private useJson():void {
        this.app.use(express.json());
    }

    public useRouters(routers:ApiRestRouterBase[]):void {
        routers.forEach((router) => {
            router.get().use(ErrorHandler.requestErrorHandler);
            this.app.use(router.get());
        });
    }

    // private errorHandler(err:Error, req:Request, res:Response, next:NextFunction) {
    //     if (res.headersSent) {
    //         return next(err);
    //     }
    //     // res.status(500);
    //     // res.render('error', { error: err });

    //     return res.status(500).json('Something broke!');
    // }


}