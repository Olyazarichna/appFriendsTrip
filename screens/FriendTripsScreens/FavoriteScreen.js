import { configureStore } from '@reduxjs/toolkit';
import {
    StyleSheet,
    Text,
    View,
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
import variables from '../../styles/utils/variables';
import { ScreenSettings } from '../../styles/utils/ScreenSettings';
import { useState, useEffect } from 'react';
import { getFavoriteTrips } from '../../services/getFavorites';

export default function FavoriteScreen() {
    const [favoriteTrips, setFavoriteTrips] = useState([]);

    useEffect(() => {
        console.log("I Only run once (When the component gets mounted)")
        // getFavoriteTrips();
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>TRVL</Text>
            <View style={styles.textWrapper}>
                <Text style={styles.header}>Favorite</Text>
            </View>
            <View>

            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 30,
    },
    textWrapper: {
        alignItems: 'center',
        marginVertical: 30,
        // justifyContent: 'center',
    },
    label: {
        marginTop: 50,
        ...fonts(ScreenSettings.returnParams(20, 25), "600", 1.2)
    },
});