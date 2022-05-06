import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BankAccount from "../../activity/settings-page/bank-account-change/BankAccount";
import Settings from "../../activity/settings-page/Settings";
import { useTheme } from "../theme/ThemeProvider";
import PasswordChange from "../../activity/settings-page/password-change/PasswordChange";


const SettingsTabs = () => {
    const {colors} = useTheme();

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator
            initialRouteName="Settings"
        >
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: true,
                    headerTitle: "Settings",
                    headerStyle:{
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle:{
                        color: colors.primary,
                    },
                }}
            />
            <Stack.Screen
                name="Bank Account"
                component={BankAccount}
                options={{
                    headerShown: true,
                    headerTitle: "Change your bank account",
                    headerStyle:{
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle:{
                        color: colors.primary,
                    },
                }}
            />
            <Stack.Screen
                name="Password"
                component={PasswordChange}
                options={{
                    headerShown: true,
                    headerTitle: "Change your password",
                    headerStyle:{
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle:{
                        color: colors.primary,
                    },
                }}
            />
        </Stack.Navigator>
    )
}

export default SettingsTabs;