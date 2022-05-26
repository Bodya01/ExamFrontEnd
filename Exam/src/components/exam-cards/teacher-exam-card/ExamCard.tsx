import React, { useEffect } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ScheduleSearchResultStyles from "../../../activity/search-page/schedule-search-result/ScheduleSearchResultStyles";
import { useTheme } from "../../theme/ThemeProvider";
import ExamCardProps from "./ExamCardProps";

const ExamCard = (props: ExamCardProps) => {
    const exam = props.exam;
    const { colors } = useTheme();

    return (
        <LinearGradient
            style={[ScheduleSearchResultStyles.scheduleCardWrapper]}
            colors={[colors.blueGradientFrom, colors.blueGradientTo]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={[ScheduleSearchResultStyles.scheduleCardHeader]}>
                <Text style={[ScheduleSearchResultStyles.headerText, {
                    color: colors.accentWhite
                }]}>
                    {exam?.examDate.toString().slice(0, 10)}
                </Text>
                <Text style={[ScheduleSearchResultStyles.headerText, {
                    color: colors.accentWhite
                }]}>
                    {exam?.examDate.toString().slice(11, 16)}
                </Text>
            </View>
            <View style={[ScheduleSearchResultStyles.bodyWrapper]}>
                <Text style={[ScheduleSearchResultStyles.bodyText, {
                    color: colors.accentWhite
                }]}>
                    {exam?.subject?.name}
                </Text>
                {
                    exam?.subject?.teachers.map((teacher, id) => (
                        <Text style={[ScheduleSearchResultStyles.bodyText, {
                            color: colors.accentWhite,
                        }]}>
                            {`${teacher?.name} ${teacher?.surname}`}
                        </Text>
                    ))
                }
            </View>
        </LinearGradient>
    )
}

export default ExamCard;