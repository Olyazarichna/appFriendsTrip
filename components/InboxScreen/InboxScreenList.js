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

import { InboxScreenListStyles } from "../../styles/stylesComponens/InboxScreenListStyles";

export default function InboxScreenList({id, name, avatar, click}) {
    return (
       <TouchableOpacity onPress={() => click(id)}>
        <View   style={styles.conteiner}>
            
            <View style={styles.listConteiner}>
                <Image 
                 style={styles.Image}
                    source={{ uri: avatar }}
                ></Image>   
            </View>
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.lastMessage}>Hello</Text>
                </View>
         
            </View>
         </TouchableOpacity> 
  
)
};

const styles = StyleSheet.create(InboxScreenListStyles);