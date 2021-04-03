import ApiRestAppError from "./ApiRestAppError";

export default class ApiRestLoginError extends ApiRestAppError{

    constructor(...params:string[]) {
        super(...params);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = ApiRestLoginError.name;
    }

}