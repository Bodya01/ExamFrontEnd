import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    pageWrapper: {
        flex: 1,
    },
    headerWrapper: {
        flex: 1,
        justifyContent: "center"
    },
    bodyWrapper: {
        flex: 3,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        alignItems: "center",
        justifyContent: "center"
    },

    greetingMessage: {
        fontSize: 40,
        marginLeft: "10%",
    },

    inputWrapper: {
        width: '80%',
    },

    input: {
        flexDirection: "row",
        marginBottom: 12,
        borderWidth: 1.5,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14
    },

    errorMessage: {
        alignSelf: "center",
        fontSize: 15,
        marginBottom: 10,
    }
})

export default LoginStyle