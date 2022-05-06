import React, { useState } from "react";
import { Switch } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";


const PaymentNoficitaionsSwitch = () => {
    const {colors} = useTheme();
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    return(
        <Switch
            value={isEnabled}
            onValueChange={() => {
                setIsEnabled(!isEnabled);
            }}
            trackColor={{
                false: colors.secondaryLight,
                true: colors.accentBlue
            }}
            thumbColor={colors.accentWhite}
        />
    )
}

export default PaymentNoficitaionsSwitch;