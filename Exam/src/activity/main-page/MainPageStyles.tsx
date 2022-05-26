import { StyleSheet } from "react-native";

const MainPageStyle = StyleSheet.create({
    pageWrapper: {
        height: "100%",
        alignItems: "center",
    },

    examHeader: {
        fontSize: 20,
        marginVertical: 20
    },

    examsContainer: {
        width: "100%",
        alignItems: "center",
        flex: 1
    },

    examsScroll: {
        height: "100%",
        width: "80%",
        borderRadius: 15,
    },

    nextExamContainer: {
        flex: 1,
        width: "100%"
    },

    nextExamHeaderWrapper: {
        alignSelf: "center",
        width: "80%",
        alignItems: "center",
        margin: 20
    },

    nextExamText: {
        fontSize: 17,
    },

    nextExamWrapper:{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%" 
    }
});

export default MainPageStyle;