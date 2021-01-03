export default class Login {

    public id:string;
    public passwd:string;

    constructor(id:string, passwd:string) {
        this.id = id;
        this.passwd = passwd;
        Login.assertIsValid(this);
    }

    public static isValid(user:Login) {
        return typeof user.id === 'string' &&
               typeof user.passwd === 'string';
    }

    public static assertIsValid(login:Login) {
        if (!Login.isValid(login))
            throw Error(
                `Invalid User arguments: [${login.id}/${typeof login.id}], [${login.passwd}/${typeof login.passwd}] do not match to (string/string/number)`
            );
    }
}