import SecurityFilter from "../security/securityFilter";

export interface ApiRestRouterConfig {
    basePath:string;
    securityFilter?:SecurityFilter;
}