import { ApiRestConfig } from "./config/ApiRestConfig";
import ApiRestServerDefault from "./bootstrap/ApiRestServerDefault";
import ApiRestServer from "./bootstrap/ApiRestServerDefault";
import ApiRestRouter from "./router/ApiRestRouter";
import SecurityFilter from "./security/securityFilter";
import ApiRestUserRouter from "./endpoint/user/ApiRestUserRouter";
import ApiRestTestRouter from "./endpoint/test/ApiRestTestRouter";
import ApiRestLoginRouter from "./endpoint/login/ApiRestLoginRouter";

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
            new ApiRestLoginRouter({
                basePath: '/login',
                securityFilter: this.securityFilter // not used
            }),
            new ApiRestTestRouter({
                basePath: '/test',
                securityFilter: this.securityFilter
            }),
            new ApiRestUserRouter({
                basePath: '/user',
                securityFilter: this.securityFilter
            }),
        ];
    }

    public init() {
        this.server.useRouters(this.router);
        this.server.start(() => {
            console.log(`Init server on port ${this.config.port}`);
        });
    }
}