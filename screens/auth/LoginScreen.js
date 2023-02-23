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
import { Feather, Octicons, AntDesign, Ionicons } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";

import variables from "../../styles/utils/variables";
import fonts from "../../styles/utils/mixins";

import handleToggle from "../../helpers/handleToggle";
import changeInput from "../../helpers/changeInput";

import ButtonLongBlue from "../../components/Buttons/ButtonLongBlue";
import { validation } from "../../helpers/validation/validation";

import { LoginScreenStyles } from "../../styles/stylesScreens/LoginScreenStyles";
import { ScreenSettings } from "../../styles/utils/ScreenSettings";

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
    setErrorEmail(false);
    setState(initialState);
    setEmailChange(false);
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    console.log("Login successful", state);
    dispatch(logIn(state));
  };

  const IOS = Platform.OS === "ios";
  const AND = Platform.OS === "android";

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text
            style={{ ...styles.title, marginTop: isShowKeyboard ? 140 : 20 }}
          >
            Hello Again!
          </Text>
          <Text style={styles.titleText}>
            Welcome back. We're glad to see you again
          </Text>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButtons}>
              <Image source={require("../../assets/images/google.png")} />
              <Text style={styles.socialButtonsText}>
                {AND && <Text>Or</Text>} Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButtons}>
              <AntDesign name="apple1" size={28} color="black" />
              <Text style={styles.socialButtonsText}>
                {AND && <Text>Or</Text>} Apple ID
              </Text>
            </TouchableOpacity>
          </View>

          {IOS && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
                marginTop: 30,
              }}
            >
              <View
                style={{
                  width: 100,
                  height: 1,
                  marginRight: 20,
                  backgroundColor: "#BEBFC6",
                }}
              ></View>
              <Text
                style={{
                  ...fonts(),
                  color: "#696969",
                }}
              >
                Or
              </Text>
              <View
                style={{
                  width: 100,
                  height: 1,
                  marginLeft: 20,
                  backgroundColor: "#BEBFC6",
                }}
              ></View>
            </View>
          )}

          <View style={styles.form}>
            <View>
              {emailChange ? (
                <Text style={styles.inputLabelOff}>Your Email</Text>
              ) : (
                <Text style={styles.inputLabel}>Your Email</Text>
              )}

              {errorEmail && (
                <View style={styles.stylesNotCorrect}>
                  {state.email === "" ? (
                    <Text style={styles.stylesNotCorrectText}>
                      You have not entered an email
                    </Text>
                  ) : (
                    <Text style={styles.stylesNotCorrectText}>
                      You have entered an incorrect email
                    </Text>
                  )}
                </View>
              )}

              <TextInput
                value={state.email}
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  changeInput(
                    value,
                    setState,
                    "email",
                    setEmailChange,
                    validation.email,
                    setCheckValidEmail
                  )
                }
              />
              <View style={styles.inputIconMail}>
                <Octicons
                  name="mail"
                  size={ScreenSettings.returnParams(24, 29)}
                  color={variables.inputColor}
                />
              </View>
            </View>
            <View>
              {passwordChange ? (
                <Text style={styles.inputLabelOff}>Password</Text>
              ) : (
                <Text style={styles.inputLabel}>Password</Text>
              )}
              <TextInput
                value={state.password}
                style={styles.input}
                secureTextEntry={togglePassword}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  changeInput(value, setState, "password", setPasswordChange)
                }
              />
              <TouchableOpacity onPress={() => handleToggle(setTogglePassword)}>
                <View style={styles.inputIcon}>
                  {togglePassword ? (
                    <Feather
                      name="lock"
                      size={ScreenSettings.returnParams(24, 29)}
                      color={variables.inputColor}
                    />
                  ) : (
                    <Feather
                      name="Unlock"
                      size={ScreenSettings.returnParams(24, 29)}
                      color={variables.inputColor}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.ForgotPas}>Forgot Password?</Text>
            </TouchableOpacity>

            <ButtonLongBlue
              title={"SIGN IN"}
              marginTop={10}
              marginBottom={10}
              marginLeft={"auto"}
              marginRight={"auto"}
              click={handleSubmit}
            />

            <Text style={styles.textRegister}>
              By using the application, you agree to the
              <Text style={styles.buttonRegister}>Terms & Conditions.</Text>
            </Text>

            <Text style={styles.textRegister}>
              Don't have an account?
              <Text
                style={styles.buttonRegister}
                onPress={() => navigation.navigate("Registration")}
              >
                Sign in
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.buttonHome}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons
              name="md-home"
              size={24}
              color={variables.labelButtonBlue}
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create(LoginScreenStyles);
