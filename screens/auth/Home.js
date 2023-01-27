import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground
} from 'react-native';

import ButtonLongBlue from '../../components/Buttons/ButtonLongBlue';
import ButtonLongWhite from '../../components/Buttons/ButtonLongWhite';

import { ScreenSettings } from '../../styles/utils/ScreenSettings';

import { HomeScreenStyles } from '../../styles/stylesScreens/HomeScreenStyles';


export default function Home({ navigation }) { 
     
    return (
        <ImageBackground style={styles.container} source={require("../../assets/images/Subtract.png")}>
            
           <Image style={styles.imageOne} source={require('../../assets/images/Rectangle2.png')} />
           <Image style={styles.imageTwo} source={require('../../assets/images/Rectangle1.png')} />
            
            <View style={styles.textConteiner}>
                <Text style={styles.leble}>TRVL</Text>
                <Text style={styles.title}>Journey with somebody where You Want</Text>
                <Text style={styles.text}>Here should be simple text that shortly describe your app and show advantage or tagline</Text>
            </View>

            <ButtonLongBlue
                title={"Log in"}
                marginTop={ScreenSettings.returnParams(180, 300)}
                click={() => navigation.navigate('Login')}
            />
            
            <ButtonLongWhite
                title={"Register"}
                marginTop={ScreenSettings.returnParams(10, 20)}
                click={() => navigation.navigate('Registration')}
            />
           
        </ImageBackground>
    )
};

const styles = StyleSheet.create(HomeScreenStyles);
