import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';


import { Camera, CameraType } from 'expo-camera';

import { Ionicons, MaterialIcons} from '@expo/vector-icons';


import handleToggle from '../../helpers/handleToggle';

export default function CameraProlileComponents({
    setCamera,
    setAdd,
    setSnap,
    setType,
    takePhoto,
    setModalVisible,
    modalVisible,
    type
}) { 
    
    return (
    
               <View style={styles.addAvatar}>
                    <TouchableOpacity
                        onPress={() => {
                            handleToggle(setCamera);
                            setAdd(false);
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <Ionicons name="md-close-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                
                    <Camera style={styles.camera} ref={setSnap} type={type}>
                        
                        <View style={styles.buttonContainer}>
                       <TouchableOpacity
                         onPress={() => {
                           setType(type === CameraType.back ? CameraType.front : CameraType.back);
                            }}>
                                <Ionicons name="camera-reverse" size={24} color="#fff" />
                            </TouchableOpacity >
                            
                            <TouchableOpacity onPress={takePhoto}>
                            <MaterialIcons name="camera-alt" size={24} color="#fff" />
                            </TouchableOpacity>
               </View>
                                  
                    </Camera>
            </View>        

);
};

const styles = StyleSheet.create({

    avatarConteiner: {
        width: 150,
        height: 150,
        backgroundColor: 'red',
        borderRadius: 10,
    },
    avatarButton: {
        color: 'white',
    },
    addAvatar: {
        justifyContent: "center",
        alignItems: 'center',
        position: 'absolute',
        width: "100%",
        height: "100%",
        backgroundColor: 'yellow'
    },
    camera: {
        width: '90%',
        height: 300,
    },
    buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    },
 });
