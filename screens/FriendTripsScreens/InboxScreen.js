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

export default function InboxScreen() {
    return (
    <View style={styles.container}>
         <Text>InboxScreen</Text>   
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
 });