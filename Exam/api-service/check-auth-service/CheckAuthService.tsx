import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getCheckAuthUrl();

const CheckAuthService = {

    checkAuth: async () => APIService.get<string>(route + "check-auth"),

};

export default CheckAuthService