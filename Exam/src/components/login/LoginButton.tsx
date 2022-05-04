import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../auth/AuthContext";
import LoginButtonProps from "./LoginButtonProps";
import LoginButtonStyles from "./LoginButtonStyles";

const LoginButton = (props: LoginButtonProps) => {
    const { login } = useContext(AuthContext);
    return(
        <View style={[LoginButtonStyles.buttonWrapper]}>
            <TouchableOpacity 
                style={[{alignItems: "center"}]}
                onPress={() => {
                    login(props.userName, props.password)
                }}
            >
                <Text style={[{color: 'white', fontSize: 30}]}>Log in</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginButton;