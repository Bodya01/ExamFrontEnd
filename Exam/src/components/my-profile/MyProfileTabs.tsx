import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profile from "../../activity/profile-page/Profile";

const Stack = createNativeStackNavigator()

const MyProfileTabs = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
        </Stack.Navigator>
    )
}

export default MyProfileTabs;