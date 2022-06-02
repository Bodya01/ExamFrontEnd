import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Notification from "../../../../models/notification-models/Notification";
import HeaderBackButton from "../../../components/navigation/header-back-button/HeaderBackButton";
import { useTheme } from "../../../components/theme/ThemeProvider";


const ConcreteNotificationPage = ({ route, navigation }: any) => {
    const { colors } = useTheme();
    const [notification, setNotification] = useState<Notification>(route.params.notification);

    const configureHeaderBackButton = () => {
        navigation.setOptions({
            headerTitleAlign: "center",
            title: "Your notification",
            headerLeft: () => (
                <HeaderBackButton
                    navigation={navigation}
                />
            )
        })
    };

    useEffect(() => {
        configureHeaderBackButton();
    }, [])

    const parseJsonData = (notification: Notification) => {
        return JSON.parse(notification?.jsonData!);
    }

    return (
        <View style={[{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.white }]}>
            <View>
                <Text
                    style={[{ color: colors.primary, fontSize: 20, fontWeight: "600", textAlign: "center" }]}
                >You have an exam tomorrow!</Text>
                <Text style={[{ color: colors.primary, fontSize: 17 }]}>Subject: {parseJsonData(notification).subject}</Text>
                <Text style={[{ color: colors.primary, fontSize: 17 }]}>Time: {parseJsonData(notification).time.toString()}</Text>
            </View>
        </View>
    )
}

export default ConcreteNotificationPage;