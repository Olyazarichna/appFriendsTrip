import fonts from '../utils/mixins';
import variables from '../utils/variables';
import { ScreenSettings } from '../utils/ScreenSettings';

export const HomeScreenStyles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        width: ScreenSettings.returnParams(301, 450),
    },
    label: {
        marginTop: 170,
        color: variables.labelButtonWhite,
        textAlign: "center",
        ...fonts(ScreenSettings.returnParams(20, 30), "600", 1.2)
    },
    title: {
        marginTop: 25,
        color: variables.labelButtonWhite,
        textAlign: "center",
        ...fonts(ScreenSettings.returnParams(24, 34), "600", 1.2)
    },
    text: {
        color: variables.labelButtonWhite,
        marginTop: 20,
        textAlign: "center",
        ...fonts(ScreenSettings.returnParams(14, 20), "500", 1.3)
    },
    imageOne: {
        width: ScreenSettings.returnParams(140, 300),
        position: "absolute",
        left: 0,
        top: ScreenSettings.returnParams(10, 0)
    },
    imageTwo: {
        width: ScreenSettings.returnParams(127, 300),
        position: "absolute",
        right: 0,
        top: ScreenSettings.returnParams(10, 0)
    },
}