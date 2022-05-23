import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../components/theme/ThemeProvider";

const MainPage = () => {
    const { colors } = useTheme();

    return (
        <View style={[{ flex: 1, alignSelf: "stretch", alignItems: "center", justifyContent: "center", backgroundColor: colors.white }]}>
            <Text style={[{ color: colors.primary }]}>Main page</Text>
        </View>
    )
}

export default MainPage;