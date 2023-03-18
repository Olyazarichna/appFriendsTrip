import { StyleSheet, View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';
import variables from '../../styles/utils/variables';
import { removeTrip } from '../../services/removeTrip';
import { useEffect } from 'react';

export const MyTripItem = ({ trip }) => {
    const deleteTrip = id => {
        removeTrip(id);
        alert(`Trip ${id} deleted`);
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: trip.image }} style={styles.img} />
            <View>
                <Text style={styles.text}>{trip.city}</Text>
                <Text style={styles.text}>{trip.country}</Text>
                <Text style={styles.text}>{trip.date}</Text>
            </View>
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
                click={() => deleteTrip(trip.id)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    img: {
        width: 100,
        height: 100,
        marginRight: 16,
        borderRadius: 30,
    },
    text: {
        fontSize: 18,
        marginRight: 10,
    },
});
