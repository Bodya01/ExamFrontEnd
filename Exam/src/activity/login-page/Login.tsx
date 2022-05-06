import React, { useState } from 'react';
import { TextInput, View } from "react-native";
import LoginButton from "../../components/login/LoginButton";
import LoginStyle from './LoginStyle';

const Login = () => {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    return(
        <View style= {[LoginStyle.pageWrapper]}>
            <View style={[LoginStyle.inputWrapper]}>
                <TextInput placeholder="Your login" 
                    style={[LoginStyle.input]}
                    value={userName}
                    onChangeText={loginText => setUserName(loginText)}
                />
                <TextInput placeholder="Your password"
                    style={[LoginStyle.input]}
                    value={password}
                    onChangeText={passText => setPassword(passText)}
                    secureTextEntry
                />
                <LoginButton
                    userName={userName}
                    password={password}
                />
            </View>
        </View>
    )
}

export default Login;