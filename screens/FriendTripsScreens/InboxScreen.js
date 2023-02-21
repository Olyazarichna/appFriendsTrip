import {
    StyleSheet,
    Text,
    View,
     ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground
} from 'react-native';

import InboxScreenList from "../../components/InboxScreen/InboxScreenList";

import { data } from "../../helpers/data";

export default function InboxScreen() {
    return (
        <View style={styles.container}>  
    <ScrollView>       
            <View>
                {data.map(({id, name, avatar}) => 
                    <InboxScreenList
                        key={id}
                        name={name}
                        avatar={avatar}
                    />      
                    )}
            
                </View>
            </ScrollView> 
    </View>
)
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
justifyContent: 'flex-start',
 },
 });