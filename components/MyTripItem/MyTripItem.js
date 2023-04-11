import { StyleSheet, View, Text, Image, Modal } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';
import variables from '../../styles/utils/variables';
import { removeTrip } from '../../services/removeTrip';
import ReusableModalWindow from '../ReusableModalWindow/ReusableModalWindow';
import TripDetails from '../TripDetails/TripDetails';

export default function MyTripItem({ trip, handleList }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalDetailsVisible, setModalDetailsVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const openDetails = () => {
        setModalDetailsVisible(!modalDetailsVisible);
    };
    const deleteTrip = id => {
        removeTrip(id);
        handleList(trips => trips.filter(trip => trip.id !== id));
        alert(`Trip ${id} deleted`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.imgListContainer}>
                <Image source={{ uri: trip.image }} style={styles.img} />
            </View>

            <View style={styles.arrowBtn}>
                <ButtonRoundBlue
                    title={
                        <AntDesign
                            name="arrowright"
                            size={17}
                            color={variables.labelButtonWhite}
                        />
                    }
                    width={40}
                    height={40}
                    click={openDetails}
                />
                <Modal
                    animationType="slide"
                    visible={modalDetailsVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalDetailsVisible);
                    }}
                >
                    <TripDetails trip={trip} />
                    <ButtonRoundBlue
                        title={
                            <AntDesign
                                name="close"
                                size={17}
                                color={variables.labelButtonWhite}
                            />
                        }
                        style={{ position: 'absolute', top: 10, right: 20 }}
                        width={40}
                        height={40}
                        marginTop={37}
                        click={() => setModalDetailsVisible(!modalDetailsVisible)}
                    />
                </Modal>
            </View>

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
                    <ReusableModalWindow
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
        marginRight: 10,
        marginBottom: 10,
    },
    imgListContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        resizeMode: 'cover',
    },
    img: {
        width: 152,
        height: 186,
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
    arrowBtn: {
        position: 'absolute',
        right: 8,
        top: 5,
    },
});
