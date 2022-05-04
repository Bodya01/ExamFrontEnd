import LoginModel from "../../models/authentication-models/Request/LoginModel";
import RefreshToken from "../../models/authentication-models/Request/RefreshModel";
import RegistrationModel from "../../models/authentication-models/Request/RegistrationModel";
import AuthenticationResult from "../../models/authentication-models/Response/AuthenticationResult";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";


const route = APIRoutes.getAuthenticationUrl();

const AuthService = {

    register: async (model: RegistrationModel) => APIService.post<AuthenticationResult>(route + "register", model),

    login: async (model: LoginModel) => APIService.post<AuthenticationResult>(route + "login", model),

    refresh: async (model: RefreshToken) => APIService.post<AuthenticationResult>(route + "refresh", model)
};

export default AuthService;