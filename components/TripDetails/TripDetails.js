import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScreenSettings } from '../../styles/utils/ScreenSettings';
import variables from '../../styles/utils/variables';
import { updateTrip } from '../../services/updateTrip';

export default function TripDetails({ trip }) {
    const [date, setDate] = useState(trip.date);
    const [duration, setDuration] = useState(trip.duration);
    const [tripDetails, setTripDetails] = useState(trip.detailsAboutTrip);
    const [personDetails, setPersonDetails] = useState(
        trip.detailsAboutCompanion
    );
    const [minAge, setMinAge] = useState(trip.minAge);
    const [maxAge, setMaxAge] = useState(trip.maxAge);
    const [isEditable, setIsEditable] = useState(false);

    const handleInput = (inputName, value) => {
        setIsShowKeyboard(true);
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

    const editInput = async () => {
        setIsEditable(isEditable => !isEditable);
        const tripDate = {
            id: trip.id,
            image: trip.image,
            city: trip.city,
            country: trip.country,
            date: date,
            duration: duration,
            tripDetails: tripDetails,
            personDetails: personDetails,
            minAge: minAge,
            maxAge: maxAge,
        };
        await updateTrip(tripDate);
    };

    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.heading}>Trip Details</Text>
            <View>
                <View style={styles.imgContainer}>
                    <Image style={styles.imgDetails} source={{ uri: trip.image }} />
                </View>

                <View style={styles.infoWrapper}>
                    <Text
                        style={styles.description}
                    >{`${trip.country}, ${trip.city}`}</Text>
                </View>

                <View style={styles.containerDetails}>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.description}>Date:</Text>
                        <TextInput
                            value={date}
                            editable={isEditable}
                            style={isEditable ? styles.editableInput : styles.input}
                            onFocus={() =>
                                setIsShowKeyboard(isShowKeyboard => !isShowKeyboard)
                            }
                            onChangeText={value => handleInput('date', value)}
                            maxLength={13}
                        />
                        <TouchableOpacity
                            onPress={() => editInput()}
                            style={styles.checkButton}
                        >
                            <MaterialCommunityIcons
                                name="pencil-outline"
                                size={ScreenSettings.returnParams(15, 20)}
                                color={variables.textColor}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoWrapper}>
                        <Text style={styles.description}>Duration: </Text>
                        <TouchableOpacity
                            onPress={() => editInput()}
                            style={styles.checkButton}
                        >
                            <TextInput
                                value={duration}
                                editable={isEditable}
                                style={isEditable ? styles.editableInput : styles.input}
                                onFocus={() =>
                                    setIsShowKeyboard(isShowKeyboard => !isShowKeyboard)
                                }
                                onChangeText={value => handleInput('duration', value)}
                                keyboardType="numeric"
                                maxLength={4}
                            />
                        </TouchableOpacity>

                        <Text style={styles.description}> days</Text>
                        <TouchableOpacity
                            onPress={() => editInput()}
                            style={styles.checkButton}
                        >
                            <MaterialCommunityIcons
                                name="pencil-outline"
                                size={ScreenSettings.returnParams(15, 20)}
                                color={variables.textColor}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.infoWrapper}>
                    <Text style={styles.description}>More:</Text>
                    <TextInput
                        value={tripDetails}
                        editable={isEditable}
                        style={isEditable ? styles.editableInput : styles.input}
                        onFocus={() => setIsShowKeyboard(isShowKeyboard => !isShowKeyboard)}
                        onChangeText={value => handleInput('tripDetails', value)}
                        multiline={true}
                    />
                    <TouchableOpacity
                        onPress={() => editInput()}
                        style={styles.checkButton}
                    >
                        <MaterialCommunityIcons
                            name="pencil-outline"
                            size={ScreenSettings.returnParams(15, 20)}
                            color={variables.textColor}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.infoWrapper}>
                    <Text style={styles.description}>Age: </Text>
                    <TouchableOpacity
                        onPress={() => editInput()}
                        style={styles.checkButton}
                    >
                        <TextInput
                            value={minAge}
                            editable={isEditable}
                            style={isEditable ? styles.editableInput : styles.input}
                            onFocus={() =>
                                setIsShowKeyboard(isShowKeyboard => !isShowKeyboard)
                            }
                            onChangeText={value => handleInput('minAge', value)}
                            keyboardType="numeric"
                            maxLength={2}
                        />
                    </TouchableOpacity>
                    <Text style={styles.description}>-</Text>
                    <TouchableOpacity
                        onPress={() => editInput()}
                        style={styles.checkButton}
                    >
                        <TextInput
                            value={maxAge}
                            editable={isEditable}
                            style={isEditable ? styles.editableInput : styles.input}
                            onFocus={() =>
                                setIsShowKeyboard(isShowKeyboard => !isShowKeyboard)
                            }
                            onChangeText={value => handleInput('maxAge', value)}
                            keyboardType="numeric"
                            maxLength={2}
                        />
                    </TouchableOpacity>

                    <Text style={styles.description}>years old </Text>
                    <TouchableOpacity
                        onPress={() => editInput()}
                        style={styles.checkButton}
                    >
                        <MaterialCommunityIcons
                            name="pencil-outline"
                            size={ScreenSettings.returnParams(15, 20)}
                            color={variables.textColor}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.infoWrapper}>
                    <Text style={styles.description}>About companion: </Text>

                    <TextInput
                        value={personDetails}
                        editable={isEditable}
                        style={isEditable ? styles.editableInput : styles.input}
                        onChangeText={value => handleInput('personDetails', value)}
                        multiline={true}
                    />
                    <TouchableOpacity
                        onPress={() => editInput()}
                        style={styles.checkButton}
                    >
                        <MaterialCommunityIcons
                            name="pencil-outline"
                            size={ScreenSettings.returnParams(15, 20)}
                            color={variables.textColor}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        paddingHorizontal: 5,
        paddingVertical: 7,
    },
    editableInput: {
        borderWidth: 1,
        borderColor: 'rgba(69, 124, 247, 1)',
        borderRadius: 4,
        paddingHorizontal: 5,
        paddingVertical: 7,
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

    button: {
        borderColor: 'blue',
        borderWidth: 1,
        width: 200,
        padding: 8,
    },
});
