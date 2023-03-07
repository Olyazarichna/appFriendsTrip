import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import {
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";

import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

import { logOut } from "../../redux/auth/authOperations";
// import { ActionCodeURL, getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

import variables from "../../styles/utils/variables";
import fonts from "../../styles/utils/mixins";
import { UserProfilesDefaultScreenStyles } from "../../styles/stylesScreens/UserProfilesDefaultScreenStyles";
// import { validation } from "../../helpers/validation/validation";
import { ScreenSettings } from "../../styles/utils/ScreenSettings";

import handleToggle from "../../helpers/handleToggle";
// import changeInputForProfiles from "../../helpers/changeInputForProfiles";

import ButtonLongBlue from "../../components/Buttons/ButtonLongBlue";
import ButtonRoundBlue from "../../components/Buttons/ButtonRoundBlue";

import CameraProfileComponents from "../../components/Profile/CameraProfileComponents";
import GalleryProfileComponents from "../../components/Profile/GalleryProfileComponents";

import { createUserProfile } from "../../services/createUserProfile";

export default function UserProfilesDefaultScreen({ navigation }) {
  const state = useSelector((state) => state.auth);
  console.log("stateUserDef", state);

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);
  const [phone, setPhone] = useState(state.phone);
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [isEditable, setIsEditable] = useState(false);

  const [checkValidEmail, setCheckValidEmail] = useState(true);
  const [checkValidPhone, setCheckValidPhone] = useState(true);

  const [add, setAdd] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [camera, setCamera] = useState(true);
  const [gallery, setGallery] = useState(true);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState("");
  const [snap, setSnap] = useState(null);

  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const handleInput = (inputName, value) => {
    setIsShowKeyboard(true);
    switch (inputName) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "about":
        setAbout(value);
        break;
      default:
        break;
    }
  };
  const editInput = () => {
    setIsEditable((isEditable) => !isEditable);
    const userData = {
      name,
      email,
      phone,
      avatar,
      location,
      about,
    };
    createUserProfile(state.userId, { userData });
  };

  const handleSubmit = () => {
    dispatch(logOut());
  };

  const takeGallery = (image) => {
    setAvatar(image);
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
    setAvatar(photo?.uri);
    setCamera(false);
    setAdd(false);
    setModalVisible(!modalVisible);
  };

  const IOS = Platform.OS === "ios";
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 20, left: 25 }}>
        <ButtonRoundBlue
          title={
            <AntDesign
              name="close"
              size={17}
              color={variables.labelButtonWhite}
            />
          }
          width={40}
          height={40}
          marginTop={37}
          click={handleSubmit}
        />
      </View>

      <View
        style={{
          ...styles.avatarContainer,
          marginTop: isShowKeyboard ? 120 : 0,
        }}
      >
        <View>
          <Image
            style={styles.avatarContainer}
            source={{ uri: avatar }}
          ></Image>
        </View>
        <View
          style={{
            position: "absolute",
            top: ScreenSettings.returnParams(103, 170),
            left: ScreenSettings.returnParams(80, 145),
            zIndex: 1,
          }}
        >
          <ButtonRoundBlue
            title={
              <AntDesign
                name="check"
                size={ScreenSettings.returnParams(10, 20)}
                color={variables.labelButtonWhite}
              />
            }
            width={ScreenSettings.returnParams(21, 31)}
            height={ScreenSettings.returnParams(21, 31)}
            click={() => handleToggle(setAdd)}
          />
        </View>
        {add && (
          <>
            <View
              style={{
                position: "absolute",
                top: ScreenSettings.returnParams(90, 150),
                left: ScreenSettings.returnParams(20, 10),
              }}
            >
              <ButtonRoundBlue
                title={
                  <EvilIcons
                    name="image"
                    size={ScreenSettings.returnParams(18, 25)}
                    color={variables.labelButtonWhite}
                  />
                }
                width={ScreenSettings.returnParams(30, 40)}
                height={ScreenSettings.returnParams(30, 40)}
                click={showGallery}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: ScreenSettings.returnParams(65, 110),
                left: ScreenSettings.returnParams(2, -10),
              }}
            >
              <ButtonRoundBlue
                title={
                  <AntDesign
                    name="camera"
                    size={ScreenSettings.returnParams(18, 22)}
                    color={variables.labelButtonWhite}
                  />
                }
                width={ScreenSettings.returnParams(30, 40)}
                height={ScreenSettings.returnParams(30, 40)}
                click={showCamera}
              />
            </View>
          </>
        )}
      </View>

      {IOS && (
        <View
          style={{
            marginTop: 9,
            marginBottom: 26,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 8,
              ...fonts(16, "600"),
              color: variables.titleColor,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              textAlign: "center",
              ...fonts(14, "500"),
              color: variables.textColor,
            }}
          >
            {location}
          </Text>
        </View>
      )}

      <View style={styles.dataContainer}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: ScreenSettings.returnParams(0, 10),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textTitle}>Name:</Text>
            <TextInput
              value={name}
              editable={isEditable}
              style={isEditable ? styles.inputEditable : styles.input}
              onFocus={() =>
                setIsShowKeyboard((isShowKeyboard) => !isShowKeyboard)
              }
              onChangeText={(value) => handleInput("name", value)}
              maxLength={20}
            />
          </View>

          <TouchableOpacity
            onPress={() => editInput()}
            style={styles.checkButton}
          >
            <MaterialCommunityIcons
              name="pencil-outline"
              size={ScreenSettings.returnParams(15, 20)}
              color={variables.textColor}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginBottom: ScreenSettings.returnParams(0, 10),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textTitle}>Email:</Text>

            {!checkValidEmail && (
              <View style={styles.stylesNotCorrect}>
                {localState.email === "" ? (
                  <Text style={styles.stylesNotCorrectText}>
                    You have not entered an email
                  </Text>
                ) : (
                  <Text style={styles.stylesNotCorrectText}>
                    You have entered an incorrect email
                  </Text>
                )}
              </View>
            )}
            <TextInput
              value={email}
              editable={isEditable}
              style={isEditable ? styles.inputEditable : styles.input}
              onFocus={() =>
                setIsShowKeyboard((isShowKeyboard) => !isShowKeyboard)
              }
              onChangeText={(value) => handleInput("email", value)}
            />
          </View>

          <TouchableOpacity
            onPress={() => editInput()}
            style={styles.checkButton}
          >
            <MaterialCommunityIcons
              name="pencil-outline"
              size={ScreenSettings.returnParams(15, 20)}
              color={variables.textColor}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginBottom: ScreenSettings.returnParams(0, 10),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textTitle}>Phone:</Text>
            {!checkValidPhone && (
              <View style={styles.stylesNotCorrect}>
                {localState.phone === "" ? (
                  <Text style={styles.stylesNotCorrectText}>
                    You have not entered an phone
                  </Text>
                ) : (
                  <Text style={styles.stylesNotCorrectText}>
                    Enter the phone number in the format "+38 (067) 22-222-22"
                  </Text>
                )}
              </View>
            )}
            <TextInput
              value={phone}
              editable={isEditable}
              style={isEditable ? styles.inputEditable : styles.input}
              onFocus={() =>
                setIsShowKeyboard((isShowKeyboard) => !isShowKeyboard)
              }
              onChangeText={(value) => handleInput("phone", value)}
            />
          </View>

          <TouchableOpacity
            onPress={() => editInput()}
            style={styles.checkButton}
          >
            <MaterialCommunityIcons
              name="pencil-outline"
              size={ScreenSettings.returnParams(15, 20)}
              color={variables.textColor}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginBottom: ScreenSettings.returnParams(0, 10),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textTitle}>Locations:</Text>
            <TextInput
              value={location}
              editable={isEditable}
              style={isEditable ? styles.inputEditable : styles.input}
              onFocus={() =>
                setIsShowKeyboard((isShowKeyboard) => !isShowKeyboard)
              }
              onChangeText={(value) => handleInput("location", value)}
            />
          </View>

          <TouchableOpacity
            onPress={() => editInput()}
            style={styles.checkButton}
          >
            <MaterialCommunityIcons
              name="pencil-outline"
              size={ScreenSettings.returnParams(15, 20)}
              color={variables.textColor}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textTitle}>About me:</Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                value={about}
                editable={isEditable}
                style={isEditable ? styles.inputEditable : styles.input}
                underlineColorAndroid="transparent"
                numberOfLines={3}
                multiline={true}
                onFocus={() =>
                  setIsShowKeyboard((isShowKeyboard) => !isShowKeyboard)
                }
                onChangeText={(value) => handleInput("about", value)}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => editInput()}
            style={styles.checkButton}
          >
            <MaterialCommunityIcons
              name="pencil-outline"
              size={ScreenSettings.returnParams(15, 20)}
              color={variables.textColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ButtonLongBlue
          title="add trip"
          marginTop={ScreenSettings.returnParams(0, 40)}
          click={() => navigation.navigate("MyTrip")}
        />
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
    </View>
  );
}

const styles = StyleSheet.create(UserProfilesDefaultScreenStyles);