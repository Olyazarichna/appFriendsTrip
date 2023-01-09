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

import fonts from '../../styles/utils/mixins';
import variables from '../../styles/utils/variables';

import ButtonLongBlue from '../../components/Buttons/ButtonLongBlue';
import ButtonLongWhite from '../../components/Buttons/ButtonLongWhite';


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
                marginTop={180}
                click={() => navigation.navigate('Login')}
            />
            
            <ButtonLongWhite
                title={"Register"}
                marginTop={10}
                click={() => navigation.navigate('Registration')}
            />
           
        </ImageBackground>
    )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    textConteiner: {
     width: 301,
        
    },
    leble: {
        marginTop: 170,
        color: variables.lableButtonWhite,
       textAlign: "center", 
      ...fonts(20, "600", 1.2)  
    },
    title: {
        marginTop: 25,
        color: variables.lableButtonWhite,
       textAlign: "center",
       ...fonts(24, "600", 1.2)   
    },
    text: {
        color: variables.lableButtonWhite,
        marginTop: 20,
        textAlign: "center",
        ...fonts(14, "500", 1.3)
    },
    imageOne: {
        position: "absolute",
        left: 0,
        top: 10
    },
   imageTwo: {
        position: "absolute",
        right: 0,
        top: 10
    }, 
});