import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../auth/AuthContext";
import { useTheme } from "../theme/ThemeProvider";
import LogoutButtonStyles from "./LogoutButtonStyles";


const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const { colors } = useTheme();
    return(
            <TouchableOpacity
                style={[LogoutButtonStyles.logoutButtonWrapper]}
                onPress={() => {
                    logout();
                }}
            >
                <Text style={[LogoutButtonStyles.logoutButtonText,{color: colors.accentOrange}]}>
                    Log out
                </Text>
            </TouchableOpacity>
    )
};

export default LogoutButton;