import { Dimensions, StyleSheet } from "react-native";
import { StyleConstants } from "../../components/constants/StyleConstants";

const SearchStyles = StyleSheet.create({
    pageWrapper: {
        width: StyleConstants.screenWidth,
        height: StyleConstants.screenHeight,
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap",
    },

    buttonWrapper: {
        marginVertical: 10,
        width: 160, height: 100,
    },

    buttonGradient: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default SearchStyles;