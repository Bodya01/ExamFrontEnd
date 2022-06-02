import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import NotificationService from "../../../api-service/notification-service/NotificationService";
import SignalRConnection from "../../../api-service/SignalRHubConnection";
import Notification from "../../../models/notification-models/Notification";
import User from "../../../models/user-models/User";
import StorageManager from "../../components/storage/StorageManager";
import { useTheme } from "../../components/theme/ThemeProvider";

const NotificationsPage = ({ navigation }: any) => {
    const { colors } = useTheme();
    const [storedUser, setStoredUser] = useState<User>();
    const [userNotifications, setUserNotifications] = useState<Notification[] | undefined>([]);

    const refreshNotifications = () => {
        NotificationService.getByUser(storedUser?.id!).then(res => {
            setUserNotifications(res.data);
        })
    };

    const getPastTime = (notification: Notification) => {
        return `${notification?.createdAt.toString().slice(0,10)} ${notification?.createdAt.toString().slice(11,16)}`;
    };

    useEffect(() => {
        SignalRConnection.then((connection) => {
            connection.on("sendToReact", refreshNotifications)
        }).catch(err => console.warn(err))
    });

    useEffect(() => {
        StorageManager.getStoredUser().then((u) => {
            setStoredUser(u);
            NotificationService.getByUser(u?.id!).then(res => {
                setUserNotifications(res.data);
            })
        })
    }, []);

    return (
        <View style={[{ flex: 1, alignSelf: "stretch", alignItems: "center", backgroundColor: userNotifications?.length! > 0 ? colors.white : colors.grayBackgroud }]}>
            {userNotifications?.length! > 0
                ? (
                    <ScrollView style={[{ width: "100%" }]}>
                        {
                            userNotifications!.map((notification) => (
                                <TouchableOpacity
                                    key={notification?.id!}
                                    onPress={() => { navigation.navigate("ConcreteNotification", { notification }) }}
                                    style={[{
                                        width: "100%",
                                        alignItems: "center",
                                        borderBottomWidth: 1,
                                        borderColor: colors.grayBackgroud,
                                        flexDirection: "row",
                                        justifyContent: "space-around"
                                    }]}>
                                    <Text style={[{ paddingVertical: 25 , color: colors.primary}]}>You have an exam tomorrow!</Text>
                                    <Text style={[{ color: colors.primary}]}>{getPastTime(notification)}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                )
                : (
                    <View style={[{ alignItems: "center", justifyContent: "center", alignContent: "center", flex: 1, }]}>
                        <Ionicons
                            name="notifications-off-circle"
                            size={100}
                            color={colors.primary}
                        />
                        <Text style={[{ color: colors.primary, fontSize: 20, fontWeight: "400" }]}>
                            You don't have any notifications yet
                        </Text>
                    </View>
                )
            }
        </View>
    )
}

export default NotificationsPage;