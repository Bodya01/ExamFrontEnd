import { Dimensions, StyleSheet } from "react-native";
import { StyleConstants } from "../../components/constants/StyleConstants";
import AppColors from "../../components/theme/AppColors";

const SettingStyles = StyleSheet.create({
    screenWrapper: {
        width: StyleConstants.screenWidth,
    },
    
    settingOptionBlock: {
        borderBottomWidth:1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomColor: AppColors.secondaryDark
    },
})
export default SettingStyles;