export default class ApiRestAppError extends Error{

    constructor(...params:string[]) {
        super(...params);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = ApiRestAppError.name;
        
    }

}