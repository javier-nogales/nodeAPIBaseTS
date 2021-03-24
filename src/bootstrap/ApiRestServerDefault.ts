import express = require('express');
import ApiRestServer from './ApiRestServer';
import {ApiRestServerConfig} from './ApiRestServerConfig'
import ApiRestRouterBase from '../router/ApiRestRouterBase';

import { Request, Response } from 'express';

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
        this.app.use(this.errorHandler);
    }

    private useJson():void {
        this.app.use(express.json());
    }

    public useRouters(routers:ApiRestRouterBase[]):void {
        routers.forEach((router) => {
            this.app.use(router.get());
        });
    }

    private errorHandler(err:Error, req:Request, res:Response, next:Function) {
        if (res.headersSent) {
            return next(err);
        }
        // res.status(500);
        // res.render('error', { error: err });

        return res.status(500).render('500');
    }


}