import variables from "../utils/variables";
import fonts from "../utils/mixins";
import { ScreenSettings } from '../utils/ScreenSettings';

export const RegistrationScreenStyles = {
container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
   
  },
   buttonHome: {
    position: "absolute",
    top: 35,
    left: 15
  },
  title: {
    marginTop: 40,
    color: variables.titleColor,
    textAlign: "center",
    marginBottom: 20,
    ...fonts(ScreenSettings.returnParams(24, 30), "600"),
  },
  titleText: {
    width: 154,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 18,
    textAlign: "center",
    color: variables.textColor,
    ...fonts(ScreenSettings.returnParams(14, 18), "500"),
  },
  form: {
     marginHorizontal: ScreenSettings.returnParams(24, 60),
    marginTop: 5
  },
  input: {
    marginTop: ScreenSettings.returnParams(20, 40),
    marginBottom: ScreenSettings.returnParams(10, 15),
    borderWidth: 1,
    borderColor: variables.labelButtonWhite,
    height: ScreenSettings.returnParams(63, 80),
    paddingLeft: 60,
    borderRadius: 20,
      backgroundColor: "rgba(249, 250, 251, 1)",
    ...fonts(ScreenSettings.returnParams(14, 18), "500"),
    color: variables.inputColor
  },
  inputIcon: {
    position: "absolute",
    top: ScreenSettings.returnParams(35, 65),
    left: 22,  
  },
  inputIconPass: {
   position: "absolute",
   top: ScreenSettings.returnParams(-55, -70),
   left: 22,
  },
  inputLable: {
  position: "absolute",
  zIndex: 1,
  top: ScreenSettings.returnParams(38, 70),
  left: 60,
  color: variables.inputColor,
  ...fonts(ScreenSettings.returnParams(14, 18), "500")
  },
inputLableOff: {
  position: "absolute",
  zIndex: 1,
  top: ScreenSettings.returnParams(0, -5),
  left: 10,
   color: variables.inputColor,
   ...fonts(ScreenSettings.returnParams(14, 18), "500")
  },
  hint: {
    marginLeft: "auto",
    color: variables.labelButtonBlue,
  ...fonts(ScreenSettings.returnParams(10, 13), "400"),
  },
  error: {
    color: "red",
  },
  textRegister: {
  width: ScreenSettings.returnParams(230, 300),
  marginTop: ScreenSettings.returnParams(14, 20),
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  color: variables.textColor,
  marginBottom: 10,
  ...fonts(ScreenSettings.returnParams(14, 18), "400"),
  },
  buttonRegister: {
    color: "#375ABE",  
  },
   stailsNotCorect: {
    position: "absolute",
    top: ScreenSettings.returnParams(60, 120),
    left: 50,
    zIndex: 1,
    padding: 3,  
  },
  stailsNotCorectText: {
    color: "red",
   ...fonts(ScreenSettings.returnParams(10, 13), "400"),
  }
}