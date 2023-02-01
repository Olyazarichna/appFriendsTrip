import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { addTrip } from "../../services/addTrip";

export default function CreateTripScreen() {
    const [place, setPlace] = useState("");
    const [image, setImage] = useState(null);
    const [date, setDate] = useState(new Date());
    const [duration, setDuration] = useState("");
    const [tripDetails, setTripDetails] = useState("");
    const [personDetails, setPersonDetails] = useState("");

    const btnPress = () => {
        const trip = {
            place,
            image,
            date,
            duration,
            tripDetails,
            personDetails,
        };
        addTrip({ trip });
        reset();
    };
    const reset = () => {
        setPlace("");
        setDate("");
        setDuration("");
        setTripDetails("");
        setPersonDetails("");
    };

    const addImages = () => {
        const option = {
            mediaType: "photo",
            // maxWidth: 325,
            // maxHeight: 318,
        };
        launchImageLibrary(option, setImage);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Your Trip</Text>
            <View style={styles.imgContainer}>
                <TouchableOpacity style={styles.btnImage} onPress={addImages}>
                    <Text style={styles.textImg}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.form}>
                <View style={styles.formInput}>
                    <Text style={styles.title}>Place Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setPlace(text)}
                        value={place}
                        placeholder="France,Paris"
                    />
                </View>
                <View style={styles.formInput}>
                    <Text style={styles.title}>Date</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            setDate(text);
                        }}
                        value={date}
                        placeholder="May 25"
                    />
                </View>
                <View style={styles.formInput}>
                    <Text style={styles.title}>Duration</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setDuration(text)}
                        value={duration}
                        placeholder="3-5 days"
                    />
                </View>
                <View style={styles.formInput}>
                    <Text style={styles.title}>Add more details about trip</Text>
                    <TextInput
                        style={styles.textArea}
                        onChangeText={(text) => setTripDetails(text)}
                        multiline={true}
                        value={tripDetails}
                        placeholder="Here you can write whatever you want to tell about this trip"
                    />
                </View>
                <View style={styles.formInput}>
                    <Text style={styles.title}> Add more details about companion</Text>
                    <TextInput
                        style={styles.textArea}
                        onChangeText={(text) => setPersonDetails(text)}
                        multiline={true}
                        value={personDetails}
                        placeholder="About a person you are looking for this trip"
                    />
                </View>
                <LinearGradient
                    colors={["#457CF7", "#375ABE"]}
                    end={{ x: 0.5, y: 0.2 }}
                    style={styles.gradient}
                >
                    <TouchableOpacity style={styles.btn} onPress={btnPress}>
                        <Text style={styles.textBtn}>Add My Trip</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 14,
        justifyContent: "center",
    },
    btnImage: {
        width: 325,
        height: 318,
        borderRadius: 4,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(214, 214, 214, 1)",
        borderRadius: 30,
        borderWidth: 0,
    },
    textImg: {
        fontSize: 100,
        color: "rgba(255, 255, 255, 1)",
    },
    heading: {
        fontSize: 24,
        lineHeight: 30,
        fontWeight: "600",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            // width: 0,
            // height: 4,
        },
    },
    formInput: {
        marginTop: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 24,
    },
    input: {
        with: 100,
        padding: 8,
        borderWidth: 1,
        borderColor: "rgba(69, 124, 247, 1)",
        borderRadius: 4,
    },
    textArea: {
        padding: 8,
        borderWidth: 1,
        borderColor: "rgba(69, 124, 247, 1)",
        borderRadius: 4,
    },
    gradient: {
        marginTop: 30,
        borderRadius: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    btn: {
        height: 59,
        paddingTop: 20,
        paddingBottom: 20,
        borderWidth: 1,
        borderColor: "rgba(69, 124, 247, 1)",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        borderWidth: 0,
    },
    textBtn: {
        fontSize: 15,
        color: "#ffffff",
        fontWeight: "700",
        lineHeight: 19,
    },
});
