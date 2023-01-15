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
} from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/authOperations';

import { Octicons, Ionicons, Feather } from '@expo/vector-icons';

import variables from '../../styles/utils/variables';
import fonts from '../../styles/utils/mixins';

import handleToggle from '../../helpers/handleToggle';
import changeInput from '../../helpers/changeInput';
import validation from '../../helpers/validation/validation';

import ButtonLongBlue from '../../components/Buttons/ButtonLongBlue';

const initialState = {
  name: '',
  email: '',
  phone: '',
  password: '',
  repeatingPassword: '',
};

export default function RegistrationScreen({ navigation }) {
  const redaxState = useSelector((state) => state);
  console.log('redaxState', redaxState);
  const [state, setState] = useState(initialState);
  console.log('state', state);
  const [passwordError, setPasswordError] = useState(false);
  const [togglePassword, setTogglePassword] = useState(true);
  const [toggleRepeatingPassword, setToggleRepeatingPassword] = useState(true);

  const [loginChange, setLoginChange] = useState(false);
  const [phoneChange, setPhoneChange] = useState(false);
  const [emailChange, setEmailChange] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);
  const [confirmPasChange, setconfirmPasChange] = useState(false);

  const [checkValidPhone, setCheckValidPhone] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const [errorMassage, setErrorMassage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const { login, email, phone, password, repeatingPassword } = state;

    if (
      login === '' &&
      email === '' &&
      phone === '' &&
      password === '' &&
      repeatingPassword === ''
    ) {
      setErrorMassage('eroor');
      return;
    }

    if (!checkValidPhone && !checkValidEmail) {
      setErrorPhone(true);
      setErrorEmail(true);
      return;
    }
    if (!checkValidPhone && checkValidEmail) {
      setErrorPhone(true);
      setErrorEmail(false);
      return;
    }

    if (checkValidPhone && !checkValidEmail) {
      setErrorPhone(false);
      setErrorEmail(true);
      return;
    }

    if (password !== repeatingPassword) {
      setPasswordError(true);
      return;
    }
    setLoginChange(false);
    setPhoneChange(false);
    setEmailChange(false);
    setPasswordChange(false);
    setconfirmPasChange(false);

    console.log('state', state);
    dispatch(signUp(state));
    setInputChange(false);
    setPasswordError(false);
    setState(initialState);
    Keyboard.dismiss();
    console.log('stateHandleSubmit', state);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lets Get Started</Text>
      <Text style={styles.titleText}>Find new trip and friends in our app</Text>
      <ScrollView>
        <View style={styles.form}>
          <View>
            {loginChange ? (
              <Text style={styles.inputLableOff}>Name</Text>
            ) : (
              <Text style={styles.inputLable}>Name</Text>
            )}
            <TextInput
              value={state.login}
              style={styles.input}
              onChangeText={(value) =>
                changeInput(value, setState, setLoginChange, 'login')
              }
            />
            <View style={styles.inputIcon}>
              <Feather name="user" size={24} color={variables.inputColor} />
            </View>
          </View>
          <View>
            {inputChange ? (
              <Text style={styles.inputLableOff}>Phone</Text>
            ) : (
              <Text style={styles.inputLable}>Phone</Text>
            )}
            <TextInput
              keyboardType="phone-pad"
              value={state.phone}
              style={styles.input}
              onChangeText={(value) =>
                changeInput(value, setState, setInputChange, 'phone')
              }
            />
            <View style={styles.inputIcon}>
              <Feather name="phone" size={24} color={variables.inputColor} />
            </View>
          </View>
          <View>
            {phoneChange ? (
              <Text style={styles.inputLableOff}>Phone</Text>
            ) : (
              <Text style={styles.inputLable}>Phone</Text>
            )}

            {errorPhone && (
              <View style={styles.stailsNotCorect}>
                {state.phone === '' ? (
                  <Text style={styles.stailsNotCorectText}>
                    You have not entered an phone
                  </Text>
                ) : (
                  <Text style={styles.stailsNotCorectText}>
                    Enter the phone number in the format "+38 (067) 22-222-22"
                  </Text>
                )}
              </View>
            )}

            <TextInput
              keyboardType="phone-pad"
              value={state.phone}
              style={styles.input}
              onChangeText={(value) =>
                changeInput(
                  value,
                  setState,
                  setPhoneChange,
                  'phone',
                  validation.phone,
                  setCheckValidPhone
                )
              }
            />
            <View style={styles.inputIcon}>
              <Feather name="phone" size={24} color={variables.inputColor} />
            </View>
            <Text style={styles.hint}>
              Format phone number: "+38 (067) 22-222-22"
            </Text>
          </View>
          <View>
            {emailChange ? (
              <Text style={styles.inputLableOff}>Your Email</Text>
            ) : (
              <Text style={styles.inputLable}>Your Email</Text>
            )}

            {errorEmail && (
              <View style={styles.stailsNotCorect}>
                {state.email === '' ? (
                  <Text style={styles.stailsNotCorectText}>
                    You have not entered an email
                  </Text>
                ) : (
                  <Text style={styles.stailsNotCorectText}>
                    You have entered an incorrect email
                  </Text>
                )}
              </View>
            )}

            <TextInput
              keyboardType="email-address"
              value={state.email}
              style={styles.input}
              onChangeText={(value) =>
                changeInput(
                  value,
                  setState,
                  setEmailChange,
                  'email',
                  validation.email,
                  setCheckValidEmail
                )
              }
            />

            <TouchableOpacity onPress={() => handleToggle(setTogglePassword)}>
              <View style={styles.inputIconPass}>
                {togglePassword ? (
                  <Feather name="lock" size={24} color={variables.inputColor} />
                ) : (
                  <Feather
                    name="unlock"
                    size={24}
                    color={variables.inputColor}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {passwordChange ? (
            <Text style={styles.inputLableOff}>Password</Text>
          ) : (
            <Text style={styles.inputLable}>Password</Text>
          )}
          <TextInput
            value={state.password}
            style={styles.input}
            secureTextEntry={togglePassword}
            onChangeText={(value) =>
              changeInput(value, setState, setPasswordChange, 'password')
            }
          />
          <TouchableOpacity
            onPress={() => handleToggle(setToggleRepeatingPassword)}
          >
            <View style={styles.inputIconPass}>
              {toggleRepeatingPassword ? (
                <Feather name="lock" size={24} color={variables.inputColor} />
              ) : (
                <Feather name="unlock" size={24} color={variables.inputColor} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View>
          {confirmPasChange ? (
            <Text style={styles.inputLableOff}>Confirm Password</Text>
          ) : (
            <Text style={styles.inputLable}>Confirm Password</Text>
          )}
          <TextInput
            value={state.repeatingPassword}
            style={styles.input}
            secureTextEntry={toggleRepeatingPassword}
            onChangeText={(value) =>
              changeInput(
                value,
                setState,
                setconfirmPasChange,
                'repeatingPassword'
              )
            }
          />

          {passwordError && (
            <Text style={styles.error}>Passwords do not match</Text>
          )}
        </View>
        <Text style={styles.textRegister}>
          By using the application, you agree to the
          <Text style={styles.buttonRegister}>Terms & Conditons.</Text>
        </Text>
        <Text style={styles.textRegister}>
          Already have an account?
          <Text
            style={styles.buttonRegister}
            onPress={() => navigation.navigate('Login')}
          >
            Log in
          </Text>
        </Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonHome}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="md-home" size={24} color={variables.lableButtonBlue} />
      </TouchableOpacity>
    </View>
  );
}
//Password confirmation
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonHome: {
    position: 'absolute',
    top: 35,
    left: 15,
  },
  title: {
    marginTop: 40,
    color: variables.titleColor,
    textAlign: 'center',
    marginBottom: 20,
    ...fonts(24, '600'),
  },
  titleText: {
    width: 154,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 18,
    textAlign: 'center',
    color: variables.textColor,
    ...fonts(14, '500'),
  },
  form: {
    marginHorizontal: 24,
    marginTop: 5,
  },
  input: {
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: variables.lableButtonWhite,
    height: 63,
    paddingLeft: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(249, 250, 251, 1)',
    color: variables.inputColor,
  },
  inputIcon: {
    position: 'absolute',
    top: 35,
    left: 22,
  },
  inputIconPass: {
    position: 'absolute',
    top: -55,
    left: 22,
  },
  inputLable: {
    position: 'absolute',
    zIndex: 1,
    top: 38,
    left: 60,
    color: variables.inputColor,
    ...fonts(14, '500'),
  },
  inputLableOff: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 10,
    color: variables.inputColor,
    ...fonts(14, '500'),
  },
  hint: {
    marginLeft: 'auto',
    marginRight: 'auto',

    color: variables.lableButtonBlue,
    ...fonts(10, '500'),
  },
  error: {
    color: 'red',
  },
  textRegister: {
    width: 230,
    marginTop: 14,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    color: variables.textColor,
    marginBottom: 10,
    ...fonts(14, '500'),
  },
  buttonRegister: {
    color: '#375ABE',
  },
  stailsNotCorect: {
    position: 'absolute',
    top: 60,
    left: 50,
    zIndex: 1,
    padding: 3,
    // borderRadius: 5,
    // backgroundColor: variables.lableButtonBlue,
  },
  stailsNotCorectText: {
    color: 'red',
    ...fonts(10, '400'),
  },
});
