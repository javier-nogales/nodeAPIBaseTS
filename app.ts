import Server from './server/server';
import router from './router/router';

const port:number = 3000;
const server:Server = Server.init(port);

server.useJson();
server.useRouter(router);


server.start(() => {
    console.log(`Server running at port ${port}`);
});