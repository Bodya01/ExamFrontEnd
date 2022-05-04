import { StyleSheet } from "react-native";
import AppColors from "../theme/AppColors";

const LogoutButtonStyles = StyleSheet.create({
    logoutButtonWrapper: {
        alignItems: "center",
    },
    logoutButtonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: AppColors.accentOrange,
        paddingVertical:15,
    },
})

export default LogoutButtonStyles;