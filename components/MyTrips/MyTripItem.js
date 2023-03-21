import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Modal,
    // TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';
import variables from '../../styles/utils/variables';
import { removeTrip } from '../../services/removeTrip';
import { useState } from 'react';
import ModalWindow from '../ReusableModalWindow/ReusableModalWindow';
// import TripDetails from '../TripDetails/TripDetails';


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

                    <View style={styles.detailsContainer}>
                        <Text style={styles.heading}>Trip Details</Text>

                        <View>
                            <View style={styles.imgContainer}>
                                <Image style={styles.imgDetails} source={{ uri: trip.image }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <TextInput style={styles.description}>{trip.country}, </TextInput>
                                <TextInput style={styles.description}>{trip.city}</TextInput>

                            </View>

                            <View style={styles.containerDetails

                            }>
                                <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                    <Text style={styles.description}>Date:</Text>
                                    <TextInput style={styles.input}> {trip.date}</TextInput>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.description}>Duration: </Text>
                                    <TextInput style={styles.input}> {trip.duration}</TextInput>

                                    <Text style={styles.description}> days</Text>
                                </View>
                            </View>

                            <View>
                                <Text style={styles.description}>More: </Text>
                                <TextInput style={styles.input}>
                                    {trip.detailsAboutTrip}
                                </TextInput>
                            </View>

                            <View>
                                <Text style={styles.description}>Age: </Text>
                                <TextInput style={styles.input}>{`${trip.minAge} - ${trip.maxAge}`}</TextInput>
                            </View>

                            <View>
                                <Text style={styles.description}>About companion: </Text>
                                <TextInput style={styles.input}>{trip.detailsAboutCompanion}</TextInput>

                            </View>
                            {/* <TripDetails trip={trip}>{trip}</TripDetails> */}
                        </View>
                        <View style={{ position: 'absolute', top: -40, right: 0 }}>
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
                                click={() => setModalDetailsVisible(!modalDetailsVisible)}
                            />
                        </View>
                    </View>
                </Modal>
            </View >
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
        </View >
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
    //details info
    imgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: 30,
        overflow: 'hidden',
    },
    imgDetails: {
        width: '100%',
        height: 318,
        resizeMode: 'cover',
    },
    containerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    description: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10,
        // alignItems: 'center'
    },
    input: {
        color: '#848689',
        alignItems: 'center',
    },
    detailsContainer: {
        // flex: 1,
        marginVertical: 50,
        marginHorizontal: 20,

    },
    heading: {
        fontWeight: '600',
        fontSize: 24,
        marginBottom: 20,
    },
    arrowBtn: {
        position: 'absolute',
        right: 8,
        top: 5,
    },
    button: {
        borderColor: 'blue',
        borderWidth: 1,
        width: 200,
        padding: 8,
    },


});
