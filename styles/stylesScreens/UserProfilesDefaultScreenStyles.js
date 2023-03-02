import variables from "../utils/variables";
import fonts from "../utils/mixins";
import { ScreenSettings } from '../utils/ScreenSettings';

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
        marginHorizontal: 15,
        justifyContent: 'center',
        width: ScreenSettings.returnParams(300, 600),
        marginBottom: 50,
    },
    textTitle: {
        marginTop: 19,
        color: variables.titleColor,
        ...fonts(ScreenSettings.returnParams(14, 18), "500")
    },
    input: {
        marginTop: ScreenSettings.returnParams(14, 16),
        marginLeft: 5,
        color: variables.textColor,
        ...fonts(ScreenSettings.returnParams(12, 16), "500"),
    },
    inputEditable: {
        width: '75%',
        borderWidth: 1,
        marginLeft: 5,
        borderColor: "rgba(69, 124, 247, 1)",
        borderRadius: 4,
        padding: 8,
        marginTop: 3,
    },
    checkButton: {
        marginTop: 18,
        marginLeft: "auto"
    },
    aboutText: {
        width: 303,
        marginTop: 7,
        color: variables.textColor,
        ...fonts(ScreenSettings.returnParams(12, 16), "500")
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
        ...fonts(ScreenSettings.returnParams(10, 12), "400")
    },
}