import SecurityFilter from "../security/securityFilter";
import {Router, Request, Response} from 'express';
import Login from "../model/Login";

export default class ApiRestRouter {
    router: Router;
    
    private constructor () {
        this.router = Router();
    }

    public static from():ApiRestRouter {
        return new ApiRestRouter();
    }

    
    

}