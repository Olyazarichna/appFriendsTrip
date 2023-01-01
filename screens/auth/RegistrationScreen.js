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
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/authOperations";

import { AntDesign } from "@expo/vector-icons";

import handleToggle from "../../helpers/handleToggle";

const initialState = {
  login: "",
  email: "",
  phone: "",
  password: "",
  repeatingPassword: "",
};

export default function RegistrationScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [passwordError, setPasswordError] = useState(false);
  const [togglePassword, setTogglePassword] = useState(true);
  const [toggleRepeatingPassword, setToggleRepeatingPassword] = useState(true);

  const dispatch = useDispatch();
  console.log("dispatch", dispatch);

  const handleSubmit = () => {
    const { login, email, phone, password, repeatingPassword } = state;
    if (password !== repeatingPassword) {
      setPasswordError(true);
      return;
    } 
    setPasswordError(false);
    dispatch(signUp(state));
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Registration</Text>
        <View>
          <Text>Name</Text>
          <TextInput
            value={state.login}
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
          />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
            keyboardType="email-address"
            value={state.email}
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
          />
        </View>
        <View>
          <Text>Phone</Text>
          <TextInput
            keyboardType="phone-pad"
            value={state.phone}
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, phone: value }))
            }
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            value={state.password}
            style={styles.input}
            secureTextEntry={togglePassword}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, password: value }))
            }
          />
          <TouchableOpacity onPress={() => handleToggle(setTogglePassword)}>
            <AntDesign name="eyeo" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Password confirmation</Text>
          <TextInput
            value={state.repeatingPassword}
            style={styles.input}
            secureTextEntry={toggleRepeatingPassword}
            onChangeText={(value) =>
              setState((prevState) => ({
                ...prevState,
                repeatingPassword: value,
              }))
            }
          />
          <TouchableOpacity
            onPress={() => handleToggle(setToggleRepeatingPassword)}
          >
            <AntDesign name="eyeo" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <Text>SING UP</Text>
        </TouchableOpacity>
        {passwordError && (
          <Text style={styles.error}>Passwords do not match</Text>
        )}
        <Text>
          Already have an account?
          <Text onPress={() => navigation.navigate("Login")}>To come in</Text>
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//Password confirmation
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  form: {
    marginHorizontal: 18,
  },
  input: {
    borderWidth: 1,
    // borderColor: "#E8E8E8",
    height: 50,
    paddingLeft: 16,
    borderRadius: 8,
    // color: "#BDBDBD"
  },
  error: {
    color: "red",
  },
});
