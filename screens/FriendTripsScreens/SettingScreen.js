import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// import { collection, query, where, getDocs } from "firebase/firestore";
// import { auth, tripsRef, usersRef } from '../../firebase/config';

import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import variables from '../../styles/utils/variables';
import ButtonRoundBlue from '../../components/Buttons/ButtonRoundBlue';

import { logOut } from '../../redux/auth/authOperations';
import { deleteUserProfile } from '../../redux/auth/authOperations';

import ModalWindow from '../../components/Modal/ModalWIndow';
import { useState } from 'react';
import MyTrips from '../../components/MyTrips/MyTrips';

export default function SettingScreen({ navigation }) {

    const dispatch = useDispatch();
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    console.log('isOpen', isOpen);

    const toggleModal1 = () => {
        setModalVisible1(!modalVisible1);
    };

    const toggleModal2 = () => {
        setModalVisible2(!modalVisible2);
    };
    const title1 = <Text>Are you sure you want delete profile?</Text>;
    const title2 = <Text>Are you sure you want log out?</Text>;

    const handleSubmit = async () => {
        alert('do smth');
    };
    const deleteUser = async () => {
        await deleteUserProfile();
        dispatch(logOut());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Setting</Text>
            <View style={{ position: 'absolute', top: 20, left: 25 }}>
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
                        click={() => setIsOpen(!isOpen)}

                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItem}>Delete account</Text>

                    <View>
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
                            click={() => toggleModal1()}
                        />
                        <ModalWindow
                            modalVisible={modalVisible1}
                            onRequestClose={() => toggleModal1()}
                            onClose={() => toggleModal1()}
                            title={title1}
                            onPress={deleteUser}
                            textBtnY="Sure"
                            textBtnN="Cancel"
                        />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.textItem}>Log out</Text>
                    <View>
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
                            click={toggleModal2}
                        />
                        <ModalWindow
                            modalVisible={modalVisible2}
                            onRequestClose={toggleModal2}
                            onClose={toggleModal2}
                            title={title2}
                            textBtnY="Yes"
                            onPress={() => dispatch(logOut())}
                            textBtnN="Cancel"
                        />
                    </View>
                </View>
            </View>
            {isOpen && <MyTrips></MyTrips>}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 30,
        letterSpacing: 2,
    },
    wrapper: {
        width: '100%',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    textItem: {
        fontSize: 16,
    },
});
