import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import StorageManager from "../../../components/storage/StorageManager";
import { useTheme } from "../../../components/theme/ThemeProvider";
import ProfilePictureProps from "./ProfilePictureProps";
import ProfilePictureStyles from "./ProfilePictureStyles";

const ProfilePicture = (props: ProfilePictureProps) => {
    const { colors } = useTheme()
    const [color, setColor] = useState<string>("");

    useEffect(() => {
        StorageManager.getPictureColor().then((res) => {
            setColor(res!);
        })
    }, [])
    return (
        <View style={[ProfilePictureStyles.pictureContainer]}>
            <View style={[{ borderRadius: 100, backgroundColor: color, alignItems: "center", width: props.size, height: props.size, overflow: "hidden" }]}>
                <Text style={[{ fontSize: props.size / 2, color: colors.accentWhite, marginVertical: props.size / 8 }]}>{`${props.user?.name.charAt(0)}${props.user?.surname.charAt(0)}`}</Text>
            </View>
        </View>
    )
};

export default ProfilePicture