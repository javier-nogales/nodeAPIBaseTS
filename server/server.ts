import express = require('express');

export default class Server {

    public app:express.Application;
    public port:number;

    constructor(port:number) {
        this.port = port;
        this.app = express();
    }

    public useJson() {
        this.app.use(express.json());
    }

    public useRouter(router:express.Router) {
        this.app.use(router);
    }

    static init(port:number) {
        return new Server(port);
    }

    start(callback:Function) {
        this.app.listen(this.port, callback());
    }

}