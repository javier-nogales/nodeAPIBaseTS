export default class User {

    public id:string;
    public name:string;
    public age:number;

    constructor(id:string, name:string, age:number) {
        this.id = id;
        this.name = name;
        this.age = age;
        User.assertIsValid(this);
    }

    public static isValid(user:User) {
        return typeof user.id === 'string' &&
               typeof user.name === 'string' &&
               typeof user.age === 'number';
    }

    public static assertIsValid(user:User) {
        if (!User.isValid(user))
            throw Error(`
                Invalid User arguments: [${user.id}/${typeof user.id}], [${user.name}/${typeof user.name}], [${user.age}/${typeof user.age}] do not match to (string/string/number)`
            );
    }
}