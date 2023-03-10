import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { resetPassword } from "../../redux/auth/authOperations";
import variables from "../../styles/utils/variables";

export const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const btnPress = () => {
        resetPassword({ email });
        setEmail("");
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btnHome}
                onPress={() => navigation.navigate("Home")}
            >
                <Ionicons name="md-home" size={24} color={variables.labelButtonBlue} />
            </TouchableOpacity>
            <Text style={styles.text}>Enter your email</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <LinearGradient colors={["#457CF7", "#375ABE"]} style={styles.gradient}>
                <TouchableOpacity style={styles.btn} onPress={btnPress}>
                    <Text style={styles.textBtn}>Reset password</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 45,
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: "#457CF7",
        fontWeight: "700",
        textAlign: "center",
    },
    input: {
        marginTop: 20,
        with: 100,
        padding: 12,
        borderWidth: 1,
        borderColor: "rgba(69, 124, 247, 1)",
        borderRadius: 4,
    },
    gradient: {
        marginTop: 30,
        borderRadius: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    btn: {
        height: 59,
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: "rgba(69, 124, 247, 1)",
        alignItems: "center",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        borderWidth: 0,
    },
    textBtn: {
        fontSize: 15,
        color: "#ffffff",
        fontWeight: "700",
        lineHeight: 19,
    },
    btnHome: {
        position: "absolute",
        top: 150,
        left: 20,
    },
});
