import { StyleSheet, View, TouchableOpacity, Image,} from 'react-native';

import { Camera, CameraType } from 'expo-camera';

import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { ScreenSettings } from "../../styles/utils/ScreenSettings";

import handleToggle from '../../helpers/handleToggle';
import variables from '../../styles/utils/variables';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';
import { CameraProfileComponentsStyles } from "../../styles/stylesComponents/CameraProfileComponentsStyles";

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
      <View style={styles.closeButton}>
          <ButtonRoundBlue
                title={<AntDesign name="close" size={17} color={variables.labelButtonWhite} />}
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
          <TouchableOpacity style={{marginRight: 10}}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Ionicons name="camera-reverse" size={ScreenSettings.returnParams(24, 34)} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={takePhoto}>
            <MaterialIcons name="camera-alt" size={ScreenSettings.returnParams(24, 34)} color="#fff" />
          </TouchableOpacity>
        </View>
      </Camera>

    </View>
  );
}

const styles = StyleSheet.create(CameraProfileComponentsStyles);
