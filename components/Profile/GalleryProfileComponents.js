import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { ScreenSettings } from "../../styles/utils/ScreenSettings";
import { GalleryProfileComponentsStyles } from "../../styles/stylesComponents/GalleryProfileComponentsStyles";

import handleToggle from '../../helpers/handleToggle';
import variables from '../../styles/utils/variables';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';

export default function GalleryProfileComponents({
  setGallery,
  setAdd,
  setModalVisible,
  modalVisible,
  pickImage,
  image,
  takeGallery,
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
                 handleToggle(setGallery);
                 setAdd(false);
                 setModalVisible(!modalVisible);
                 }} />
            </View>
      <View style={styles.galleryContainer}>
        <View style={styles.buttonsContainer}> 
          <View>
              <ButtonRoundBlue
              title={<FontAwesome name="image" size={ScreenSettings.returnParams(17, 20)}
              color={variables.labelButtonWhite} />}
              width={ScreenSettings.returnParams(40, 60)}
              height={ScreenSettings.returnParams(40, 60)}
              marginRight={30}
              click={pickImage} />
            <Text style={styles.buttonTitleFind}>Find</Text>
          </View>
          <View>
          <ButtonRoundBlue
              title={<AntDesign name="addfile" size={ScreenSettings.returnParams(17, 20)} color={variables.labelButtonWhite} />}
              width={ScreenSettings.returnParams(40, 60)}
              height={ScreenSettings.returnParams(40, 60)}
              click={() => takeGallery(image)} />
            <Text style={styles.buttonTitleAdd}>Add</Text>
          </View>
                </View>
        <View style={styles.avatarContainer}>
        {image && (
          
          <Image source={{ uri: image }} style={styles.avatarContainer} />
          )}
        </View >
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create(GalleryProfileComponentsStyles);
