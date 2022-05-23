import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SearchStyles from "../../../activity/search-page/SearchStyles";
import { useTheme } from "../../theme/ThemeProvider";
import OptionButtonProps from "./OptionButtonProps";


const OptionButton = (props: OptionButtonProps) => {
    const { colors } = useTheme();
    const buttonText = props.text
    return (
        <>


            <TouchableOpacity
                onPress={() => { props.navigation.navigate(props.navigationRoute) }}
                style={[SearchStyles.buttonWrapper, {
                }]}>
                <LinearGradient
                    colors={[colors.blueGradientFrom, colors.blueGradientTo]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[{
                        width: "100%", height: "100%", borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }]}
                >
                    <Text style={[{ color: colors.accentWhite, fontSize: 17 }]}>{buttonText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </>
    )
}

export default OptionButton;