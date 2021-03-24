
import { Request, Response } from 'express';

export default class ErrorHandler {

    public static controllerErrorHandler (err :Error, res :Response) {
        let trace:string|undefined = (err as Error).stack;
        console.log('ERROR Catched with controllerErrorHandler')
        console.log(`Endpoint /login Error:\n${trace}`);
        res.json({
            ok: false,
            result: trace
        });
    }
    
    public static requestErrorHandler (err :Error, res :Response) {
        let trace:string|undefined = (err as Error).stack;
        console.log('ERROR Catched by requestErrorHandler')
        console.log(`Endpoint /login Error:\n${trace}`);
        res.json({
            ok: false,
            result: trace
        });
    }

}