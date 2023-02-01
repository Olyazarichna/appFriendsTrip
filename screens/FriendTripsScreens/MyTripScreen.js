// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TextInput,
//     Button,
//     TouchableOpacity,
//     Platform,
//     KeyboardAvoidingView,
//     TouchableWithoutFeedback,
//     Keyboard,
//     ImageBackground
// } from 'react-native';

// export default function MyTripScreen() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>Add Your Trip</Text>
//             <View>
//                 <Text style={styles.heading}>Place Name</Text>
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={onChangeNumber}
//                     value={text}
//                     placeholder="France,Paris"
//                 />
//             </View>
//             <View>
//                 <Text style={styles.heading}>Date</Text>
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={onChangeNumber}
//                     value={text}
//                     placeholder="May 25"
//                 />
//             </View>
//             <View>
//                 <Text style={styles.heading}>Duration</Text>
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={onChangeNumber}
//                     value={text}
//                     placeholder="3-5 days"
//                 />
//             </View>
//             <View>
//                 <Text style={styles.heading}>Add more details about trip</Text>
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={onChangeNumber}
//                     value={text}
//                     placeholder="Here you can write whatever you want to tell about this trip"
//                 />
//             </View>
//             <View>
//                 <Text style={styles.heading}> Add more details about companion</Text>
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={onChangeNumber}
//                     value={text}
//                     placeholder="About a person you are looking for this trip"
//                 />
//             </View>
//             <Button
//                 title="Add Your Trip"
//                 onPress={() => Alert.alert('Simple Button pressed')}
//             />
//         </View>
//     )
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     heading: {
//         fontSize: 24,
//         lineHeight: 30,
//         color: rgba(15, 23, 42, 1),
//     },
//     input: {

//     }
// });