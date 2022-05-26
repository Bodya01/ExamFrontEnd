import AsyncStorage from "@react-native-community/async-storage";
import AuthenticationResult from "../../../models/authentication-models/Response/AuthenticationResult";
import Student from "../../../models/user-models/Student";
import Teacher from "../../../models/user-models/Teacher";
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
        const userType = await StorageManager.getUserType();
        const storedUser = await AsyncStorage.getItem("user");
        if (userType == "Student") {
            return JSON.parse(storedUser!) as Student
        }
        else if (userType == "Teacher") {
            return JSON.parse(storedUser!) as Teacher
        }
        else{
            return JSON.parse(storedUser!) as User
        }
    },

    getTokenExpireTime: () => {
        return AsyncStorage.getItem("expireTime");
    },

    getRefreshToken: () => {
        return AsyncStorage.getItem("refreshToken");
    },

    getToken: () => {
        return AsyncStorage.getItem("userToken");
    },

    getUserType: () => {
        return AsyncStorage.getItem("userType")
    }
}

export default StorageManager;