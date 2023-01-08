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
        <ImageBackground style={styles.container} source={require("../../assets/images/Subtract.png")}>

           <Image style={styles.imageOne} source={require('../../assets/images/Rectangle2.png')} />
           <Image style={styles.imageTwo} source={require('../../assets/images/Rectangle1.png')} />
            
            <View style={styles.textConteiner}>
                <Text style={styles.leble}>TRVL</Text>
                <Text style={styles.title}>Journey with somebody where You Want</Text>
                <Text style={styles.text}>Here should be simple text that shortly describe your app and show advantage or tagline</Text>
            </View>
            
            <Button
                title={"Log in"}
                radColOne={variables.gradColorOne}
                radColTwo={variables.gradColorTwo}
                marginTop={180}
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
                marginTop={11}
                width={326}
                borderRadius={20}
                borderWidth={1}
                borderColor={variables.lableButtonBlue}
                padBot={20}
                padTop={20}
                color={variables.lableButtonBlue}
                textAlign={"center"}
                fontSize={15}
                fontWeight={"700"}
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