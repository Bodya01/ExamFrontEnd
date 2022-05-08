import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import CheckAuthService from "../../../api-service/check-auth-service/CheckAuthService";
import { useTheme } from "../../components/theme/ThemeProvider";

const MainPage = () => {
    const { colors } = useTheme();
    const [authMessage, setAuthMessage] = useState<string>("default value");

    useEffect(() => {
        CheckAuthService.checkAuth().then((res) => {
            setAuthMessage(res.data);
        })
    }, [])
    return (
        <View style={[{ flex: 1, alignSelf: "stretch", alignItems: "center", justifyContent: "center", backgroundColor: colors.white }]}>
            <Text style={[{ color: colors.primary }]}>{authMessage}</Text>
        </View>
    )
}

export default MainPage;