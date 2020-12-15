import Server from './server/server';

const port:number = 3000;
const server = Server.init(port);

server.start(() => {
    console.log(`Server running at port ${port}`);
});