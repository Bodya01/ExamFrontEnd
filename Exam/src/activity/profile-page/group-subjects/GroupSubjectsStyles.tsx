import { StyleSheet } from "react-native";

const GroupSubjectsStyles = StyleSheet.create({
    pageWrapper: {
        flex: 1,
    },
    
    groupSubjectHeader: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "600",
        margin: 20, 
    },

    markNavButton:{
        width: "80%",
        alignSelf: "center",
        borderRadius: 10,
        alignItems: "center", 
    },

    buttonText:{
        fontSize: 20,
        fontWeight: "600",
        padding: 20, 
    }
})

export default GroupSubjectsStyles;