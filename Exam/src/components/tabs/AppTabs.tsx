import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MainPage from "../../activity/main-page/MainPage";
import React from "react";
import NotificationsPage from "../../activity/notifications-page/Notifications";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from "../theme/ThemeProvider";
import SearchTabs from "../search/SearchTabs";
import SettingsTabs from "../settings/SettingsTabs";
import MyProfileTabs from "../my-profile/MyProfileTabs";

const Tabs = createBottomTabNavigator();

const AppTabs = () => {
    const { colors } = useTheme();
    return (
        <Tabs.Navigator
            initialRouteName="MainPageTabs"
            screenOptions={() => ({
                tabBarActiveTintColor: colors.white,
                tabBarActiveBackgroundColor: colors.hover,
                tabBarInactiveTintColor: colors.secondaryLight,
                tabBarInactiveBackgroundColor: colors.white,
                tabBarLabelStyle: {
                    fontStyle: "normal",
                    fontSize: 10,
                    fontWeight: "bold",
                    lineHeight: 12,
                },
            })}
        >
            <Tabs.Screen
                name="ProfileTabs"
                component={MyProfileTabs}
                options={{
                    headerShown: false,
                    headerTitle: "My profile",
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="person" color={color} size={size} />
                    }
                }}
            />

            <Tabs.Screen
                name="SearchTabs"
                component={SearchTabs}
                options={{
                    headerShown: false,
                    headerTitleStyle: {
                        color: colors.primary
                    },
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="search" color={color} size={size} />
                    }
                }}
            />

            <Tabs.Screen
                name="MainPageTabs"
                component={MainPage}
                options={{
                    headerShown: true,
                    headerTitle: "Home",
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle: {
                        color: colors.primary
                    },
                    tabBarLabel: "Main Page",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="home" color={color} size={size} />
                    }
                }}
            />
            <Tabs.Screen
                name="SettingsTabs"
                component={SettingsTabs}
                options={{
                    headerShown: false,
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="settings" color={color} size={size} />
                    }
                }}
            />
            <Tabs.Screen
                name="NotificationsTabs"
                component={NotificationsPage}
                options={{
                    headerShown: true,
                    headerTitle: "Notifications",
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle: {
                        color: colors.primary
                    },
                    tabBarLabel: "Notifications",
                    tabBarStyle: { backgroundColor: colors.white },
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="notifications" color={color} size={size} />
                    }
                }}
            />
        </Tabs.Navigator>
    )
}

export default AppTabs;
