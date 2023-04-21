import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground,
} from 'react-native';
import fonts from '../../styles/utils/mixins';
import { ScreenSettings } from '../../styles/utils/ScreenSettings';
import { useState, useEffect } from 'react';
import { auth } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import TripItem from '../../components/TripItem/TripItem';

export default function FavoriteScreen() {
    const [favoriteTrips, setFavoriteTrips] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
            const favoriteTripsIds = userDoc.data().favoriteTrips;

            const favoriteTrips = await Promise.all(
                favoriteTripsIds.map(async tripId => {
                    const tripDoc = await getDoc(doc(db, 'trips', tripId));
                    return tripDoc.data();
                })
            );

            setFavoriteTrips(favoriteTrips);
            console.log('New FavTrips', favoriteTrips);
        };
        fetchUserData();
    }, []);
    console.log('avTrips', favoriteTrips);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>TRVL</Text>
            <View style={styles.textWrapper}>
                <Text style={styles.header}>Favorite</Text>
            </View>
            <View>
                {favoriteTrips.length > 0 ? (
                    <FlatList
                        data={favoriteTrips}
                        keyExtractor={item => item.createdAt.seconds}
                        renderItem={({ item }) => <TripItem trip={item} />}
                    />
                ) : (
                    <Text>You don't have any trips in favorite.</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
    },
    header: {
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 30,
    },
    textWrapper: {
        alignItems: 'center',
        marginVertical: 30,
    },
    label: {
        marginTop: 50,
        ...fonts(ScreenSettings.returnParams(20, 25), '600', 1.2),
    },
});
