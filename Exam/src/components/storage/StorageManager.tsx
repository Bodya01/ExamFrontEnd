import AsyncStorage from "@react-native-community/async-storage";
import AuthenticationResult from "../../../models/authentication-models/Response/AuthenticationResult";


const StorageManager = {
    setAuthData: (data: AuthenticationResult) => {
        AsyncStorage.setItem("userToken", data.jwtToken);
        AsyncStorage.setItem("tokenId", data.jwtId);
        AsyncStorage.setItem("expireTime", data.jwtExpireTime);
        AsyncStorage.setItem("refreshToken", data.refreshToken);
        AsyncStorage.setItem("user", JSON.stringify(data.user));
    },

    deleteAuthData: async () => {
        const promises: Promise<void>[] = [];

        promises.push(AsyncStorage.removeItem("userToken"));
        promises.push(AsyncStorage.removeItem("refreshToken"));
        promises.push(AsyncStorage.removeItem("expireTime"));
        promises.push(AsyncStorage.removeItem("tokenId"));
        promises.push(AsyncStorage.removeItem("user"));

        await Promise.all(promises);
    },
}

export default StorageManager;