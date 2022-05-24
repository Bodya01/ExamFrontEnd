import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderBackButton from "../../navigation/header-back-button/HeaderBackButton";
import { useTheme } from "../../theme/ThemeProvider";
import GroupInput from "./group-input/GroupInput";
import ScheduleSearchStyle from "./ScheduleSearchStyles";


const ScheduleSearch = ({ navigation }: any) => {
    const { colors } = useTheme();
    const [selectedGroupId, setSelectedGroupId] = useState<number>(-1);
    const [hasSelectGroupError, setSelectGroupError] = useState<boolean>(false);
    const configureHeaderBackButton = () => {
        navigation.setOptions({
            headerTitleAlign: "center",
            title: "Search for a schedule",
            headerLeft: () => (
                <HeaderBackButton
                    navigation={navigation}
                />
            )
        })
    };

    const searchButtonPressHandler = () => {
        if (selectedGroupId == -1) {
            setSelectGroupError(true);
            return;
        }
        navigation.navigate("ScheduleResult", { groupId: selectedGroupId });
    };

    const onGroupChangeHandler = (id: number) => {
        setSelectedGroupId(id);
        setSelectGroupError(false);
    };

    useEffect(() => {
        configureHeaderBackButton();
    }, [])

    return (
        <>
            <View
                style={[ScheduleSearchStyle.pageWrapper, {
                    backgroundColor: colors.white
                }]}>

                <GroupInput
                    onGroupChange={onGroupChangeHandler}
                />

                <View style={[{ width: "80%", height: 50, backgroundColor: colors.grayBackgroud, marginVertical: 15 }]}>
                    <TouchableOpacity style={[{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%", borderRadius: 10 }]}
                        onPress={() => {
                            searchButtonPressHandler();
                        }}>
                        <Text style={[{ color: hasSelectGroupError ? colors.accentRed : colors.primary , fontSize: 17, fontWeight: "bold" }]}> Load </Text>
                    </TouchableOpacity>
                </View>

                
            {hasSelectGroupError
                ? <Text style={[{color: colors.accentRed, fontSize: 17}]}>Select a group</Text>
                : <></>
            }
            </View>

        </>


    )
}

export default ScheduleSearch;