import { StyleSheet } from "react-native";

const BankAccountStyles = StyleSheet.create({
    pageWrapper: {
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
    },

    inputWrapper: {
        width: "100%",
        alignItems: "center",
        borderRadius: 20,
        padding: 20,
        marginVertical: 5
    },

    headerText: {
        fontSize: 20,
    },

    input: {
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 15,
        fontSize: 16
    },

    errorMessage: {
        marginBottom: 15,
        fontSize: 17,
    },

    confirmButtonWrapper: {
        padding: 5,
        width: "80%",
        borderRadius: 20,
        alignItems: "center",
    },

    buttonText: {
        fontSize: 25
    },

    currentAccountWrapper: {
        flex: 2,
        width: "100%",
        alignItems: "center",
        borderRadius: 20,
        marginVertical: 5
    },

    noAccountText: {
        fontSize: 20,
        marginVertical: 30
    },

    bankAccountText: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 5
    }
});

export default BankAccountStyles;