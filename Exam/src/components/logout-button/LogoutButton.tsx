import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../auth/AuthContext";
import LogoutButtonStyles from "./LogoutButtonStyles";


const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    return(
            <TouchableOpacity
                style={[LogoutButtonStyles.logoutButtonWrapper]}
                onPress={() => {
                    logout();
                }}
            >
                <Text style={[LogoutButtonStyles.logoutButtonText]}>
                    Log out
                </Text>
            </TouchableOpacity>
    )
};

export default LogoutButton;