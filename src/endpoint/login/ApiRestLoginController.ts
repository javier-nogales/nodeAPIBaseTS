import Login from "../user/Login";

class ApiRestLoginController {

    public async signIn(login:Login) {
        // throw new Error("Custom error has been throwed");
        let json = JSON.parse("esto no es un JSON");
        return login;
    }

}

// Singleton class
export default new ApiRestLoginController;