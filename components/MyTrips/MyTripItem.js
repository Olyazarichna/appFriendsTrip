import { StyleSheet, View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';
import variables from '../../styles/utils/variables';
import { removeTrip } from '../../services/removeTrip';
import { useState } from 'react';
import ModalWindow from '../Modal/ModalWindow';

export default function MyTripItem({ trip }) {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const deleteTrip = id => {
        removeTrip(id);
        alert(`Trip ${id} deleted`);
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: trip.image }} style={styles.img} />
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{trip.city}</Text>
                <Text style={styles.text}>{trip.country}</Text>
                <Text style={styles.text}>{trip.date}</Text>
                <View style={styles.btn}>
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
                        click={toggleModal}
                    />
                    <ModalWindow
                        modalVisible={modalVisible}
                        onRequestClose={toggleModal}
                        onClose={toggleModal}
                        title="Are you sure you want delete this trip?"
                        onPress={() => deleteTrip(trip.id)}
                        textBtnY="Yes"
                        textBtnN="Cancel"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    img: {
        width: 152,
        height: 186,
        marginRight: 16,
        borderRadius: 30,
    },
    textWrapper: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 8,
        borderRadius: 17,
        width: 152,
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
    },
    btn: {
        position: 'absolute',
        right: 10,
    },
});
