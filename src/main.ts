import { ApiRestConfig } from "./config/ApiRestConfig";
import ApiRestServerDefault from "./bootstrap/ApiRestServerDefault";
import ApiRestServer from "./bootstrap/ApiRestServerDefault";
import ApiRestRouter from "./router/ApiRestRouter";
import SecurityFilter from "./security/securityFilter";
import ApiRestUserRouter from "./endpoint/user/ApiRestUserRouter";

export default class Main {

    private config:ApiRestConfig;
    private server:ApiRestServer;
    private router:ApiRestRouter[];
    private securityFilter:SecurityFilter;

    constructor(config:ApiRestConfig) {
        this.config = config;
        this.securityFilter = new SecurityFilter();
        this.server = new ApiRestServerDefault({
            port: config.port,
            basePath: config.basePath,
            loginPath: '/login',
            securityFilter: this.securityFilter
        });
        this.router = [
            new ApiRestUserRouter({
                basePath: '/user',
                securityFilter: this.securityFilter
            }),
        ];
    }

    public init() {
        this.server.useRouters(this.router);

        this.server.start(() => {
            console.log('Main init server');
        });
    }
}