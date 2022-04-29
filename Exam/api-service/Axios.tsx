import axios from "axios";

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.response.use(
    async (response) => {
        return response;
    },
);

export default Axios;
