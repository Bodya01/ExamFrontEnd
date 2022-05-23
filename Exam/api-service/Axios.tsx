import axios from "axios";
import AuthenticationResult from "../models/authentication-models/Response/AuthenticationResult";
import StorageManager from "../src/components/storage/StorageManager";
import APIRoutes from "./APIRoutes";

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.request.use(
    async (req: any) => {
        if (Date.now() > Date.parse(await StorageManager.getTokenExpireTime() ?? "")) {
            const RefreshToken = await StorageManager.getRefreshToken();
            const Token = await StorageManager.getToken();
            axios.post(
                APIRoutes.getAuthenticationUrl() + "refresh",
                { RefreshToken, Token }).then((res) => {
                    let result: AuthenticationResult = res.data
                    StorageManager.setAuthData(result);
                });
        }
        const token = await StorageManager.getToken();

        if (token) {
            req.headers.Authorization = "Bearer " + token;
        }

        return req;
    },

    async (error: any) => {

        return Promise.reject(error);
    }
)

Axios.interceptors.response.use(
    async (response) => {
        return response;
    },
);

export default Axios;
