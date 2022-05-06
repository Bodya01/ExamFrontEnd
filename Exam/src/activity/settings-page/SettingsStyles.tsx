import { StyleSheet } from "react-native";
import { StyleConstants } from "../../components/constants/StyleConstants";

const SettingStyles = StyleSheet.create({
    screenWrapper: {
        width: StyleConstants.screenWidth,
        height: StyleConstants.screenHeight,
        alignContent: "center"
    },

    optionsWrapper: {

    },

    settingsText: {
        fontSize: 20,
        alignSelf: "center"
    },
    
    settingOptionBlock: {
        height: 60,
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center"
    },
})
export default SettingStyles;