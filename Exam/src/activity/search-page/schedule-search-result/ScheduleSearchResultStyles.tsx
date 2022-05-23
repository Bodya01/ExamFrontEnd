import { StyleSheet } from "react-native";

const ScheduleSearchResultStyles = StyleSheet.create({
    pageWrapper: {
        flex: 1
    },
    
    cardsWrapper: {
        alignItems: "center"
    },

    scheduleCardWrapper: {
        width: "90%",
        margin: 15,
        borderRadius: 15
    },

    scheduleCardHeader: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    headerText: {
        fontSize: 17,
        padding: 12,
    },

    bodyWrapper: {
        alignItems: "center"
    },

    bodyText: {
        fontSize: 17,
        margin: 10
    },
})

export default ScheduleSearchResultStyles;