import { StyleSheet, View, TouchableOpacity, Image,} from 'react-native';

import { Camera, CameraType } from 'expo-camera';

import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import handleToggle from '../../helpers/handleToggle';
import variables from '../../styles/utils/variables';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';

export default function CameraProfileComponents({
  setCamera,
  setAdd,
  setSnap,
  setType,
  takePhoto,
  setModalVisible,
  modalVisible,
  type,
}) {
  return (
    <View style={styles.addAvatar}>
      <View style={{position: "absolute", top: 0, left: 25}}>
          <ButtonRoundBlue
                title={<AntDesign name="close" size={17} color={variables.lableButtonWhite} />}
                width={40}
                height={40}
                marginTop={37}
                click={
                      () => {
                      handleToggle(setCamera);
                      setAdd(false);
                      setModalVisible(!modalVisible);
                      }}  
                    />
            </View>

      <Camera style={styles.camera} ref={setSnap} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Ionicons name="camera-reverse" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={takePhoto}>
            <MaterialIcons name="camera-alt" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </Camera>

    </View>
  );
}

const styles = StyleSheet.create({

  addAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: variables.lableButtonWhite,
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
