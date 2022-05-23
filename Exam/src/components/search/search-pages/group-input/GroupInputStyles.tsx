import { StyleSheet } from "react-native";

const GroupInputStyles = StyleSheet.create({
    wrapper: {
        width: "80%",
        alignItems: "center",
        marginVertical: 15
    },

    buttonWrapper: {
        width:"100%",
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },

    inputHeader: {
        alignSelf: "flex-start",
        fontSize: 20,
        fontWeight: "500",
        marginVertical: 7
    },
    
    inputText:{
        fontSize: 17
    }
})

export default GroupInputStyles;