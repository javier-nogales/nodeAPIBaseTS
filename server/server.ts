import express = require('express');

export default class Server {

    public app:express.Application;
    public port:number;

    constructor(port:number) {
        this.port = port;
        this.app = express();
    }

    static init(port:number) {
        return new Server(port);
    }

    private rootPathTest(req:express.Request, res:express.Response) {
        res.send('Hello World with Express and TypeScript');
    }

    start(callback:Function) {
        this.app.listen(this.port, callback());
        this.app.get('/', this.rootPathTest);
    }

}