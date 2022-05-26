import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ExamService from "../../../api-service/exam-service/ExamService";
import Exam from "../../../models/exam-models/Exam";
import Student from "../../../models/user-models/Student";
import Teacher from "../../../models/user-models/Teacher";
import ExamCard from "../../components/exam-cards/teacher-exam-card/ExamCard";
import StorageManager from "../../components/storage/StorageManager";
import { useTheme } from "../../components/theme/ThemeProvider";
import MainPageStyle from "./MainPageStyles";

const MainPage = ({ navigation }: any) => {
    const { colors } = useTheme();
    const [storedTeacher, setStoredTeacher] = useState<Teacher>();
    const [storedStudent, setStoredStudent] = useState<Student>();
    const [userType, setUserType] = useState<string>();
    const [exams, setExams] = useState<Exam[]>([]);
    const [nextExam, setNextExam] = useState<Exam>();

    const getNextExam = (e: Exam[]) => {
        let next = e.filter((ex) => {
            return Date.parse(ex?.examDate.toString()!) > Date.now();
        })[0];
        setNextExam(next);
    }

    const loadUserAndType = async () => {
        StorageManager.getUserType().then((type) => {
            setUserType(type!)
            if (type?.toString() == "Teacher") {
                StorageManager.getStoredUser().then((user) => {
                    let teacher = user as Teacher;
                    setStoredTeacher(teacher);
                    ExamService.getByTeacher(teacher?.id!).then((res) => {
                        setExams(res.data);
                        getNextExam(res.data);
                    });
                })
            }
            else if (type?.toString() == "Student") {
                StorageManager.getStoredUser().then((user) => {
                    let student = user as Student;
                    setStoredStudent(student);
                    ExamService.getByGroup(student?.groupId!).then((res) => {
                        setExams(res.data);
                        getNextExam(res.data);
                    });

                })
            }
        })
    }

    useEffect(() => {
        loadUserAndType();
    }, [])

    return (
        <View style={[MainPageStyle.pageWrapper, {
            backgroundColor: colors.white
        }]}>
            <Text
                style={[MainPageStyle.examHeader, {
                    color: colors.primary,
                }]}>
                Your exams
            </Text>
            <View style={[MainPageStyle.examsContainer]}>
                <ScrollView
                    style={[MainPageStyle.examsScroll, {
                        backgroundColor: colors.grayBackgroud
                    }]}>
                    {
                        exams.map((exam) => (
                            <ExamCard
                                exam={exam}
                            />
                        ))
                    }
                </ScrollView>
            </View>
            <View style={[MainPageStyle.nextExamContainer]}>
                <View style={[MainPageStyle.nextExamHeaderWrapper]}>
                    <Text style={[MainPageStyle.nextExamText, {
                        color: colors.primary
                    }]}>
                        Your next exam
                    </Text>
                </View>
                <View style={[MainPageStyle.nextExamWrapper]}>
                    <Text style={[MainPageStyle.nextExamText, {
                        color: colors.primary, fontSize: 17
                    }]}>
                        {`${nextExam?.examDate.toString().slice(0, 10)} ${nextExam?.examDate.toString().slice(11, 16)}`}
                    </Text>
                    <Text style={[MainPageStyle.nextExamText, {
                        color: colors.primary, fontSize: 17
                    }]}>
                        {nextExam?.subject?.name}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default MainPage;