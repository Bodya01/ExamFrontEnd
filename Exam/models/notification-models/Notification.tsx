import NotificationTypes from "./NotificationTypes";

type Notification = null | {
    id: number,
    recieverId: string,
    isRead: boolean,
    createdAt: Date,
    type: NotificationTypes,
    jsonData: string
}

export default Notification;