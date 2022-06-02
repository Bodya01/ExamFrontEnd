import { number } from "prop-types";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import StudentService from "../../../../api-service/student-service/StudentService";
import ChangeAccountModel from "../../../../models/user-models/ChangeAccountModel";
import Student from "../../../../models/user-models/Student";
import StorageManager from "../../../components/storage/StorageManager";
import { useTheme } from "../../../components/theme/ThemeProvider";
import BankAccountStyles from "./BankAccountStyles";


const BankAccount = ({ navigation }: any) => {
    const { colors } = useTheme();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [id, setId] = useState<string>();
    const [isSuccessful, setIsSuccessful] = useState<boolean>();
    const [bankAccout, setBankAccount] = useState<string | undefined>("MYBANK");
    const [newBankAccount, setNewBankaccount] = useState<string>("");
    const [confirmBankAccount, setConfirmBankAccount] = useState<string>("");
    const [hasConfirmError, setConfirmError] = useState<boolean>(false);

    const updateAccount = (props: ChangeAccountModel) => {
        StudentService.updateBankAccount({ userId: props.userId, bankAccount: props.bankAccount }).then((res) => {
            console.warn(res.data);
            setBankAccount(newBankAccount);
            setIsSuccessful(true);
        }).catch(err => console.warn(err))
    };

    useEffect(() => {
        StorageManager.getUserType().then((type) => {
            if (type == "Student") {
                StorageManager.getStoredUser().then((user) => {
                    let student = user as Student;
                    setBankAccount(student?.bankAccount);
                    setId(student?.id!);
                })
            }
        });
        if (newBankAccount !== confirmBankAccount) {
            setConfirmError(true);
        }
        else {
            setConfirmError(false);
        }
    }, [newBankAccount, confirmBankAccount])

    return (
        <ScrollView style={[{ backgroundColor: colors.grayBackgroud }]} scrollEnabled={!isLoading}>
            {

                <View style={[BankAccountStyles.pageWrapper]}>

                    <View style={[
                        BankAccountStyles.inputWrapper, {
                            backgroundColor: colors.white
                        }]}>
                        <Text style={[
                            BankAccountStyles.headerText, {
                                color: colors.secondaryDark
                            }]}>
                            Change bank account
                        </Text>
                        <TextInput
                            placeholder="Enter new bank account"
                            placeholderTextColor={colors.disable}
                            style={[
                                BankAccountStyles.input, {
                                    borderColor: hasConfirmError ? colors.accentRed : colors.disable,
                                    color: colors.primary
                                }]}
                            onChangeText={(text) => {
                                setNewBankaccount(text);
                            }}
                        />

                        <TextInput
                            placeholder="Confirm new bank account"
                            placeholderTextColor={colors.disable}
                            style={[
                                BankAccountStyles.input, {
                                    borderColor: hasConfirmError ? colors.accentRed : colors.disable,
                                    color: colors.primary
                                }]}
                            onChangeText={(text) => {
                                setConfirmBankAccount(text);
                            }}
                        />
                        {hasConfirmError
                            ? (
                                <Text
                                    style={[BankAccountStyles.errorMessage, {
                                        color: colors.accentRed
                                    }]}>
                                    Fields must have same value
                                </Text>)
                            : <></>
                        }

                        <View style={[{ width: "100%", justifyContent: "center", alignItems: "center", }]}>
                            <TouchableOpacity
                                onPress={() => {
                                    updateAccount({ userId: id!, bankAccount: newBankAccount });
                                }}
                                style={[BankAccountStyles.confirmButtonWrapper, {
                                    backgroundColor: colors.neutralLight
                                }]}
                            >
                                <Text style={[BankAccountStyles.buttonText,
                                {
                                    color: colors.primary
                                }]}>
                                    Change
                                </Text>
                            </TouchableOpacity>
                            {isLoading
                                ? <ActivityIndicator size={"large"} color={colors.accentBlue} />
                                : isSuccessful
                                    ? <Text style={[{ color: colors.accentGreen, fontSize: 17, marginTop: 5 }]}>Bank account changed successfuly</Text>
                                    : <></>
                            }
                        </View>
                    </View>

                    <View
                        style={[BankAccountStyles.currentAccountWrapper, {
                            backgroundColor: colors.white,
                        }]}>
                        {bankAccout === null
                            ? <Text
                                style={[BankAccountStyles.noAccountText, {
                                    color: colors.primary,
                                }]}>
                                You don't have any linked bank accounts
                            </Text>
                            : (<>
                                <Text
                                    style={[BankAccountStyles.bankAccountText, {
                                        color: colors.primary
                                    }]}>
                                    Your current bank account is: 
                                </Text>
                                <Text style={[BankAccountStyles.bankAccountText, {
                                    color: colors.primary
                                }]}>
                                    {bankAccout}
                                </Text>
                            </>)
                        }
                    </View>
                </View>
            }
        </ScrollView >
    )
};

BankAccount.navigationOptions = {
    headerLeft: (
        <TouchableOpacity>
            <Ionicons
                name="arrow-back-circle"
                color={"#fff"}
            />
        </TouchableOpacity>
    )
};

export default BankAccount;