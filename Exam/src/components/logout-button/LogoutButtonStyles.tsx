import { StyleSheet } from "react-native";
import { lightColors } from "../theme/ThemesColors";

const LogoutButtonStyles = StyleSheet.create({
    logoutButtonWrapper: {
        alignItems: "center",
    },
    logoutButtonText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical:15,
    },
})

export default LogoutButtonStyles;