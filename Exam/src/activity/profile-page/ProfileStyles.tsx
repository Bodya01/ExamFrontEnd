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
    }
});

export default ProfileStyles;