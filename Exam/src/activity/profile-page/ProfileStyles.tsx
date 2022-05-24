import { StyleSheet } from "react-native";

const ProfileStyles = StyleSheet.create({
    pageWrapper: {
        flex: 1,
        alignSelf: "stretch",
    },

    profileCard: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
        marginVertical: 16,
        borderRadius: 15,
        borderWidth: 1,
        flexDirection: "row",
    },

    cardInfo: {
        flex: 2,
        marginHorizontal: 10,
        marginVertical: 25
    },

    cardName: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 15
    },

    cardInfoText: {
        fontSize: 17,
        fontWeight: "500",
    },

    profileBody: {
        flex: 4,
        alignItems: "center",
    },

    bodyWrapper: {
        width: "100%",
    },

    markHeader: {
        fontSize: 20,
        fontWeight: "600",
        margin: 20,
        alignSelf: "center",
    },

    groupButton: {
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
    },

    buttonText: {
        padding: 20,
        fontSize: 17,
        fontWeight: "500",
    },

    tableHeader: {
        marginTop: 20,
        height: 40,
        width: "90%",
        alignSelf: "center"
    },

    tableText: {
        alignSelf: "center",
    },

    tableCell: {
        height: 40,
        alignSelf: "center",
        width: "90%"
    }
});

export default ProfileStyles;