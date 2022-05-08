import React, { useState } from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../components/theme/ThemeProvider";

const NotificationsPage = () => {
    const { colors } = useTheme();
    const [userNotifications, setUserNotifications] = useState();
    return (
        <View style={[{ flex: 1, alignSelf: "stretch", alignItems: "center", backgroundColor: userNotifications ? colors.white : colors.grayBackgroud }]}>
            {userNotifications
                ? (<></>)
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