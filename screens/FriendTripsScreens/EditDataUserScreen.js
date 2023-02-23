import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import handleToggle from "../../helpers/handleToggle";
import CameraProfileComponents from "../../components/Profile/CameraProfileComponents";
import GalleryProfileComponents from "../../components/Profile/GalleryProfileComponents";

import { async } from "@firebase/util";

const initialState = {
  avatar: "",
  name: "",
  email: "",
  phone: "",
};

export default function EditDataUserScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  console.log("stateLOgIn", state);

  const [modalVisible, setModalVisible] = useState(false);

  const [add, setAdd] = useState(false);
  const [camera, setCamera] = useState(false);
  const [gallery, setGallery] = useState(false);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState("");
  const [snap, setSnap] = useState(null);

  const [image, setImage] = useState(null);

  const takeGallery = (image) => {
    setState((prevState) => ({ ...prevState, avatar: image }));
    setGallery(false);
    setAdd(false);
    setModalVisible(!modalVisible);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const showCamera = () => {
    setModalVisible(true);
    setCamera(true);
    setGallery(false);
  };

  const showGallery = () => {
    setModalVisible(true);
    setGallery(true);
    setCamera(false);
  };

  const takePhoto = async () => {
    const photo = await snap.takePictureAsync();
    setPhoto(photo?.uri);
    setState((prevState) => ({ ...prevState, avatar: photo?.uri }));
    setCamera(false);
    setAdd(false);
    setModalVisible(!modalVisible);
  };

  const handleSubmit = () => {
    navigation.navigate("ProfilesDefault");
  };
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          style={styles.addAvatarButton}
          onPress={() => handleToggle(setAdd)}
        >
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
        {add && (
          <View style={styles.avatarButtonContainer}>
            <TouchableOpacity onPress={showCamera}>
              <Text style={styles.avatarButton}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showGallery}>
              <Text style={styles.avatarButton}>Add from the gallery</Text>
            </TouchableOpacity>
          </View>
        )}
        {state.avatar && (
          <View style={{ borderColor: "#fff", borderWidth: 1 }}>
            <Image
              style={{
                zIndex: 100,
                width: 150,
                height: 150,
                borderRadius: 10,
              }}
              source={{ uri: state.avatar }}
            ></Image>
          </View>
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <>
          {gallery && (
            <GalleryProfileComponents
              setGallery={setGallery}
              setAdd={setAdd}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
              pickImage={pickImage}
              image={image}
              takeGallery={takeGallery}
            />
          )}
          {camera && (
            <CameraProfileComponents
              setCamera={setCamera}
              setAdd={setAdd}
              setSnap={setSnap}
              setType={setType}
              takePhoto={takePhoto}
              photo={photo}
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
              type={type}
            />
          )}
        </>
      </Modal>

      <View style={styles.form}>
        <View>
          <Text>Name</Text>
          <TextInput
            value={state.name}
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, name: value }))
            }
          />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
            value={state.email}
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
          />
        </View>
        <View>
          <Text>Phone</Text>
          <TextInput
            value={state.phone}
            style={styles.input}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, phone: value }))
            }
          />
        </View>

        <TouchableOpacity onPress={handleSubmit}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  avatarContainer: {
    width: 150,
    height: 150,
    backgroundColor: "red",
    borderRadius: 10,
  },
  addAvatarButton: {
    position: "absolute",
    zIndex: 100,
  },
  avatarButtonContainer: {
    position: "absolute",
    top: 25,
    zIndex: 100,
  },
  avatarButton: {
    color: "white",
  },
  addAvatar: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "yellow",
  },
  camera: {
    width: "90%",
    height: 300,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  form: {
    marginHorizontal: 18,
  },
  input: {
    borderWidth: 1,
    height: 50,
    paddingLeft: 16,
    borderRadius: 8,
  },
});
