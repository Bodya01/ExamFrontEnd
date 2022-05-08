import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../components/theme/ThemeProvider";
import ProfileStyles from "./ProfileStyles";

const ProfilePage = () => {
    const { colors } = useTheme();
    return (
        <View style={[ProfileStyles.profileWrapper, { backgroundColor: colors.white }]}>
            <Text style={[{ color: colors.primary }]}>Profile Page</Text>
        </View>
    )
}

export default ProfilePage;