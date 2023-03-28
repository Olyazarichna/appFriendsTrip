import { StyleSheet, View, Text, TextInput, Image, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';
import variables from '../../styles/utils/variables';
import { removeTrip } from '../../services/removeTrip';
import { useState } from 'react';
import ReusableModalWindow from '../ReusableModalWindow/ReusableModalWindow';
// import TripDetails from '../TripDetails/TripDetails';

export default function MyTripItem({ trip, handleList }) {
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState('');
    const [tripDetails, setTripDetails] = useState('');
    const [personDetails, setPersonDetails] = useState('');
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [modalDetailsVisible, setModalDetailsVisible] = useState(false);
    const [isEditable, setIsEditable] = useState(false);

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

    const onInputChange = (inputName, value) => {
        switch (inputName) {
            case 'date':
                setDate(value);
                break;
            case 'duration':
                setDuration(value);
                break;
            case 'tripDetails':
                setTripDetails(value);
                break;
            case 'personDetails':
                setPersonDetails(value);
                break;
            case 'minAge':
                setMinAge(value);
                break;
            case 'maxAge':
                setMaxAge(value);
                break;
            default:
                break;
        }
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

                {/* MYTRIPS */}
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
                            {/* 1 */}
                            <View style={styles.infoWrapper}>
                                <Text
                                    style={styles.description}
                                >{`${trip.country}, ${trip.city}`}</Text>
                                {/* <TextInput style={styles.description}>
                                    {trip.country},{' '}
                                </TextInput>
                                <TextInput style={styles.description}>{trip.city}</TextInput> */}
                            </View>
                            {/* 2 */}
                            <View style={styles.containerDetails}>
                                <View style={styles.infoWrapper}>
                                    <Text style={styles.description}>Date:</Text>
                                    <TextInput
                                        value={date}
                                        editable={isEditable}
                                        style={isEditable ? styles.editableInput : styles.input}
                                        // onChangeText={value => handleInput('date', value)}
                                        onChangeText={onInputChange}
                                    >
                                        {trip.date}
                                    </TextInput>
                                </View>

                                <View style={styles.infoWrapper}>
                                    <Text style={styles.description}>Duration: </Text>
                                    <TextInput
                                        value={duration}
                                        editable={isEditable}
                                        style={isEditable ? styles.editableInput : styles.input}
                                        onChangeText={onInputChange}
                                        keyboardType="numeric"
                                    >
                                        {trip.duration}
                                    </TextInput>
                                    <Text style={styles.description}> days</Text>
                                </View>
                            </View>
                            {/* 3 */}
                            <View style={styles.infoWrapper}>
                                <Text style={styles.description}>More: </Text>
                                <TextInput
                                    value={tripDetails}
                                    editable={isEditable}
                                    style={isEditable ? styles.editableInput : styles.input}
                                    onChangeText={onInputChange}
                                    multiline={true}
                                >
                                    {trip.detailsAboutTrip}
                                </TextInput>
                            </View>
                            {/* 4 */}
                            <View style={styles.infoWrapper}>
                                <Text style={styles.description}>Age: </Text>
                                <TextInput
                                    value={minAge}
                                    editable={isEditable}
                                    style={isEditable ? styles.editableInput : styles.input}
                                    onChangeText={onInputChange}
                                    keyboardType="numeric"
                                >
                                    {trip.minAge}
                                </TextInput>
                                <TextInput
                                    value={maxAge}
                                    editable={isEditable}
                                    style={isEditable ? styles.editableInput : styles.input}
                                    onChangeText={onInputChange}
                                    keyboardType="numeric"
                                >
                                    -{trip.maxAge}
                                </TextInput>
                                <Text style={styles.description}>years old </Text>
                            </View>
                            {/* 5 */}
                            <View style={styles.infoWrapper}>
                                <Text style={styles.description}>About companion: </Text>
                                <TextInput
                                    value={personDetails}
                                    editable={isEditable}
                                    style={isEditable ? styles.editableInput : styles.input}
                                    onChangeText={onInputChange}
                                    multiline={true}
                                >
                                    {trip.detailsAboutCompanion}
                                </TextInput>
                            </View>

                            {/* <TripDetails trip={trip}/>*/}
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
    infoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    containerDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    description: {
        fontSize: 14,
        fontWeight: '500',
    },
    input: {
        color: '#848689',
        paddingRight: 5,
        paddingVertical: 7,
    },
    editableInput: {
        borderWidth: 1,
        borderColor: 'rgba(69, 124, 247, 1)',
        borderRadius: 4,
    },
    detailsContainer: {
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
