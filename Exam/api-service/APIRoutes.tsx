import APIConfig from "./APIConfig";

const APIRoutes = {

    getAuthenticationUrl: () => APIConfig.URL + "api/",

    getGroupUrl: () => APIConfig.URL + "api/groups/",

    getExamUrl: () => APIConfig.URL + "api/exams/",
    
    getSubjectUrl: () => APIConfig.URL + "api/subjects/",

    getMarkUrl: () => APIConfig.URL + "api/marks/",

    getStudentUrl: () => APIConfig.URL + "api/users/students/"
}

export default APIRoutes;