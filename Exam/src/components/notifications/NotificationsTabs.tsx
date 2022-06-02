import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Notifications from "../../activity/notifications-page/Notifications";
import { useTheme } from "../theme/ThemeProvider";
import ConcreteNotificationPage from "../../activity/notifications-page/concrete-notification-page/ConcreteNotificationPage";


const Stack = createNativeStackNavigator();

const NotificationsTabs = () => {
    const { colors } = useTheme();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NotificationsPage"
                component={Notifications}
                options={{
                    headerShown: true,
                    headerTitle: "Notifications",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle: {
                        color: colors.primary,
                    },
                }}
            />
            
            <Stack.Screen
                name="ConcreteNotification"
                component={ConcreteNotificationPage}
            />
        </Stack.Navigator>
    )
}

export default NotificationsTabs