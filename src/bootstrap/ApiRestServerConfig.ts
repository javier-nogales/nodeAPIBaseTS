import SecurityFilter from "../security/securityFilter";

export type ApiRestServerConfig = {
    port: number,
    basePath: string,
    loginPath: string,
    securityFilter: SecurityFilter
}