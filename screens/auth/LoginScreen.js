import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { Feather, Octicons, AntDesign, Ionicons} from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";

import variables from "../../styles/utils/variables";
import fonts from "../../styles/utils/mixins";

import handleToggle from "../../helpers/handleToggle";
import changeInput from "../../helpers/changeInput";

import ButtonLongBlue from "../../components/Buttons/ButtonLongBlue";
import validation from '../../helpers/validation/validation';


const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {

  const [state, setState] = useState(initialState);

  const [togglePassword, setTogglePassword] = useState(true);
  const [emailChange, setEmailChange] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);



  const dispatch = useDispatch();
  
  const handleSubmit = () => {

  if (!checkValidEmail) {
      setErrorEmail(true);
      return;
    }
    setErrorEmail(false)
    setState(initialState);
    setEmailChange(false);
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    console.log('submit', state);
    dispatch(logIn(state));
  };

  return (
    <View style={styles.container}>

       <Text style={{...styles.title, marginTop: isShowKeyboard ? 140 : 20}}>Hello Again!</Text>
      <Text style={styles.titleText}>Welcome back. We're glad to see you again</Text>
      
      <View style={styles.socialButtonsConteiner}>
        <TouchableOpacity style={styles.socialButtons}>
          <Image source={require('../../assets/images/google.png')} />
          <Text style={styles.socialButtonsText}>Or Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtons}>
          <AntDesign name="apple1" size={28} color="black" />
          <Text style={styles.socialButtonsText}>Or Apple ID</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
      
        <View>
          {emailChange ? <Text style={styles.inputLableOff}>Your Email</Text> : <Text style={styles.inputLable}>Your Email</Text>}
          
          {errorEmail && <View style={styles.stailsNotCorect}>
            {state.email === '' ? <Text style={styles.stailsNotCorectText}>You have not entered an email</Text> :
            <Text style={styles.stailsNotCorectText}>You have entered an incorrect email</Text>}
            
          </View>}
          
          <TextInput
            value={state.email}
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              changeInput(value, setState, setEmailChange, 'email', validation.email, setCheckValidEmail)
            }
          />
          <View style={styles.inputIconMail}>
            <Octicons name="mail" size={24} color={variables.inputColor} />
          </View>
        </View>
        <View>
          {passwordChange ? <Text style={styles.inputLableOff}>Password</Text> : <Text style={styles.inputLable}>Password</Text>}
          <TextInput
            value={state.password}
            style={styles.input}
            secureTextEntry={togglePassword}
            onFocus={() =>  setIsShowKeyboard(true)}
            onChangeText={(value) =>
              changeInput(value, setState, setPasswordChange, 'password')
            }
          />
          <TouchableOpacity onPress={() => handleToggle(setTogglePassword)}>
            <View style={styles.inputIcon}>
           {togglePassword ? <Feather name="lock" size={24} color={variables.inputColor} /> : <Feather name="unlock" size={24} color={variables.inputColor} />}
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.ForgotPas}>Forgot Password?</Text>
        </TouchableOpacity>
       
        <ButtonLongBlue
          title={'SING IN'}
          marginTop={10}
          marginBottom={10}
          marginLeft={"auto"}
          marginRight={"auto"}
          click={handleSubmit}
        />
        
        <Text style={styles.textRegister}>By using the application, you agree to the
          <Text style={styles.buttonRegister}>Terms & Conditons.</Text></Text>
        
        <Text style={styles.textRegister}>
          Don't have an account? 
          <Text style={styles.buttonRegister} onPress={() => navigation.navigate("Registration")}>
            Sign in
          </Text>
        </Text>
        
      </View>
      <TouchableOpacity style={styles.buttonHome} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="md-home" size={24} color={variables.lableButtonBlue} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: variables.lableButtonWhite,
    justifyContent: "center",
  },
  buttonHome: {
    position: "absolute",
    top: 40,
    left: 15
  },
  title: {
    color: variables.titleColor,
    textAlign: "center",
    marginBottom: 10,
    // marginTop: 140,
  ...fonts(24, "600")
  },
  titleText: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    textAlign: "center",
    color: variables.textColor,
    ...fonts(14, "500")
  },
  socialButtonsConteiner: {
    flexDirection: 'row',
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",

   },
  socialButtons: {
    width: 140,
    height: 60,
    marginRight: 15,
    backgroundColor: "rgba(249, 250, 251, 1)",
    borderRadius: 20,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "center", 
  },
  socialButtonsText: {
    marginLeft: 10,
    color: variables.inputColor,
  ...fonts(14, "500")
  },
  form: {
    marginHorizontal: 24,
  },
  input: {
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: variables.lableButtonWhite,
    height: 63,
    paddingLeft: 60,
    borderRadius: 20,
    backgroundColor: "rgba(249, 250, 251, 1)",
    color: variables.inputColor
  },
  inputIcon: {
    position: "absolute",
    top: -55,
    left: 22,

  },
  inputIconMail: {
    position: "absolute",
    top: 35,
    left: 22, 
   
  },
inputLable: {
  position: "absolute",
  zIndex: 1,
  top: 38,
  left: 60,
  color: variables.inputColor,
  ...fonts(14, "500")
  },
inputLableOff: {
  position: "absolute",
  zIndex: 1,
  top: 0,
  left: 10,
   color: variables.inputColor,
  ...fonts(14, "500")
  },
  ForgotPas: {
    marginLeft: "auto",
    marginRight: "auto",
    ...fonts(14, "500"),
  color: "#0F172A"
},
  textRegister: {
  marginLeft: "auto",
    marginRight: "auto",
  textAlign: "center",
    color: variables.textColor,
    marginBottom: 10,
  ...fonts(14, "500")
  },
  buttonRegister: {
    color: "#375ABE", 
  },
  stailsNotCorect: {
    position: "absolute",
    top: 60,
    left: 50,
    zIndex: 1,
    padding: 3,
    // borderRadius: 5,
    // backgroundColor: variables.lableButtonBlue,  
  },
  stailsNotCorectText: {
    color: "red",
   ...fonts(10, "400") 
  }
  });
