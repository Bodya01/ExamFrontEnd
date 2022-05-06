import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../../components/theme/ThemeProvider";

const PasswordChange = ({navigation}: any) =>{
    const {colors} = useTheme();
    return(
        <View style={[{flex: 1, alignSelf: "stretch", alignItems: "center", justifyContent: "center", backgroundColor: colors.white}]}>
            <Text style={[{color: colors.primary}]}>Here you will be able to change your password soon</Text>
        </View>
    )
};

export default PasswordChange