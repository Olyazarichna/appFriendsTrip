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

import { InboxScreenListStyles } from "../../styles/stylesScreens/InboxScreenListStyles";

export default function InboxScreenList({id, name, avatar}) {
    return (
       
        <View style={styles.conteiner}>
            
            <View style={styles.listConteiner}>
                <Image
                 style={styles.Image}
                    source={{ uri: avatar }}
                ></Image>   
            </View>
                <Text style={styles.title}>{name}</Text>
            
        </View>
  
)
};

const styles = StyleSheet.create(InboxScreenListStyles);