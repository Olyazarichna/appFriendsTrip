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

import { InboxScreenListStyles } from "../../styles/stylesComponents/InboxScreenListStyles";

export default function InboxScreenList({id, name, avatar, click}) {
    return (
       <TouchableOpacity onPress={() => click(id)}>
        <View   style={styles.container}>
            
            <View style={styles.listContainer}>
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