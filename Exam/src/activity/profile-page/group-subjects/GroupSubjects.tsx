import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SubjectService from "../../../../api-service/subject-service/SubjectService";
import Subject from "../../../../models/subject-models/Subject";
import HeaderBackButton from "../../../components/navigation/header-back-button/HeaderBackButton";
import { useTheme } from "../../../components/theme/ThemeProvider";
import GroupSubjectsStyles from "./GroupSubjectsStyles";


const GroupSubjects = ({ route, navigation }: any) => {
    const groupId = route.params.groupId;
    const { colors } = useTheme();
    const [subjects, setSubjects] = useState<Subject[]>([]);

    const configureHeaderBackButton = () => {
        navigation.setOptions({
            headerTitleAlign: "center",
            title: "Group's subjects",
            headerLeft: () => (
                <HeaderBackButton
                    navigation={navigation}
                />
            )
        })
    };

    const loadSubjects = () => {
        SubjectService.getByGroup(groupId).then((res) => {
            setSubjects(res.data);
        });
    }

    useEffect(() => {
        configureHeaderBackButton();
        loadSubjects();
    }, [])

    return (
        <View style={[GroupSubjectsStyles.pageWrapper, {
            backgroundColor: colors.white
        }]}>
            <Text
                style={[GroupSubjectsStyles.groupSubjectHeader, {
                    color: colors.primary
                }]}>
                Select a subject
            </Text>

            {
                subjects.map((subject) => (
                    <TouchableOpacity
                        onPress={() => {navigation.navigate("JournalMarks", {groupId: groupId, subjectId: subject?.id})}}
                        style={[GroupSubjectsStyles.markNavButton, {
                            backgroundColor: colors.grayBackgroud
                        }]}>
                        <Text style={[GroupSubjectsStyles.buttonText, {
                            color: colors.primary
                        }]}>
                            {subject?.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default GroupSubjects;