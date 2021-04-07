import ApiRestAppError from "../../core/error/ApiRestAppError";
import ApiRestLoginError from "../../core/error/ApiRestLoginError";
import Login from "./Login";

class ApiRestLoginController {

    public async signIn(login:Login):Promise<Login> {
        // throw new Error("Custom error has been throwed");
        // let json = JSON.parse("esto no es un JSON");
        // throw new ApiRestLoginError("Wrong user or password.");
        throw new Error("Test error");
        return login;
    }

}

// Singleton class
export default new ApiRestLoginController;