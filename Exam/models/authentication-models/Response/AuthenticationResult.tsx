import Student from "../../user-models/Student";
import Teacher from "../../user-models/Teacher";

interface AuthenticationResult {
    jwtId: string,
    jwtToken: string,
    jwtExpireTime: string,
    refreshToken: string,
    user: any
}

export default AuthenticationResult;