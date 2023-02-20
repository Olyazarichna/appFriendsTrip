import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { ScreenSettings } from "../../styles/utils/ScreenSettings";
import fonts from "../../styles/utils/mixins";

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
     
      <View style={{position: "absolute", top: 0, left: 25}}>
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

      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', marginBottom: 10}}> 
          <View>
              <ButtonRoundBlue
                title={<FontAwesome name="image" size={ScreenSettings.returnParams(17, 20)} color={variables.labelButtonWhite} />}
                width={ScreenSettings.returnParams(40, 60)}
                height={ScreenSettings.returnParams(40, 60)}
                marginRight={30}
              click={pickImage} />
            <Text style={{
              color: variables.labelButtonBlue,
              marginLeft: ScreenSettings.returnParams(10, 15),
              marginTop: ScreenSettings.returnParams(0, 5),
              marginRight: "auto",
              ...fonts(ScreenSettings.returnParams(14, 18), "500")
            }}>Find</Text>
          </View>
          <View>
          <ButtonRoundBlue
                title={<AntDesign name="addfile" size={ScreenSettings.returnParams(17, 20)} color={variables.labelButtonWhite} />}
                width={ScreenSettings.returnParams(40, 60)}
                height={ScreenSettings.returnParams(40, 60)}
                // marginTop={37}
              click={() => takeGallery(image)} />
            <Text style={{
            color: variables.labelButtonBlue,
              marginLeft: ScreenSettings.returnParams("auto", 15),
              marginTop: ScreenSettings.returnParams(0, 5),
              marginRight: "auto",
              ...fonts(ScreenSettings.returnParams(14, 18), "500")
          }}>Add</Text>
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

const styles = StyleSheet.create({
  addAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: variables.labelButtonWhite,
  },
  avatarContainer: {
    width: ScreenSettings.returnParams(150, 250),
    height: ScreenSettings.returnParams(150, 250),
    backgroundColor: "#E3E5E8",
    borderRadius: 120,
    },
});
