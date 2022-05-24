import { StyleSheet } from "react-native";

const JournalMarksStyles = StyleSheet.create({
    pageWrapper: {
        flex: 1,
    },

    pageHeader: {
        fontSize: 20,
        alignSelf: "center",
        marginVertical: 10,
        fontWeight: "600"
    },

    tableHeader: {
        marginTop: 20,
        height: 40,
    },

    tableHeadText: {
        alignSelf: "center",
        textAlign: "center"
    },

    tableRow: {
        height: 40
    },

    tableRowText: {
        alignSelf: "center"
    },

    submitButton: {
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        margin: 30,
        borderRadius: 15,
    },

    submitButtonText: {
        fontSize: 20,
        padding: 15
    }
})

export default JournalMarksStyles;