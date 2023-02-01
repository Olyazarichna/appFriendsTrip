import { Platform } from 'react-native';
import variables from '../utils/variables';
import fonts from '../utils/mixins';
import { ScreenSettings } from '../utils/ScreenSettings';

export const LoginScreenStyles = {
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: variables.lableButtonWhite,
    justifyContent: 'center',
  },
  buttonHome: {
    position: 'absolute',
    top: 40,
    left: 15,
  },
  title: {
    color: variables.titleColor,
    textAlign: 'center',
    marginBottom: Platform.OS === 'ios' ? 20 : 10,
    ...fonts(ScreenSettings.returnParams(24, 28), '600'),
  },
  titleText: {
    width: Platform.OS === 'ios' ? 186 : 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: Platform.OS === 'ios' ? 35 : 20,
    textAlign: 'center',
    color: variables.textColor,
    ...fonts(ScreenSettings.returnParams(14, 18), '500'),
  },
  socialButtonsConteiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: ScreenSettings.returnParams(0, 50),
  },
  socialButtons: {
    width: ScreenSettings.returnParams(140, 250),
    height: ScreenSettings.returnParams(60, 80),
    marginRight: ScreenSettings.returnParams(15, 30),
    backgroundColor: 'rgba(249, 250, 251, 1)',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButtonsText: {
    marginLeft: ScreenSettings.returnParams(10, 20),
    color: variables.inputColor,
    ...fonts(ScreenSettings.returnParams(14, 18), '500'),
  },
  form: {
    marginHorizontal: ScreenSettings.returnParams(24, 60),
  },
  input: {
    marginTop: ScreenSettings.returnParams(20, 40),
    marginBottom: ScreenSettings.returnParams(10, 15),
    borderWidth: 1,
    borderColor: variables.lableButtonWhite,
    height: ScreenSettings.returnParams(63, 80),
    paddingLeft: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(249, 250, 251, 1)',
    ...fonts(ScreenSettings.returnParams(14, 18), '500'),
    color: variables.inputColor,
  },
  inputIcon: {
    position: 'absolute',
    top: ScreenSettings.returnParams(-55, -70),
    left: 22,
  },
  inputIconMail: {
    position: 'absolute',
    top: ScreenSettings.returnParams(35, 65),
    left: 22,
  },
  inputLable: {
    position: 'absolute',
    zIndex: 1,
    top: ScreenSettings.returnParams(38, 70),
    left: 60,
    color: variables.inputColor,
    ...fonts(ScreenSettings.returnParams(14, 18), '500'),
  },
  inputLableOff: {
    position: 'absolute',
    zIndex: 1,
    top: ScreenSettings.returnParams(0, -5),
    left: 10,
    color: variables.inputColor,
    ...fonts(ScreenSettings.returnParams(14, 18), '500'),
  },
  ForgotPas: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: ScreenSettings.returnParams(0, 10),
    marginBottom: ScreenSettings.returnParams(0, 10),
    ...fonts(ScreenSettings.returnParams(14, 16), '500'),
    color: '#0F172A',
  },
  textRegister: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    color: variables.textColor,
    marginTop: ScreenSettings.returnParams(0, 20),
    marginBottom: ScreenSettings.returnParams(10, 20),
    ...fonts(ScreenSettings.returnParams(14, 16), '500'),
  },
  buttonRegister: {
    color: '#375ABE',
  },
  stailsNotCorect: {
    position: 'absolute',
    top: ScreenSettings.returnParams(60, 120),
    left: 50,
    zIndex: 1,
    padding: 3,
  },
  stailsNotCorectText: {
    color: 'red',
    ...fonts(ScreenSettings.returnParams(10, 13), '400'),
  },
};
