import User from "../../user-models/User";

interface AuthenticationResult {
    jwtId: string,
    jwtToken: string,
    jwtExpireTime: string,
    refreshToken: string,
    user: User
}

export default AuthenticationResult;