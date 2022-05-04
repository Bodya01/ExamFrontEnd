import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    pageWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    inputWrapper: {
        width: '80%',
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14
    },
})

export default LoginStyle