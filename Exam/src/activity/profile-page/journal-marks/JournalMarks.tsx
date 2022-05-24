import React, { useEffect, useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Row, Table } from "react-native-table-component";
import MarkService from "../../../../api-service/mark-service/MarkService";
import StudentService from "../../../../api-service/student-service/StudentService";
import Mark from "../../../../models/mark-models/Mark";
import Student from "../../../../models/user-models/Student";
import HeaderBackButton from "../../../components/navigation/header-back-button/HeaderBackButton";
import { useTheme } from "../../../components/theme/ThemeProvider";
import CheckBox from '@react-native-community/checkbox';
import { Text } from "react-native";
import JournalMarksStyles from "./JournalMarksStyles";

const JournalMarks = ({ route, navigation }: any) => {
    const { colors } = useTheme()
    const { subjectId, groupId } = route.params;
    const [marks, setMarks] = useState<Mark[]>([]);
    const [confirmationStatuses, setStatuses] = useState<boolean[]>([]);
    const [isUpdated, setUpdated] = useState<boolean>(false);
    let students: Student[] = [];

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

    const loadMarks = async () => {
        StudentService.getStudentsByGroup(groupId)
            .then((res) => {
                students = res.data;
            })
            .then(() => {
                students.forEach(student => {
                    MarkService.getStudentsMarks(student?.id!)
                        .then((res) => {
                            let filteredMarks = res.data.filter(m => m?.subject?.id == subjectId);
                            let isConfirmedStat = filteredMarks.map(m => m?.isConfirmed!);
                            setMarks(old => [...old, ...filteredMarks]);
                            setStatuses(old => [...old, ...isConfirmedStat])
                        })
                });
            })
    }

    useEffect(() => {
        configureHeaderBackButton();
        if (marks.length == 0) {
            loadMarks();
        }
    }, []);

    const onValueChange = (mark: Mark) => {
        let changedMarks = marks;
        let confirmStatuses = confirmationStatuses;
        let markToChange = changedMarks.map((mark) => mark?.id).indexOf(mark?.id!);

        changedMarks[markToChange]!.partialMark = mark?.partialMark!;
        changedMarks[markToChange]!.examMark = mark?.examMark!;
        changedMarks[markToChange]!.totalMark = mark?.totalMark!;
        confirmStatuses[markToChange]! = mark?.isConfirmed!;

        setMarks(changedMarks);
        setStatuses(confirmStatuses);
    }

    const onCheckBoxValueChange = (mark: Mark) => {
        let changedMarks = marks;
        let confirmStatuses = confirmationStatuses;
        let markToChange = changedMarks.map((mark) => mark?.id).indexOf(mark?.id!);

        changedMarks[markToChange]!.partialMark = mark?.partialMark!;
        changedMarks[markToChange]!.examMark = mark?.examMark!;
        changedMarks[markToChange]!.totalMark = mark?.totalMark!;
        confirmStatuses[markToChange]! = !confirmationStatuses[markToChange];

        setMarks(changedMarks);
        setStatuses(confirmStatuses);
    }

    const parseVal = (toParse: string) => {
        const parsed = parseInt(toParse);
        if (toParse == "") {
            return 0;
        }
        return parsed;
    }

    return (
        <ScrollView
            style={[JournalMarksStyles.pageWrapper, {
                backgroundColor: colors.white
            }]}>
            <Text style={[JournalMarksStyles.pageHeader, {
                color: colors.primary
            }]}>
                Mark Journal
            </Text>
            <Table
                borderStyle={{ borderWidth: 1, borderColor: colors.grayBackgroud }}
            >
                <Row
                    style={[JournalMarksStyles.tableHeader, {
                        backgroundColor: colors.secondaryLight
                    }]}
                    textStyle={[JournalMarksStyles.tableHeadText, {
                        color: colors.primary,
                    }]}
                    data={[
                        "Name",
                        "Surname",
                        "Partial mark",
                        "Exam mark",
                        "Total mark",
                        "Is confirmed"
                    ]}
                ></Row>
                {
                    marks.map((mark, index) => (
                        <Row
                            key={index}
                            style={[JournalMarksStyles.tableRow]}
                            textStyle={[JournalMarksStyles.tableRowText, {
                                color: colors.primary,
                            }]}
                            data={[
                                mark?.student?.name,
                                mark?.student?.surname,

                                <TextInput
                                    style={[JournalMarksStyles.tableRowText, {
                                        color: colors.primary
                                    }]}
                                    value={marks[index]?.partialMark.toString()}
                                    onChangeText={(partial) => {
                                        setUpdated(!isUpdated)
                                        let newMark: Mark = {
                                            id: mark?.id!,
                                            partialMark: parseVal(partial),
                                            examMark: mark?.examMark!,
                                            totalMark: mark?.totalMark!,
                                            isConfirmed: mark?.isConfirmed!,
                                            student: mark?.student!,
                                            subject: mark?.subject!
                                        }
                                        onValueChange(newMark);
                                    }}
                                />,

                                <TextInput
                                    style={[JournalMarksStyles.tableRowText, {
                                        color: colors.primary
                                    }]}
                                    value={marks[index]?.examMark.toString()}
                                    onChangeText={(exam) => {
                                        setUpdated(!isUpdated)
                                        let newMark: Mark = {
                                            id: mark?.id!,
                                            partialMark: mark?.partialMark!,
                                            examMark: parseVal(exam),
                                            totalMark: mark?.totalMark!,
                                            isConfirmed: mark?.isConfirmed!,
                                            student: mark?.student!,
                                            subject: mark?.subject!
                                        }
                                        onValueChange(newMark);
                                    }}
                                />,

                                <TextInput
                                    style={[JournalMarksStyles.tableRowText, {
                                        color: colors.primary
                                    }]}
                                    value={marks[index]?.totalMark.toString()}
                                    onChangeText={(totalMark) => {
                                        setUpdated(!isUpdated)
                                        let newMark: Mark = {
                                            id: mark?.id!,
                                            partialMark: mark?.partialMark!,
                                            examMark: mark?.examMark!,
                                            totalMark: parseVal(totalMark),
                                            isConfirmed: mark?.isConfirmed!,
                                            student: mark?.student!,
                                            subject: mark?.subject!
                                        }
                                        onValueChange(newMark);
                                    }}
                                />,

                                <CheckBox
                                    style={[JournalMarksStyles.tableRowText]}
                                    tintColors={
                                        { true: colors.accentBlue, false: colors.primary }
                                    }
                                    value={confirmationStatuses[index]}
                                    onValueChange={() => {
                                        setUpdated(!isUpdated)
                                        let newMark: Mark = {
                                            id: mark?.id!,
                                            partialMark: mark?.partialMark!,
                                            examMark: mark?.examMark!,
                                            totalMark: mark?.totalMark!,
                                            isConfirmed: mark?.isConfirmed!,
                                            student: mark?.student!,
                                            subject: mark?.subject!
                                        }
                                        onCheckBoxValueChange(newMark);
                                    }}
                                />
                            ]}
                        ></Row>
                    ))
                }
            </Table>

            <TouchableOpacity
                onPress={() => {
                    marks.forEach((mark) => {
                        MarkService.updateMark(mark);
                    })
                }}
                style={[JournalMarksStyles.submitButton, {
                    backgroundColor: colors.grayBackgroud
                }]}>
                <Text style={[JournalMarksStyles.submitButtonText, {
                    color: colors.primary
                }]}>
                    Submit changes
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default JournalMarks;