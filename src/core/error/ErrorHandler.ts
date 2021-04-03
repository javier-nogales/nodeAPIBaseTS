
import { Request, Response } from 'express';
import ApiRestAppError from './ApiRestAppError';
import ApiRestLoginError from './ApiRestLoginError';

class ErrorHandler {

    public controllerErrorHandler (res :Response, err :Error) {
        let trace:string|undefined = (err as Error).stack;
        console.log('ERROR Catched with controllerErrorHandler')
        console.log(`Endpoint /login Error:\n${trace}`);
        res.json({
            ok: false,
            result: trace
        });
    }
    
    public requestErrorHandler (res :Response, err:any) {
        if (err instanceof ApiRestAppError) {
            console.log('Aplication error catched.');
            if (err instanceof ApiRestLoginError) {
                console.log('Login error catched.');
            }
            let msg:string|undefined = (err as Error).message;
            let name:string|undefined = (err as Error).name;
            res.json({
                error: {
                    name,
                    msg
                }
            });
        } else {
            console.log('Unknow error catched.');
            res.status(500).json({
                error: "Unknow error"
            });
        }   
        
    }

}

export default new ErrorHandler();