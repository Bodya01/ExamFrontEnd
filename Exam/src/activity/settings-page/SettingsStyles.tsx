import { StyleSheet } from "react-native";

const SettingStyles = StyleSheet.create({
    screenWrapper: {
        alignSelf: "stretch",
        flex: 1,
        alignContent: "center"
    },

    navigatingOption:{
        display: "flex",
        width:"100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1.5,
    },

    navigatingOptionBlock:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    navigationOptionIcon:{
        marginRight: 10
    },

    settingsText: {
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "400"
    },

    settingsBlockHeader:{
        alignSelf: "center",
        marginTop: 20,
        fontSize: 20,
        fontWeight: "600"
    },
    
    settingOptionBlock: {
        height: 80,
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center"
    },
})
export default SettingStyles;