import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ExamService from "../../../../api-service/exam-service/ExamService";
import Exam from "../../../../models/exam-models/Exam";
import HeaderBackButton from "../../../components/navigation/header-back-button/HeaderBackButton";
import { useTheme } from "../../../components/theme/ThemeProvider";
import ScheduleSearchResultStyles from "./ScheduleSearchResultStyles";

const ScheduleSearchResult = ({ route, navigation }: any) => {

    const { colors } = useTheme();
    const [selectedId, setSelectedId] = useState<number>(route.params.groupId);
    const [exams, setExams] = useState<Exam[]>([]);

    const configureHeaderBackButton = () => {
        navigation.setOptions({
            headerTitleAlign: "center",
            title: "Search results",
            headerLeft: () => (
                <HeaderBackButton
                    navigation={navigation}
                />
            )
        })
    };

    const loadExams = () => {
        ExamService.getByGroup(selectedId).then((res) => {
            const ex: Exam[] = res.data;
            setExams(ex);
        })
    };

    useEffect(() => {
        configureHeaderBackButton();
        loadExams()
    }, [])

    return (
        <View style={[ScheduleSearchResultStyles.pageWrapper, {
            backgroundColor: colors.white
        }]}>
            <ScrollView contentContainerStyle={[ScheduleSearchResultStyles.cardsWrapper]}>
                {
                    exams.map((exam, id) => (
                        <View key={id} style={[ScheduleSearchResultStyles.scheduleCardWrapper, {
                            backgroundColor: colors.grayBackgroud
                        }]}>
                            <View style={[ScheduleSearchResultStyles.scheduleCardHeader]}>
                                <Text style={[ScheduleSearchResultStyles.headerText, {
                                    color: colors.primary
                                }]}>
                                    {exam?.examDate.toString().slice(0, 10)}
                                </Text>
                                <Text style={[ScheduleSearchResultStyles.headerText, {
                                    color: colors.primary
                                }]}>
                                    {exam?.examDate.toString().slice(11, 16)}
                                </Text>
                            </View>
                            <View style={[ScheduleSearchResultStyles.bodyWrapper]}>
                                <Text style={[ScheduleSearchResultStyles.bodyText, {
                                    color: colors.primary
                                }]}>
                                    {exam?.subject?.name}
                                </Text>
                                {
                                    exam?.subject?.teachers.map((teacher, id) => (
                                        <Text style={[ScheduleSearchResultStyles.bodyText, {
                                            color: colors.primary,
                                        }]}>
                                            {`${teacher?.name} ${teacher?.surname}`}
                                        </Text>
                                    ))
                                }
                            </View>
                        </View>
                    ))
                }

            </ScrollView>
        </View>
    )
}

export default ScheduleSearchResult;