import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/authOperations";

import { Octicons, Ionicons, Feather } from "@expo/vector-icons";

import variables from "../../styles/utils/variables";
import { RegistrationScreenStyles } from "../../styles/stylesScreens/RegistrationScreenStyles";
import { ScreenSettings } from "../../styles/utils/ScreenSettings";

import handleToggle from "../../helpers/handleToggle";

import ButtonLongBlue from "../../components/Buttons/ButtonLongBlue";

export default function RegistrationScreen({ navigation }) {
  const userInfo = useSelector((state) => state.auth);

  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [phone, setPhone] = useState(userInfo.phone);
  const [password, setPassword] = useState(userInfo.password);
  const [repeatingPassword, setRepeatingPassword] = useState(null);

  const [passwordError, setPasswordError] = useState(false);
  const [togglePassword, setTogglePassword] = useState(true);
  const [toggleRepeatingPassword, setToggleRepeatingPassword] = useState(true);

  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const dispatch = useDispatch();

  const handleEmailChange = (email) => {
    setEmail(email);
    setIsValidEmail(/\S+@\S+\.\S+/.test(email));
  };
  const handlePhoneChange = (phone) => {
    setPhone(phone);
    setIsValidPhone(
      /^\+?\d{1,3}?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/gm.test(phone)
    );
  };
  const handleSubmit = () => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      repeatingPassword === ""
    ) {
      alert("All fields must be filled");
      return;
    }

    if (password !== repeatingPassword) {
      setPasswordError("Passwords do not match. Please try again.");
      return;
    }
    const user = {
      name,
      email,
      phone,
      password,
    };
    dispatch(signUp(user));
    Keyboard.dismiss();
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRepeatingPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Lets Get Started</Text>
          <Text style={styles.titleText}>
            Find new trip and friends in our app
          </Text>
          <ScrollView>
            <View style={styles.form}>
              <View>
                {name && <Text style={styles.inputLabelOff}>Name</Text>}
                <TextInput
                  value={name}
                  style={styles.input}
                  placeholder={"Name"}
                  onChangeText={(value) => setName(value)}
                />
                <View style={styles.inputIcon}>
                  <Feather
                    name="user"
                    size={ScreenSettings.returnParams(24, 29)}
                    color={variables.inputColor}
                  />
                </View>
              </View>

              <View>
                {phone && <Text style={styles.inputLabelOff}>Phone</Text>}
                <TextInput
                  keyboardType="phone-pad"
                  value={phone}
                  placeholder={"Phone"}
                  style={styles.input}
                  onChangeText={handlePhoneChange}
                />
                {isValidPhone ? (
                  <Text style={styles.valid}>Valid phone</Text>
                ) : (
                  <Text style={styles.invalid}>Invalid phone</Text>
                )}

                <View style={styles.inputIcon}>
                  <Feather
                    name="phone"
                    size={ScreenSettings.returnParams(24, 29)}
                    color={variables.inputColor}
                  />
                </View>
                <Text style={styles.hint}>
                  Format phone number: "38 (067) 22-222-22"
                </Text>
              </View>

              <View>
                {email && <Text style={styles.inputLabelOff}>Email</Text>}
                <TextInput
                  keyboardType="email-address"
                  value={email}
                  placeholder={"Email"}
                  style={styles.input}
                  onChangeText={handleEmailChange}
                />

                {isValidEmail ? (
                  <Text style={styles.valid}>Valid email address</Text>
                ) : (
                  <Text style={styles.invalid}>Invalid email address</Text>
                )}

                <View style={styles.inputIcon}>
                  <Octicons
                    name="mail"
                    size={ScreenSettings.returnParams(24, 29)}
                    color={variables.inputColor}
                  />
                </View>
              </View>

              <View>
                {password && <Text style={styles.inputLabelOff}>Password</Text>}
                <TextInput
                  value={password}
                  style={styles.input}
                  placeholder={"Password"}
                  secureTextEntry={togglePassword}
                  onChangeText={(value) => setPassword(value)}
                />

                <TouchableOpacity
                  onPress={() => handleToggle(setTogglePassword)}
                >
                  <View style={styles.inputIconPass}>
                    {togglePassword ? (
                      <Feather
                        name="lock"
                        size={ScreenSettings.returnParams(24, 29)}
                        color={variables.inputColor}
                      />
                    ) : (
                      <Feather
                        name="unlock"
                        size={ScreenSettings.returnParams(24, 29)}
                        color={variables.inputColor}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                {repeatingPassword && (
                  <Text style={styles.inputLabelOff}>Confirm password</Text>
                )}
                <TextInput
                  value={repeatingPassword}
                  style={styles.input}
                  placeholder={"Confirm password"}
                  secureTextEntry={toggleRepeatingPassword}
                  onChangeText={(value) => setRepeatingPassword(value)}
                />
                <TouchableOpacity
                  onPress={() => handleToggle(setToggleRepeatingPassword)}
                >
                  <View style={styles.inputIconPass}>
                    {toggleRepeatingPassword ? (
                      <Feather
                        name="lock"
                        size={ScreenSettings.returnParams(24, 29)}
                        color={variables.inputColor}
                      />
                    ) : (
                      <Feather
                        name="unlock"
                        size={ScreenSettings.returnParams(24, 29)}
                        color={variables.inputColor}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>

              <ButtonLongBlue
                title={"Register"}
                marginTop={10}
                marginLeft={"auto"}
                marginRight={"auto"}
                click={handleSubmit}
              />

              {passwordError && (
                <Text style={styles.error}>Passwords do not match</Text>
              )}
            </View>
            <Text style={styles.textRegister}>
              By using the application, you agree to the
              <Text style={styles.buttonRegister}>Terms & Conditions.</Text>
            </Text>
            <Text style={styles.textRegister}>
              Already have an account?
              <Text
                style={styles.buttonRegister}
                onPress={() => navigation.navigate("Login")}
              >
                Log in
              </Text>
            </Text>
          </ScrollView>
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

const styles = StyleSheet.create(RegistrationScreenStyles);