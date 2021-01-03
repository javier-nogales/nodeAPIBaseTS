import SecurityFilter from "../security/securityFilter";

export type ApiRestRouterConfig = {
    securityFilter:SecurityFilter,
    basePath:string,
}