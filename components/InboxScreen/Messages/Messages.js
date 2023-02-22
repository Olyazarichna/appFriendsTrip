import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Feather, AntDesign } from "@expo/vector-icons";

import { data } from "../../../helpers/data";
import variables from "../../../styles/utils/variables";
import { MessagesStyles } from "../../../styles/stylesComponents/MessagesStyles";
import ButtonRoundBlue from "../../Buttons/ButtonRoundBlue";
import MessageEl from "./MessageEl";

export default function Messages({ setChat, user }) {
    const containerMessages = user[0].messages;
    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.header}
                colors={[variables.gradColorOne, variables.gradColorTwo]}
            >
                <Image style={styles.Image} source={{ uri: user[0].avatar }}></Image>
                <Text style={styles.nameTitle}>{user[0].name}</Text>
                <TouchableOpacity
                    onPress={() => setChat(false)}
                    style={styles.buttonClose}
                >
                    <AntDesign
                        name="close"
                        size={20}
                        color={variables.labelButtonWhite}
                    />
                </TouchableOpacity>
            </LinearGradient>
            <ScrollView>
                <View>
                    {containerMessages.map((message) => (
                        <MessageEl messages={message} />
                    ))}
                </View>
            </ScrollView>
            <LinearGradient style={styles.footer} colors={["#EEF4FF", "#717EA4"]}>
                <View style={styles.form}>
                    <TextInput style={styles.input}></TextInput>
                    <ButtonRoundBlue
                        width={40}
                        height={40}
                        marginLeft={10}
                        title={
                            <Feather
                                name="send"
                                size={20}
                                color={variables.labelButtonWhite}
                            />
                        }
                    />
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create(MessagesStyles);
