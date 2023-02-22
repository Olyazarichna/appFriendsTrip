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

import { MessageElStyles } from "../../../styles/stylesComponents/MessageElStyles";

export default function MessageEl({ masseges }) {
    const {massege, status} = masseges
    return (
    <>
        {!status ? 
             (<View style={styles.containerMy}>
            <Text style={styles.massage}>{massege}</Text>
            <Text style={styles.data}>11:11.25.11.2022</Text>
        </View>)
         :
         (<View style={styles.containerYou}>
            <Text style={styles.massage}>{massege}</Text>
            <Text style={styles.data}>11:11.25.11.2022</Text>
        </View>)
            }
        </>
         )
}
 
const styles = StyleSheet.create(MessageElStyles);