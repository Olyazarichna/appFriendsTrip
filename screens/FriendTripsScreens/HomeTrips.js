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

export default function HomeTrips() {
    return (
    <View style={styles.container}>
         <Text>Home</Text>   
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