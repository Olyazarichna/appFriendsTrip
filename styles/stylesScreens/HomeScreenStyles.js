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
    textConteiner: {
    width: ScreenSettings.returnParams(301, 450),    
    },
    leble: {
        marginTop: 170,
        color: variables.lableButtonWhite,
        textAlign: "center", 
        ...fonts(ScreenSettings.returnParams(20, 30), "600", 1.2) 
    },
    title: {
        marginTop: 25,
        color: variables.lableButtonWhite,
       textAlign: "center",
    ...fonts(ScreenSettings.returnParams(24, 34), "600", 1.2)   
    },
    text: {
        color: variables.lableButtonWhite,
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