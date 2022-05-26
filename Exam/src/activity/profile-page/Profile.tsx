import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Row, Table } from "react-native-table-component";
import GroupSerivce from "../../../api-service/group-service/GroupService";
import MarkService from "../../../api-service/mark-service/MarkService";
import Group from "../../../models/group-models/Group";
import Mark from "../../../models/mark-models/Mark";
import User from "../../../models/user-models/User";
import StorageManager from "../../components/storage/StorageManager";
import { useTheme } from "../../components/theme/ThemeProvider";
import JournalMarksStyles from "./journal-marks/JournalMarksStyles";
import ProfilePicture from "./profile-picture/ProfilePicture";
import ProfileStyles from "./ProfileStyles";


const ProfilePage = ({ navigation }: any) => {
    const { colors } = useTheme();
    const [user, setUser] = useState<User>();
    const [userType, setUserType] = useState<string>();
    const [groups, setGroups] = useState<Group[]>([]);
    const [marks, setMarks] = useState<Mark[]>([])

    const loadUserAndType = async () => {
        let u: User = null;
        StorageManager.getStoredUser().then((storedUser) => {
            setUser(storedUser);
            u = storedUser;
            StorageManager.getUserType().then((type) => {
                setUserType(type!)
                if (type?.toString() == "Teacher") {
                    GroupSerivce.getGroupsByTeacher(u?.id!).then((res) => {
                        const g = res.data
                        setGroups(g);
                    })
                }
                else if (type?.toString() == "Student") {
                    MarkService.getStudentsMarks(u?.id!).then((res) => {
                        setMarks(res.data);
                    })
                }
            })
        });
    }

    useEffect(() => {
        loadUserAndType()
    }, [])
    return (
        <ScrollView
            style={[
                ProfileStyles.pageWrapper, {
                    backgroundColor: colors.white
                }]}>
            <View style={[ProfileStyles.profileCard, { borderColor: colors.primary }]}>
                <ProfilePicture
                    user={user!}
                    size={85}
                />

                <View style={[ProfileStyles.cardInfo]}>
                    <Text style={[ProfileStyles.cardName, { color: colors.accentBlue, }]}>{`${user?.name} ${user?.surname}`}</Text>
                    <Text style={[ProfileStyles.cardInfoText, { color: colors.primary }]}>Role: {userType}</Text>
                </View>
            </View>

            <View style={[ProfileStyles.profileBody, { backgroundColor: colors.white, }]}>
                {
                    userType == "Teacher"
                        ? <>
                            <View style={[ProfileStyles.bodyWrapper]}>
                                <Text style={[ProfileStyles.markHeader, {
                                    color: colors.primary
                                }]}>
                                    Mark Journal
                                </Text>
                                {
                                    groups.map((group, id) => (
                                        <TouchableOpacity
                                            key={id}
                                            style={[ProfileStyles.groupButton, {
                                                backgroundColor: colors.grayBackgroud
                                            }]}
                                            onPress={() => { navigation.navigate("GroupSubjects", { groupId: group?.id }) }}
                                        >
                                            <Text style={[ProfileStyles.buttonText, {
                                                color: colors.primary
                                            }]}>
                                                {group?.name}
                                            </Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>

                        </>
                        : <>
                            <View style={[ProfileStyles.bodyWrapper]}>

                                <Text style={[ProfileStyles.markHeader, {
                                    color: colors.primary
                                }]}>
                                    Your Marks
                                </Text>

                                <Table>
                                    <Row
                                        style={[ProfileStyles.tableHeader, {
                                            backgroundColor: colors.secondaryLight,

                                        }]}
                                        textStyle={[JournalMarksStyles.tableHeadText, {
                                            color: colors.primary,
                                        }]}
                                        data={[
                                            "Subject",
                                            "Partial Mark",
                                            "Exam Mark",
                                            "Total Mark",
                                        ]}
                                    ></Row>
                                    {
                                        marks.map((mark, index) => (
                                            <Row
                                                key={index}
                                                data={[
                                                    mark?.subject?.name,
                                                    mark?.partialMark,
                                                    mark?.examMark,
                                                    mark?.totalMark,
                                                ]}
                                                style={[ProfileStyles.tableCell]}
                                                textStyle={[ProfileStyles.tableText, {
                                                    color: colors.primary,
                                                }]}
                                            ></Row>
                                        ))
                                    }

                                </Table>
                            </View>
                        </>

                }
            </View>
        </ScrollView>
    )
}

export default ProfilePage;