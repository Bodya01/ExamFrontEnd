import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import LogoutButton from "../../components/logout-button/LogoutButton";
import StorageManager from "../../components/storage/StorageManager";
import { useTheme } from "../../components/theme/ThemeProvider";
import SettingStyles from "./SettingsStyles";

const SettingsPage = () => {
    const {colors, isThemeDark, setScheme} = useTheme();
    const [isSwitchEnabled, setIsSwitchEnabled] = useState<boolean>();
    const changeTheme = () => {
        if(isThemeDark){
            StorageManager.changeTheme("light");
            setScheme("light");
        }
        else{
            StorageManager.changeTheme("dark");
            setScheme("dark");
        }
    };
    return(
        <View style={[SettingStyles.screenWrapper, {backgroundColor: colors.white}]}>
            <View>
                <View style={[SettingStyles.settingOptionBlock]}>
                    <Text style={[SettingStyles.settingsText, {color: colors.primary}]}>
                        Dark app theme
                    </Text>
                    <Switch
                        value={isSwitchEnabled}
                        onValueChange={()=> {
                            setIsSwitchEnabled(!isSwitchEnabled);
                            changeTheme();
                        }}
                    />
                </View>
                <View style={[SettingStyles.settingOptionBlock]}>
                    <Text style={[SettingStyles.settingsText, {color: colors.primary}]}>
                        Settings option
                    </Text>
                </View>
                <View style={[SettingStyles.settingOptionBlock]}>
                    <Text style={[SettingStyles.settingsText, {color: colors.primary}]}>
                        Settings option
                    </Text>
                </View>
                <View style={[SettingStyles.settingOptionBlock]}>
                    <Text style={[SettingStyles.settingsText, {color: colors.primary}]}>
                        Settings option
                    </Text>
                </View>
            </View>

            <View style={[{alignSelf: "center"}]}>
                <LogoutButton/>
            </View>
        </View>
    )
}

export default SettingsPage;