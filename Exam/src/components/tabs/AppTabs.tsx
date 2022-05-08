import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MainPage from "../../activity/main-page/MainPage";
import Profile from "../../activity/profile-page/Profile";
import React from "react";
import Search from "../../activity/search-page/Search";
import NotificationsPage from "../../activity/notifications-page/Notifications";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from "../theme/ThemeProvider";
import SettingsTabs from "../settings/SettingsTabs";

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
                }
            })}
        >
            <Tabs.Screen
                name="ProfileTabs"
                component={Profile}
                options={{
                    headerShown: true,
                    headerTitle: "My profile",
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle: {
                        color: colors.primary
                    },
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="person" color={color} size={size} />
                    }
                }}
            />

            <Tabs.Screen
                name="SearchTabs"
                component={Search}
                options={{
                    headerShown: true,
                    headerTitle: "Search",
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
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
