import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function CreateTripScreen() {
    const onChangeInput = () => {
        console.log('change input');
    }
    const btnPress = () => {
        console.log('button pressed');
    }

    return (<View style={styles.container}>
        <Text style={styles.heading}>Add Your Trip</Text>
        <View style={styles.imgContainer}>
            <Image></Image>
        </View>
        <View style={styles.form}>
            <View style={styles.formInput}>
                <Text style={styles.title}>Place Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeInput}
                    // value={text}
                    placeholder="Franse,Paris"
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.title}>Date</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeInput}
                    // value={text}
                    placeholder="May 25"
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.title}>Duration</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeInput}
                    // value={text}
                    placeholder="3-5 days"
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.title}>Add more details about trip</Text>
                <TextInput
                    style={styles.textArea}
                    onChangeText={onChangeInput}
                    multiline={true}
                    // value={text}
                    placeholder="Here you can write whatever you want to tell about this trip"
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.title}> Add more details about companion</Text>
                <TextInput
                    style={styles.textArea}
                    onChangeText={onChangeInput}
                    multiline={true}
                    // value={text}
                    placeholder="About a person you are looking for this trip"
                />
            </View>
            <LinearGradient colors={['#457CF7', '#375ABE']} end={{ x: 0.5, y: 0.2 }} style={styles.gradient}>
                <TouchableOpacity style={styles.btn}
                    onPress={btnPress}
                >
                    <Text style={styles.textBtn}>Add My Trip</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 14,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    imgContainer: {
        width: 325,
        height: 318,
        borderRadius: 4,
    },
    heading: {
        fontSize: 24,
        lineHeight: 30,
        fontWeight: '600',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            // width: 0,
            // height: 4,
        },
    },
    formInput: {
        marginTop: 15,
    },
    form: {
        // marginHorizontal: 25,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 24,
    },
    input: {
        with: 100,
        padding: 8,
        borderWidth: 1,
        borderColor: 'rgba(69, 124, 247, 1)',
        borderRadius: 4,
    },
    textArea: {
        padding: 8,
        borderWidth: 1,
        borderColor: 'rgba(69, 124, 247, 1)',
        borderRadius: 4,
    },
    gradient: {
        marginTop: 30,
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
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
        borderColor: 'rgba(69, 124, 247, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.25)',

    },
    textBtn: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: '700',
        lineHeight: 19,
    }
});