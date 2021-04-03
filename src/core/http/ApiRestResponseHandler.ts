import {Response} from 'express';

class ApiRestResponseHandler {

    public respond(res:Response, dataOut:any) {
        res.json(dataOut);
    }

}

// Singleton
export default new ApiRestResponseHandler();