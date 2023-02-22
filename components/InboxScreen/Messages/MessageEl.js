import { StyleSheet, Text, View } from "react-native";
import { MessageElStyles } from "../../../styles/stylesComponents/MessageElStyles";
export default function MessageEl({ messages }) {
    const { message, status } = messages;
    return (
        <>
            {!status ? (
                <View style={styles.containerMy}>
                    <Text style={styles.message}>{message}</Text>
                    <Text style={styles.data}>11:11.25.11.2022</Text>
                </View>
            ) : (
                <View style={styles.containerYou}>
                    <Text style={styles.message}>{message}</Text>
                    <Text style={styles.data}>11:11.25.11.2022</Text>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create(MessageElStyles);
