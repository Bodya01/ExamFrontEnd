import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../../activity/search-page/Search";
import { useTheme } from "../theme/ThemeProvider";
import ScheduleSearch from "./search-pages/ScheduleSearch";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";
import * as navigation from "../navigation/Navigation"
import ScheduleSearchResult from "../../activity/search-page/schedule-search-result/ScheduleSearchResult";


const Stack = createNativeStackNavigator();

const SearchTabs = () => {
    const { colors } = useTheme();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle: {
                        color: colors.primary,
                    },
                    headerTitleAlign: "center"
                }}
            />
            
            <Stack.Screen
                name="ScheduleSearch"
                component={ScheduleSearch}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle: {
                        color: colors.primary,
                    },
                }}
            />

            <Stack.Screen 
                name="ScheduleResult"
                component={ScheduleSearchResult}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTitleStyle: {
                        color: colors.primary,
                    },
                }}
            />
        </Stack.Navigator>
    )
}

export default SearchTabs;