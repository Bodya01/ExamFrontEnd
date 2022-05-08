import React from "react";
import { Button, Switch, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LogoutButton from "../../components/logout-button/LogoutButton";
import ExamNoficitaionsSwitch from "../../components/settings/exam-notifications-switch/ExamNotificationsSwitch";
import PaymentNoficitaionsSwitch from "../../components/settings/payment-notifications-switch/PaymentNotificationsSwitch";
import ThemeSwitch from "../../components/theme/theme-switch/ThemeSwitch";
import { useTheme } from "../../components/theme/ThemeProvider";
import SettingStyles from "./SettingsStyles";

const SettingsPage = ({ navigation }: any) => {
    const { colors } = useTheme();

    return (
        <View style={[SettingStyles.screenWrapper, { backgroundColor: colors.white }]}>
            <View
                style={[SettingStyles.settingOptionBlock]}
            >
                <TouchableOpacity
                    style={[SettingStyles.navigatingOption, { borderColor: colors.disable }]}
                    onPress={() => { navigation.navigate("Bank Account") }}
                >
                    <View style={[SettingStyles.navigatingOptionBlock]}>
                        <Ionicons
                            name="card"
                            size={25}
                            style={[SettingStyles.navigationOptionIcon, { color: colors.accentBlue }]}
                        />
                        <Text style={[SettingStyles.settingsText, { color: colors.primary }]}>
                            Change bank account
                        </Text>
                    </View>
                    <Ionicons
                        size={20}
                        name="chevron-forward"
                        color={colors.primary}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={[SettingStyles.settingOptionBlock]}
            >
                <TouchableOpacity
                    style={[SettingStyles.navigatingOption, { borderColor: colors.disable }]}
                    onPress={() => { navigation.navigate("Password") }}
                >
                    <View style={[SettingStyles.navigatingOptionBlock]}>
                        <Ionicons
                            name="lock-open"
                            size={25}
                            style={[SettingStyles.navigationOptionIcon, { color: colors.accentBlue }]}
                        />
                        <Text style={[SettingStyles.settingsText, { color: colors.primary }]}>
                            Change password
                        </Text>
                    </View>
                    <Ionicons
                        size={20}
                        name="chevron-forward"
                        color={colors.primary}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <Text
                    style={[ SettingStyles.settingsBlockHeader, {color: colors.disable}]}
                >
                    Theme
                </Text>
                <View style={[SettingStyles.settingOptionBlock]}>
                    <Text style={[SettingStyles.settingsText, {color: colors.primary}]}>
                        Dark theme
                    </Text>
                    <ThemeSwitch />
                </View>

            </View>
            <View>
                <Text
                    style={[ SettingStyles.settingsBlockHeader, {color: colors.disable}]}
                >
                    Notifications
                </Text>
                <View style={[SettingStyles.settingOptionBlock]}>
                    <Text style={[SettingStyles.settingsText, {color: colors.primary}]}>
                        Disable exam notifications
                    </Text>
                    <ExamNoficitaionsSwitch/>
                </View>
                <View style={[SettingStyles.settingOptionBlock]}>
                    <Text style={[SettingStyles.settingsText, {color: colors.primary}]}>
                        Disable payment notifications
                    </Text>
                    <PaymentNoficitaionsSwitch/>
                </View>
            </View>

                <LogoutButton />
        </View>
    )
}

export default SettingsPage;