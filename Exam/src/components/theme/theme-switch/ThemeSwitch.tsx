import React, { useEffect, useState } from "react";
import { Switch } from "react-native";
import StorageManager from "../../storage/StorageManager";
import { useTheme } from "../ThemeProvider";


const ThemeSwitch = () => {
    const { colors, isThemeDark, setScheme } = useTheme();
    const [isSwitchEnabled, setIsSwitchEnabled] = useState<boolean>();
    const changeTheme = () => {
        if (isThemeDark) {
            StorageManager.changeTheme("light");
            setScheme("light");
        }
        else {
            StorageManager.changeTheme("dark");
            setScheme("dark");
        }
    };

    useEffect(() => {
        setIsSwitchEnabled(isThemeDark);
    }, [])

    return (
        <Switch
            value={isSwitchEnabled}
            onValueChange={() => {
                setIsSwitchEnabled(!isSwitchEnabled);
                changeTheme();
            }}
            trackColor={{
                false: colors.secondaryLight,
                true: colors.accentBlue
            }}
            thumbColor={colors.accentWhite}
        />
    )
}

export default ThemeSwitch;