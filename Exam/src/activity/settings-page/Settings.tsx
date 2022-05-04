import React from "react";
import { View } from "react-native";
import LogoutButton from "../../components/logout-button/LogoutButton";
import SettingStyles from "./SettingsStyles";

const SettingsPage = () => {
    return(
        <View style = {[SettingStyles.screenWrapper]}>
            <View style={[SettingStyles.settingOptionBlock]}>
                <LogoutButton/>
            </View>
        </View>
    )
}

export default SettingsPage;