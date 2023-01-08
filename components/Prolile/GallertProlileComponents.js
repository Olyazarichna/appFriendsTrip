import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';

import handleToggle from '../../helpers/handleToggle';

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
      <TouchableOpacity
        onPress={() => {
          handleToggle(setGallery);
          setAdd(false);
          setModalVisible(!modalVisible);
        }}
      >
        <Ionicons name="md-close-circle-outline" size={24} color="blackf" />
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={pickImage}>
          <FontAwesome name="image" size={24} color="black" />
        </TouchableOpacity>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <TouchableOpacity onPress={() => takeGallery(image)}>
          <AntDesign name="addfile" size={24} color="black" />
        </TouchableOpacity>
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
    backgroundColor: 'yellow',
  },
});
