import React, { createRef, useEffect } from 'react';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import GroupSerivce from "../../../../../api-service/group-service/GroupService";
import Group from "../../../../../models/group-models/Group";
import { useTheme } from "../../../theme/ThemeProvider";
import GroupInputProps from "./GroupInputProps";
import GroupInputStyles from "./GroupInputStyles";
import BottomSheet from "reanimated-bottom-sheet"
import Animated from 'react-native-reanimated';
import BottomSheetBehavior from 'reanimated-bottom-sheet';

const GroupInput = (props: GroupInputProps) => {
    const { colors } = useTheme();
    const defaultGroup: Group = {
        id: -1,
        name: "Select group",
        students: [],
        subjects: []
    }
    const [groups, setGroups] = useState<Group[]>([]);
    const [selectedGroup, setSelectedGroup] = useState<Group>(defaultGroup);

    const loadGroups = () => {
        GroupSerivce.getGroups().then((res) => {
            let g = res.data;
            setGroups(g);
        })
    };

    const groupPressHandler = (selectGroup: Group) => {
        bottomSheetRef.current?.snapTo(1);
        setSelectedGroup(selectGroup)
        props.onGroupChange(selectGroup?.id!)
    };

    useEffect(() => {
        loadGroups();
    }, [])

    const renderHeader = () => (
        <View style={[{ height: 50, backgroundColor: colors.primary, alignItems: "center", justifyContent:"center", borderTopLeftRadius: 10, borderTopRightRadius: 10}]}>
            <Text style={[{color: colors.white, fontSize: 17}]}>Select a group</Text>
        </View>
    );

    const renderContent = () => (
        <ScrollView style={[{ backgroundColor: colors.white }]}>
            <View style={[{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between"}]}>
                {groups.map((group, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => groupPressHandler(group)}
                        style={[{ margin: 20 }]}
                    >
                        <Text style={[{ color: colors.primary, fontSize: 17 }]}> - {group?.name} - </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );

    // ref
    const bottomSheetRef = createRef<BottomSheetBehavior>();

    const fall = new Animated.Value(1);

    // variables
    const snapPoints = [330, 0];


    return (
        <>
            <View style={[GroupInputStyles.wrapper]}>
                <Text style={[GroupInputStyles.inputHeader, {
                    color: colors.primary
                }]}>
                    Group
                </Text>
                <TouchableOpacity
                    style={[GroupInputStyles.buttonWrapper, {
                        backgroundColor: colors.grayBackgroud,
                    }]}
                    onPress={() => {
                        bottomSheetRef.current?.snapTo(0);
                    }}
                >
                    <Text
                        style={[GroupInputStyles.inputText, {
                            color: colors.primary
                        }]}>
                        - {selectedGroup?.name} -
                    </Text>
                </TouchableOpacity>
            </View>

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                renderContent={renderContent}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
        </>
    );
}

export default GroupInput;