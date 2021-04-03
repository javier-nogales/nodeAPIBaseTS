import {Request} from 'express';
import Login from './Login';
import LoginSchema from './LoginSchema';

class ApiRestLoginValidationHandler {

    public login(req :Request):Promise<Login> {
        return LoginSchema.loginUser.validateAsync(req.body.login);
    } 

}

// Singleton
export default new ApiRestLoginValidationHandler();