import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import User from "../../../models/user-models/User";
import StorageManager from "../../components/storage/StorageManager";
import { useTheme } from "../../components/theme/ThemeProvider";
import ProfilePicture from "./profile-picture/ProfilePicture";
import ProfileStyles from "./ProfileStyles";

const ProfilePage = () => {
    const { colors } = useTheme();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        StorageManager.getStoredUser().then((storedUser) => {
            setUser(storedUser);
        });
    }, [])

    return (
        <View
            style={[
                ProfileStyles.pageWrapper, {
                    backgroundColor: colors.white
                }]}>
            <View style={[ProfileStyles.profileCard, { borderColor: colors.primary }]}>
                <ProfilePicture
                    user={user!}
                    size={85}
                />

                <View style={[ProfileStyles.cardInfo]}>
                    <Text style={[ProfileStyles.cardName, { color: colors.accentBlue, }]}>{`${user?.name} ${user?.surname}`}</Text>
                    <Text style={[ProfileStyles.cardInfoText, { color: colors.primary }]}>Role: Student</Text>
                    <Text style={[ProfileStyles.cardInfoText, { color: colors.primary }]}>Rating: 90</Text>
                </View>
            </View>

            <View style={[ProfileStyles.profileBody, { backgroundColor: colors.white }]}>

            </View>
        </View>
    )
}

export default ProfilePage;