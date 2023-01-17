import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';

import handleToggle from '../../helpers/handleToggle';
import variables from '../../styles/utils/variables';
import ButtonRoundBlue from '../Buttons/ButtonRoundBlue';

export default function GallertProlileComponents({
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
                title={<AntDesign name="close" size={17} color={variables.lableButtonWhite} />}
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
                title={<FontAwesome name="image" size={17} color={variables.lableButtonWhite} />}
                width={40}
                height={40}
                // marginTop={37}
              click={pickImage} />
          <Text style={{color: variables.lableButtonBlue, marginLeft: "auto", marginRight: "auto"}}>Find</Text>
          </View>
          <View>
          <ButtonRoundBlue
                title={<AntDesign name="addfile" size={17} color={variables.lableButtonWhite} />}
                width={40}
            height={40}
            marginLeft={10}
                // marginTop={37}
              click={() => takeGallery(image)} />
          <Text style={{color: variables.lableButtonBlue, marginLeft: "auto", marginRight: "auto"}}>Add</Text>
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
    backgroundColor: variables.lableButtonWhite,
  },
  avatarContainer: {
        width: 150,
        height: 160,
        backgroundColor: "#E3E5E8",
        borderRadius: 70,
    },
});
