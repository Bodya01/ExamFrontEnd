import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../theme/ThemeProvider";
import HeaderBackButtonStyles from "./HeaderBackButtonStyles";


const HeaderBackButton = (props: any) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            style={[HeaderBackButtonStyles.buttonWrapper]}
            onPress={() => { props.navigation.goBack() }}
        >
            <Ionicons
                name="chevron-back"
                size={20}
                color={colors.primary}
            />
            <Text
                style={[HeaderBackButtonStyles.buttonText, {
                    color: colors.primary
                }]}>
                Back
            </Text>
        </TouchableOpacity>
    )
}

export default HeaderBackButton;