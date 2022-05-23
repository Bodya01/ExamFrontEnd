import React from "react";
import { ScrollView, View } from "react-native";
import OptionButton from "../../components/search/option-button/OptionButton";
import { useTheme } from "../../components/theme/ThemeProvider";
import SearchStyles from "./SearchStyles";

const SearchPage = ({ navigation }: any) => {
    const { colors } = useTheme();
    return (
        <ScrollView>
            <View
                style={[SearchStyles.pageWrapper, {
                    backgroundColor: colors.white,
                }]}>
                <OptionButton
                    text="Exam schedule"
                    navigationRoute={"ScheduleSearch"}
                    navigation={navigation}
                />
                <OptionButton
                    text="Schoolarship lists"
                    navigationRoute={""}
                    navigation={navigation}
                />
                <OptionButton
                    text="Rating lists"
                    navigationRoute={""}
                    navigation={navigation}
                />
                <OptionButton
                    text="Search user"
                    navigationRoute={""}
                    navigation={navigation}
                />
            </View>
        </ScrollView>
    )
}

export default SearchPage;