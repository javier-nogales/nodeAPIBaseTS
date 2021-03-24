import ServerApp from "./src/ServerApp";

const serverApp = new ServerApp({
    port: 3000,
    basePath: '/',
});

serverApp.init();