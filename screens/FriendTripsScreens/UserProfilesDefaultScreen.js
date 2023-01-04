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
    Modal,
     Pressable
} from 'react-native';
import { useState, useEffect } from "react";
export default function UserProfilesDefaultScreen({ navigation}) {
const [modalVisible, setModalVisible] = useState(false);
// route    const [data, setdata] = useState([]);


//     useEffect(
//         () => {
//             if (!route.params) {
//                 setdata({ avatar: '', name: '', email: '', phone: '' });
//             }
//       setdata(prevState => [...prevState, route.params])    
//   } , [route.params]
// )

//     console.log('Data', data[0]);

//     const  { avatar, name, email, phone } = data[0]; 
    
  

    return (
        <View style={styles.container}>
           
            
                <View style={styles.avatarConteiner}>
              
                 {/* <View>
                    <Image style={{zIndex: 100, width: 150, height:150, borderRadius: 10}}  source={{uri: avatar}}></Image>
                </View>    */}
                
            </View>
            <View> 
                <Text>Name: <Text>Tom</Text></Text>
                <Text>Email:<Text>Tom@i.ua</Text></Text>
                <Text>Phone:<Text>+3096848867</Text></Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("CreateTrip")}><Text>add trip</Text></TouchableOpacity>  
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("EditData")}><Text>Edit data</Text></TouchableOpacity>  
            </View>



            
        </View>
    )
};

const styles = StyleSheet.create({
container: {
flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
 justifyContent: 'center',
    },
    avatarConteiner: {
        width: 150,
        height: 150,
        backgroundColor: 'red',
        borderRadius: 10,
    },
  
 });