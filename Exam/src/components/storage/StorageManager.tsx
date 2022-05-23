import AsyncStorage from "@react-native-community/async-storage";
import AuthenticationResult from "../../../models/authentication-models/Response/AuthenticationResult";
import User from "../../../models/user-models/User";


const StorageManager = {
    setAuthData: (data: AuthenticationResult) => {
        AsyncStorage.setItem("userToken", data.jwtToken);
        AsyncStorage.setItem("tokenId", data.jwtId);
        AsyncStorage.setItem("expireTime", data.jwtExpireTime);
        AsyncStorage.setItem("refreshToken", data.refreshToken);
        AsyncStorage.setItem("user", JSON.stringify(data.user));
        AsyncStorage.setItem("userType", "groupId" in data.user ? "Student" : "Teacher");
        AsyncStorage.getItem("pictureColor").then((color) => {
            if (!color) {
                AsyncStorage.setItem("pictureColor", `#${Math.floor(Math.random() * 16777215).toString(16)}`);
            }
        });
    },

    deleteAuthData: async () => {
        const promises: Promise<void>[] = [];

        promises.push(AsyncStorage.removeItem("userToken"));
        promises.push(AsyncStorage.removeItem("refreshToken"));
        promises.push(AsyncStorage.removeItem("expireTime"));
        promises.push(AsyncStorage.removeItem("tokenId"));
        promises.push(AsyncStorage.removeItem("user"));
        promises.push(AsyncStorage.removeItem("userType"))
        promises.push(AsyncStorage.removeItem("pictureColor"))

        await Promise.all(promises);
    },

    changeTheme: (themeState: string) => {
        AsyncStorage.setItem("theme", themeState);
    },

    getPictureColor: async () => {
        return await AsyncStorage.getItem("pictureColor");
    },

    getStoredUser: async () => {
        const storedUser = await AsyncStorage.getItem("user");
        return JSON.parse(storedUser!) as User
    },

    getTokenExpireTime: async () => {
        return AsyncStorage.getItem("expireTime");
    },

    getRefreshToken: async () => {
        return AsyncStorage.getItem("refreshToken");
    },

    getToken: async () => {
        return AsyncStorage.getItem("userToken");
    },
}

export default StorageManager;