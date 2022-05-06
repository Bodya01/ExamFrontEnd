import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MainPage from "../../activity/main-page/MainPage";
import Profile from "../../activity/profile-page/Profile";
import Settings from "../../activity/settings-page/Settings";
import React from "react";
import Search from "../../activity/search-page/Search";
import NotificationsPage from "../../activity/notifications-page/Notifications";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from "../theme/ThemeProvider";

const Tabs = createBottomTabNavigator();

const AppTabs = () => {
    const {colors} = useTheme();
    return(
        <Tabs.Navigator
            initialRouteName="Main Page"
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
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="person" color={color} size={size}/>
                    }
                }}
            />
            <Tabs.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="settings" color={color} size={size}/>
                    }
                }}
            />
            <Tabs.Screen
                name="Main Page"
                component={MainPage}
                options={{
                    tabBarLabel: "Main Page",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="home" color={color} size={size}/>
                    }
                }}
            />
            <Tabs.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="search" color={color} size={size}/>
                    }
                }}
            />
            <Tabs.Screen
                name="Notifications"
                component={NotificationsPage}
                options={{
                    tabBarLabel: "Notifications",
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="notifications" color={color} size={size}/>
                    }
                }}
            />
        </Tabs.Navigator>
    )
}

export default AppTabs;
