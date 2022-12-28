
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
    ImageBackground
} from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import handleTogle from '../../helpers/handleTogle';

const initialState = {
    email: '',
    password: '',
};

export default function LoginScreen({ navigation }) { 

    const [state, setState] = useState(initialState);
    const [toglePassword, setToglePassword] = useState(true);


    const keyboardHide = () => {
        setState(initialState);
        console.log(state);    
    };         
        
    return (
    
            <View style={styles.conteiner}>
                <View style={styles.form}>
                    <Text>Login</Text>
        
                    <View>
                        <Text>Email</Text>
                        <TextInput value={state.email} style={styles.input} onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))} />
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput value={state.password} style={styles.input} secureTextEntry={toglePassword} onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))} />
                        <TouchableOpacity onPress={() => handleTogle(setToglePassword)}>
                            <AntDesign name="eyeo" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
    
                    <TouchableOpacity onPress={keyboardHide}>
                        <Text>SING IN</Text>
                    </TouchableOpacity>
                    <Text>Don't have an account?<Text onPress={() => navigation.navigate('Registration')}>Register</Text></Text>
                
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            </View>
            </View>
       
        );
    };


const styles = StyleSheet.create({
    conteiner: {
        width: "100%",
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    },
form: {
    marginHorizontal: 18,
  },
input: {
    borderWidth:1,
    // borderColor: "#E8E8E8",
    height: 50,
    paddingLeft: 16,
    borderRadius: 8,
    // color: "#BDBDBD"
    },
 
});
    





