import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../components/theme/ThemeProvider";

const ProfilePage = () => {
    const {colors} = useTheme();
    return(
        <View style={[{flex: 1, alignSelf: "stretch", alignItems: "center", justifyContent: "center", backgroundColor: colors.white}]}>
            <Text style={[{color: colors.primary}]}>Profile Page</Text>
        </View>
    )
}

export default ProfilePage;