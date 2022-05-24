import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profile from "../../activity/profile-page/Profile";
import { useTheme } from "../theme/ThemeProvider";
import GroupSubjects from "../../activity/profile-page/group-subjects/GroupSubjects";
import JournalMarks from "../../activity/profile-page/journal-marks/JournalMarks";

const Stack = createNativeStackNavigator()

const MyProfileTabs = () => {
    const { colors } = useTheme();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTitleAlign: "center",
                    title: "My Profile",
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle: {
                        color: colors.primary
                    },
                }}
            />

            <Stack.Screen
                name="GroupSubjects"
                component={GroupSubjects}
                options={{
                    headerTitleAlign: "center",
                    title: "Select group's subject",
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle: {
                        color: colors.primary
                    },
                }}
            />

            <Stack.Screen
                name="JournalMarks"
                component={JournalMarks}
                options={{
                    headerTitleAlign: "center",
                    title: "Select group's subject",
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle: {
                        color: colors.primary
                    },
                }}
            />

        </Stack.Navigator>
    )
}

export default MyProfileTabs;