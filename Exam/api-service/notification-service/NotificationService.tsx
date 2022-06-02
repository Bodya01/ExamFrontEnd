import Notification from "../../models/notification-models/Notification";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";


const route = APIRoutes.getNotificationUrl();

const NotificationService = {
    getByUser: async (id : string) => APIService.get<Notification[]>(route + id)
}

export default NotificationService;