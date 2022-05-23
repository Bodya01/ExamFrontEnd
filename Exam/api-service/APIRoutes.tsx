import APIConfig from "./APIConfig";

const APIRoutes = {

    getAuthenticationUrl: () => APIConfig.URL + "api/",

    getGroupUrl: () => APIConfig.URL + "api/groups",

    getExamUrl: () => APIConfig.URL + "api/exams/",
}

export default APIRoutes;