import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
import { getAuth } from "firebase/auth";
import { useState } from "react";

export default function UserProfilesDefaultScreen({ navigation }) {
    const state = useSelector(state => state.auth);
    console.log('stateDefault', state)
    const auth = getAuth();

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(logOut());
    };
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text>Log out</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.avatarContainer}>
                {/* <View>
                    <Image style={{zIndex: 100, width: 150, height:150, borderRadius: 10}}  source={{uri: avatar}}></Image>
                </View>    */}
            </View>
            <View>
                <Text>
                    Name: <Text>{state.name}</Text>
                </Text>
                <Text>
                    Email:<Text>{state.email}</Text>
                </Text>
                <Text>
                    Phone:<Text>{state.phone}</Text>
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("CreateTrip")}>
                    <Text>add trip</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("EditData")}>
                    <Text>Edit data</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    avatarContainer: {
        width: 150,
        height: 150,
        backgroundColor: "red",
        borderRadius: 10,
    },
});
