import APIConfig from "./APIConfig";

const APIRoutes = {
    getAuthenticationUrl: () => APIConfig.URL + "api/",

    getCheckAuthUrl: () => APIConfig.URL + "api/auth/"
}

export default APIRoutes;