import { View, Text, Modal, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { query, where, getDocs, doc } from 'firebase/firestore';
import { auth, tripsRef, usersRef } from '../../firebase/config';
import { AntDesign } from '@expo/vector-icons';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';
import variables from '../../styles/utils/variables';
import MyTripItem from './MyTripItem';

export default function MyTrips() {
    const [modalVisible, setModalVisible] = useState(false);
    const [trips, setTrips] = useState([]);
    console.log('trips', trips)

    useEffect(() => {
        const getTrips = async () => {
            try {
                const userRef = doc(usersRef, auth.currentUser.uid)
                const q = query(tripsRef, where('owner', '==', userRef));
                const querySnapshot = await getDocs(q);
                const tripList = [];
                querySnapshot.forEach(doc => {
                    tripList.push({ id: doc.id, ...doc.data() });
                    setTrips(tripList);
                });
            } catch (e) {
                console.log('error', e);
            }
        };
        getTrips();
    }, []);
    console.log('T', trips);

    return (
        <View>
            <Modal animationType="slide" visible={!modalVisible}>
                <View style={styles.container}>
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
                            click={() => setModalVisible(!modalVisible)}
                        />
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>My Trips</Text>
                        {trips.length > 0 && (
                            <FlatList
                                data={trips}
                                contentContainerStyle={styles.list}
                                numColumns={2}
                                renderItem={({ item }) => <MyTripItem trip={item} handleList={setTrips} />}
                            />
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flexGrow: 1,
        // justifyContent: "space-between",
        // alignContent: "space-between"
    },
    text: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 20,
    },
    wrapper: {
        marginTop: 100,
        alignItems: 'center',
    },
});
