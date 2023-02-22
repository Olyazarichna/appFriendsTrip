import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Modal,

} from 'react-native';

import { useState } from 'react';

import InboxScreenList from "../../components/InboxScreen/InboxScreenList";
import Messages from "../../components/InboxScreen/Messages/Messages";
import handleToggle from "../../helpers/handleToggle";
import { InboxScreenStyles } from "../../styles/stylesScreens/InboxScreenStyles";

import { data } from "../../helpers/data";

export default function InboxScreen() {
    const [chat, setChat] = useState(false);
    const [user, setUser] = useState({});
    console.log('u', user)
    const showModal = (id) => {
        const dataId = data?.filter(item => item.id === id);
        setUser(dataId);
        handleToggle(setChat);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    {data.map(({ id, name, avatar }) =>
                        <InboxScreenList
                            click={showModal}
                            key={id}
                            id={id}
                            name={name}
                            avatar={avatar}
                        />
                    )}

                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={chat}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            ><Messages
                    setChat={setChat}
                    user={user}
                />

            </Modal>
        </View>
    )
};

const styles = StyleSheet.create(InboxScreenStyles);
