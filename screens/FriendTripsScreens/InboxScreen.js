import {
    StyleSheet,
    Text,
    View,
    ScrollView,
     Modal,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground
} from 'react-native';

import { useState } from 'react';

import InboxScreenList from "../../components/InboxScreen/InboxScreenList";
import Messages from "../../components/InboxScreen/Messages/Messages";
import handleToggle from "../../helpers/handleToggle";

import { data } from "../../helpers/data";

export default function InboxScreen() {
    const [chat, setChat] = useState(false);
    const [user, setUser] = useState({});

const showModal = (id) => {
const dataId = data?.filter(item => item.id === id);
 setUser(dataId);
    handleToggle(setChat);
    // console.log(user);
    // console.log(chat)
}

    return (
        <View style={styles.container}>
      <ScrollView>       
            <View>
                {data.map(({id, name, avatar}) => 
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

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
justifyContent: 'flex-start',
 },
});
 
  {/* <ScrollView>       
            <View>
                {data.map(({id, name, avatar}) => 
                    <InboxScreenList
                        key={id}
                        name={name}
                        avatar={avatar}
                    />      
                    )}
            
                </View>
            </ScrollView>  */}