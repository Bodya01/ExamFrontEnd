import React, { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContext } from '../../components/auth/AuthContext';
import LoginButtonStyles from '../../components/login/LoginButtonStyles';
import { useTheme } from '../../components/theme/ThemeProvider';
import LoginStyle from './LoginStyle';

const Login = () => {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { hasLoginError, login } = useContext(AuthContext);
    const { colors } = useTheme();

    return (
        <View
            style={[
                LoginStyle.pageWrapper, {
                    backgroundColor: colors.primary
                }]}>
            <View
                style={[
                    LoginStyle.headerWrapper, {
                        backgroundColor: colors.primary,
                    }]}>
                <Text
                    style={[
                        LoginStyle.greetingMessage, {
                            color: colors.white
                        }]}>
                    Welcome!
                </Text>
            </View>
            <View style={[LoginStyle.bodyWrapper, { backgroundColor: colors.white }]}>
                <View style={[LoginStyle.inputWrapper]}>
                    <TextInput
                        placeholder="Your login"
                        placeholderTextColor={colors.secondaryDark}
                        style={[
                            LoginStyle.input,
                            {
                                borderColor: colors.secondaryLight,
                                color: colors.primary
                            }]}
                        value={userName}
                        onChangeText={loginText => setUserName(loginText)}
                    />
                    <TextInput
                        placeholder="Your password"
                        placeholderTextColor={colors.secondaryDark}
                        style={[
                            LoginStyle.input,
                            {
                                borderColor: colors.secondaryLight,
                                color: colors.primary
                            }]}
                        value={password}
                        onChangeText={passText => setPassword(passText)}
                        secureTextEntry
                    />
                    {hasLoginError
                        ? <Text
                            style={[
                                LoginStyle.errorMessage,
                                {
                                    color: colors.accentRed
                                }
                            ]}>
                            Oops, something went wrong
                        </Text>
                        : <></>
                    }
                    <View style={[LoginButtonStyles.buttonWrapper, { backgroundColor: colors.grayBackgroud }]}>
                        <TouchableOpacity
                            style={[{ alignItems: "center" }]}
                            onPress={() => {
                                login(userName, password)
                            }}
                        >
                            <Text style={[LoginButtonStyles.buttonText, { color: colors.primary, }]}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login;