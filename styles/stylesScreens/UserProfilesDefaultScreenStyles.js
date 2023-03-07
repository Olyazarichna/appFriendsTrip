import variables from "../utils/variables";
import fonts from "../utils/mixins";
import { ScreenSettings } from "../utils/ScreenSettings";

export const UserProfilesDefaultScreenStyles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    avatarContainer: {
        width: ScreenSettings.returnParams(120, 200),
        height: ScreenSettings.returnParams(124, 208),
        marginBottom: ScreenSettings.returnParams(0, 50),
        backgroundColor: "#E3E5E8",
        borderRadius: ScreenSettings.returnParams(65, 100),
    },
    dataContainer: {
        marginHorizontal: 40,
        // justifyContent: 'center',
        // width: ScreenSettings.returnParams(300, 600),
        marginBottom: 50,
    },
    textTitle: {
        width: "25%",
        marginTop: 19,
        color: variables.titleColor,
        ...fonts(ScreenSettings.returnParams(14, 18), "500"),
    },
    input: {
        marginTop: ScreenSettings.returnParams(14, 16),
        color: variables.textColor,
        ...fonts(ScreenSettings.returnParams(12, 16), "500"),
        width: "70%",
        padding: 5,
    },
    inputEditable: {
        width: "70%",
        borderWidth: 1,
        borderColor: "rgba(69, 124, 247, 1)",
        borderRadius: 4,
        padding: 5,
        marginLeft: 5,
        marginTop: 3,
    },
    checkButton: {
        alignItems: "center",
        justifyContent: "center",
    },
    stylesNotCorrect: {
        position: "absolute",
        top: ScreenSettings.returnParams(35, 40),
        left: 10,
        zIndex: 1,
        padding: 3,
    },
    stylesNotCorrectText: {
        color: "red",
        ...fonts(ScreenSettings.returnParams(10, 12), "400"),
    },
};
