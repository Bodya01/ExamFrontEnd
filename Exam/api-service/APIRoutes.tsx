import APIConfig from "./APIConfig";

const APIRoutes = {
    getGreetingUrl: () => APIConfig.URL + "api/greeting/",
}

export default APIRoutes;