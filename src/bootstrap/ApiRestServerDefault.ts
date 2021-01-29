import express = require('express');
import ApiRestServer from './ApiRestServer';
import {ApiRestServerConfig} from './ApiRestServerConfig'
import ApiRestRouterBase from '../router/ApiRestRouterBase';

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
    }

    private useJson():void {
        this.app.use(express.json());
    }

    public useRouters(routers:ApiRestRouterBase[]):void {
        routers.forEach((router) => {
            this.app.use(router.get());
        });
    }


}