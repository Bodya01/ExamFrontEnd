import Message from "../../models/Message";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";


const route = APIRoutes.getGreetingUrl();

const GreetingService = {
    getGreeting: async (number: number) => APIService.get<Message>(route + number),
}

export default GreetingService;