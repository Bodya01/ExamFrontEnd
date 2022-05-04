import APIConfig from "./APIConfig";

const APIRoutes = {
    getAuthenticationUrl: () => APIConfig.URL + "api/",
}

export default APIRoutes;