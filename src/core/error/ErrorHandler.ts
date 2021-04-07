
import { NextFunction, Request, Response } from 'express';
import ApiRestAppError from './ApiRestAppError';
import ApiRestLoginError from './ApiRestLoginError';

class ErrorHandler {

    public controllerErrorHandler (err:Error, req:Request, res:Response, next:NextFunction) {
        let trace:string|undefined = (err as Error).stack;
        console.log('ERROR Catched with controllerErrorHandler')
        console.log(`Endpoint /login Error:\n${trace}`);
        res.json({
            ok: false,
            result: trace
        });
    }
    
    public requestErrorHandler (err:Error, req:Request, res:Response, next:NextFunction) {
        let msg:string = 'Copntact system administrator'
        let name:string = 'Unknow error';
        if (err instanceof ApiRestAppError) {
            console.log('Aplication error catched.');
            if (err instanceof ApiRestLoginError) {
                console.log('Login error catched.');
            }
            let msg:string|undefined = (err as Error).message;
            let name:string|undefined = (err as Error).name;
            res.status(err.status || 500)
            res.json({
                error: {
                    name,
                    msg
                }
            });
        } else {
            console.log('Unknow error catched.');
            res.status(500);
        }
        res.json({
            error: {
                name,
                msg
            }
        });
        
    }

}

export default new ErrorHandler();