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

import fonts from '../../styles/utils/mixins';
import variables from '../../styles/utils/variables';
import Button from '../../components/Button/Button';

export default function Home({ navigation }) { 
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                <Text>Registration</Text>
            </TouchableOpacity> */}

            <Text style={styles.text}>Here should be simple text that shortly describe your app and show advantage or tagline</Text>
        
            <Button
                title={"Log in"}
                radColOne={variables.gradColorOne}
                radColTwo={variables.gradColorTwo}
                marginTop={20}
                width={326}
                borderRadius={20}
                padBot={20}
                padTop={20}
                color={"rgba(255, 255, 255, 1)"}
                textAlign={"center"}
                fontSize={15}
                fontWeight={"700"}
                click={() => navigation.navigate('Login')}
            />

            <Button
                title={"Register"}
                radColOne={"#FFF"}
                radColTwo={"#FFF"}
                marginTop={20}
                width={326}
                borderRadius={20}
                borderWidth={1}
                borderColor={"rgba(69, 124, 247, 1)"}
                padBot={20}
                padTop={20}
                color={"rgba(69, 124, 247, 1)"}
                textAlign={"center"}
                fontSize={15}
                fontWeight={"700"}
                click={() => navigation.navigate('Registration')}
            />
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: variables.textColor,
       
        ...fonts(14, "900")
    }
});