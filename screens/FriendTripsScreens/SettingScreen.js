import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,

} from "react-native";

import { useDispatch } from "react-redux";
import {
    AntDesign,

} from "@expo/vector-icons";

import variables from "../../styles/utils/variables";

import ButtonRoundBlue from "../../components/Buttons/ButtonRoundBlue";

import { logOut } from "../../redux/auth/authOperations";
import { deleteUserProfile } from "../../redux/auth/authOperations";

export default function SettingScreen({ navigation }) {
    const dispatch = useDispatch();

    const handleSubmit = () => {
        alert('do smth');
    };
    const deleteUser = async () => {
        await deleteUserProfile();
        console.log('account delete');
        dispatch(logOut());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Setting</Text>
            <View style={{ position: "absolute", top: 20, left: 25 }}>
                <ButtonRoundBlue
                    title={
                        <AntDesign
                            name="close"
                            size={17}
                            color={variables.labelButtonWhite}
                        />
                    }
                    width={40}
                    height={40}
                    marginTop={37}
                    click={() => navigation.goBack()}
                />
            </View>
            <View style={styles.wrapper}>
                <View style={styles.item}>
                    <Text style={styles.textItem}>Profile</Text>
                    <ButtonRoundBlue
                        title={
                            <AntDesign
                                name="profile"
                                size={17}
                                color={variables.labelButtonWhite}
                            />
                        }
                        width={40}
                        height={40}
                        click={handleSubmit}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItem}>Notifications</Text>
                    <ButtonRoundBlue
                        title={
                            <AntDesign
                                name="notification"
                                size={17}
                                color={variables.labelButtonWhite}
                            />
                        }
                        width={40}
                        height={40}
                        click={handleSubmit}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItem}>My Booking</Text>
                    <ButtonRoundBlue
                        title={
                            <AntDesign
                                name="bars"
                                size={17}
                                color={variables.labelButtonWhite}
                            />
                        }
                        width={40}
                        height={40}
                        click={handleSubmit}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItem}>My Trips</Text>
                    <ButtonRoundBlue
                        title={
                            <AntDesign
                                name="database"
                                size={17}
                                color={variables.labelButtonWhite}
                            />
                        }
                        width={40}
                        height={40}
                        click={handleSubmit}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItem}>Delete account</Text>

                    <ButtonRoundBlue
                        title={
                            <AntDesign
                                name="delete"
                                size={17}
                                color={variables.labelButtonWhite}
                            />
                        }
                        width={40}
                        height={40}
                        click={deleteUser}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItem}>Log out</Text>
                    <ButtonRoundBlue
                        title={
                            <AntDesign
                                name="logout"
                                size={17}
                                color={variables.labelButtonWhite}
                            />
                        }
                        width={40}
                        height={40}
                        click={() => dispatch(logOut())}
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 30,
        letterSpacing: 2,
    },
    wrapper: {
        width: "100%",
    },
    item: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 10,
    },
    textItem: {
        fontSize: 16,

    },

});
