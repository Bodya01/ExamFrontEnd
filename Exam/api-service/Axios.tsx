import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import StorageManager from "../src/components/storage/StorageManager";
import AuthService from "./auth-service/AuthService";

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.request.use(
    async (req: any) => {
        if (Date.now() > Date.parse(await StorageManager.getTokenExpireTime() ?? "")) {
            const RefreshToken = await StorageManager.getRefreshToken();
            const Token = await StorageManager.getToken();
            const result = await AuthService.refresh({
                RefreshToken: RefreshToken!,
                Token: Token!
            }).then((res) => {
                StorageManager.setAuthData(res.data);
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
