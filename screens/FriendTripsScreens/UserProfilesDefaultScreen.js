import {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    Keyboard,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AntDesign, MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';

import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

import { logOut } from "../../redux/auth/authOperations";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

import variables from "../../styles/utils/variables";
import fonts from "../../styles/utils/mixins";
import { validation } from "../../helpers/validation/validation";

import handleToggle from "../../helpers/handleToggle";
import changeInputForProfiles from "../../helpers/changeInputForProfiles";

import ButtonLongBlue from "../../components/Buttons/ButtonLongBlue";
import ButtonRoundBlue from "../../components/Buttons/ButtonRoundBlue";

import CameraProfileComponents from '../../components/Profile/CameraProfileComponents';
import GallertProfileComponents from '../../components/Profile/GallertProfileComponents';




export default function UserProfilesDefaultScreen({ navigation }) {
 
    const state = useSelector(state => state.auth);

    const initialLocalState = {
    avatar: "",
    name: state.name,
    email: state.email,
    phone: state.phone,
    location: '',
    about: '',
    }

    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const [dataCheckName, setDataCheckName] = useState(false);
    const [dataCheckEmail, setDataCheckEmail] = useState(false);
    const [dataCheckPhone, setDataCheckPhone] = useState(false);
    const [dataCheckLocation, setDataCheckLocation] = useState(false);
    const [dataCheckAbout, setDataCheckAbout] = useState(false);

    const [checkValidEmail, setCheckValidEmail] = useState(true);
    const [checkValidPhone, setCheckValidPhone] = useState(true);


    const [add, setAdd] = useState(false);

    const [localState, setLocalState] = useState(initialLocalState);

    const [modalVisible, setModalVisible] = useState(false);

    const [camera, setCamera] = useState(true);
    const [gallery, setGallery] = useState(true);

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [photo, setPhoto] = useState('');
    const [snap, setSnap] = useState(null);

    const [image, setImage] = useState(null);



    const handleInput = () => {
        if (
            !dataCheckName ||
            !dataCheckEmail &&
            !dataCheckPhone &&
            !dataCheckLocation &&
            !dataCheckAbout

        ) {
            if (isShowKeyboard) {
                setIsShowKeyboard(false);  
        }
       
       console.log('localState:', localState) 
    }
}
 

    console.log('stateDefault', state)
    const auth = getAuth();

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(logOut());
    };


    const takeGallery = (image) => {
        setLocalState((prevState) => ({ ...prevState, avatar: image }));
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
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



    const showCamera = () => {
    setModalVisible(true)
    setCamera(true);
    setGallery(false);
    };

    const showGallery = () => {
    setModalVisible(true)
    setGallery(true);
    setCamera(false);
    };

   const takePhoto = async () => {
    const photo = await snap.takePictureAsync();
    setPhoto(photo?.uri);
    setLocalState((prevState) => ({ ...prevState, avatar: photo?.uri }));
    setCamera(false);
    setAdd(false);
    setModalVisible(!modalVisible);
    };

    return (
           
     <View style={styles.container}>
        <View style={{position: "absolute", top: 0, left: 25}}>
          <ButtonRoundBlue
                title={<AntDesign name="close" size={17} color={variables.lableButtonWhite} />}
                width={40}
                height={40}
                marginTop={37}
                click={handleSubmit}  
                    />
            </View>
            
            <View style={{...styles.avatarContainer, marginTop: isShowKeyboard ? 120 : 0}}>
                <View>
                <Image style={styles.avatarContainer}  source={{uri: localState.avatar}}></Image>
                </View> 
                <View style={{
                    position: "absolute",
                    top: 103,
                    left: 80,
                    zIndex: 1
                }}>
                 <ButtonRoundBlue
                title={<AntDesign name="check" size={10} color={variables.lableButtonWhite} />}
                width={21}
                height={21}
                click={() => handleToggle(setAdd)}
                    />
                </View>
                {add &&
                    <>
                <View style={{position: "absolute", top: 90, left: 20 }}>
                    <ButtonRoundBlue
                    title={<EvilIcons name="image" size={18} color={variables.lableButtonWhite}  />}
                    width={30}
                    height={30}
                    click={showGallery}
                    /> 
                   
                </View>
                <View style={{ position: "absolute", top: 65, left: 2 }}>
                    <ButtonRoundBlue
                    title={<AntDesign name="camerao" size={18} color={variables.lableButtonWhite}  />}
                    width={30}
                    height={30}
                    click={showCamera}
                    />   
                </View>
                </>}

            </View>

            <View style={styles.dataConteiner}>
                <View style={{ flexDirection: 'row', }}>
                    
                        <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.textTitle}>Name:</Text>
                            <TextInput
                            value={localState.name} 
                            editable={dataCheckName}
                            style={styles.input}
                            onFocus={() => setIsShowKeyboard((isShowKeyboard) => !isShowKeyboard)}
                            onChangeText={(value) =>  changeInputForProfiles(value, setLocalState, 'name') }
                            />
                    </View>
                  
                                    
                    <TouchableOpacity onPress={() => { handleToggle(setDataCheckName); handleInput()}} style={styles.checkButton}>
                        <MaterialCommunityIcons name="pencil-outline" size={15} color={variables.textColor} />
                    </TouchableOpacity>
                </View>

                  <View style={{ flexDirection: 'row', }}>
                   
                        <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.textTitle}>Email:</Text>

                         {!checkValidEmail && <View style={styles.stailsNotCorect}>
                         {localState.email === '' ? <Text style={styles.stailsNotCorectText}>You have not entered an email</Text> :
                        <Text style={styles.stailsNotCorectText}>You have entered an incorrect email</Text>}
                        </View>}
                            <TextInput
                                value={localState.email}
                                editable={dataCheckEmail}
                                style={styles.input}
                                onFocus={() => setIsShowKeyboard((isShowKeyboard) => !isShowKeyboard)}
                                onChangeText={(value) => changeInputForProfiles(value, setLocalState, 'email', validation.email, setCheckValidEmail) }
                        />
                        
                    </View>
                   
                                    
                    <TouchableOpacity onPress={() => { handleToggle(setDataCheckEmail); handleInput()}} style={styles.checkButton}>
                        <MaterialCommunityIcons name="pencil-outline" size={15} color={variables.textColor} />
                    </TouchableOpacity>
                </View>

                 <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.textTitle}>Phone:</Text>
                         {!checkValidPhone && <View style={styles.stailsNotCorect}>
                         {localState.phone === '' ? <Text style={styles.stailsNotCorectText}>You have not entered an phone</Text> :
                        <Text style={styles.stailsNotCorectText}>Enter the phone number in the format  "+38 (067) 22-222-22"</Text>}
                        </View>}
                            <TextInput
                                value={localState.phone}
                                editable={dataCheckPhone}
                                style={styles.input}
                                onFocus={() => setIsShowKeyboard((isShowKeyboard) => !isShowKeyboard)}
                                onChangeText={(value) => changeInputForProfiles(value, setLocalState, 'phone', validation.phone, setCheckValidPhone)  }
                            />
                    </View>
                                    
                    <TouchableOpacity onPress={() => { handleToggle(setDataCheckPhone);  handleInput()}} style={styles.checkButton}>
                        <MaterialCommunityIcons name="pencil-outline" size={15} color={variables.textColor} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', }}>
                   
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.textTitle}>Locations:
                            </Text>
                            <TextInput
                                value={localState.location}
                                editable={dataCheckLocation}
                                style={styles.input}
                                onFocus={() => setIsShowKeyboard((isShowKeyboard) => !isShowKeyboard)}
                                onChangeText={(value) =>  setLocalState((prevState) => ({ ...prevState, location: value }))}
                            />
                    </View>
                   
                                    
                    <TouchableOpacity onPress={() => { handleToggle(setDataCheckLocation);  handleInput()}} style={styles.checkButton}>
                        <MaterialCommunityIcons name="pencil-outline" size={15} color={variables.textColor} />
                    </TouchableOpacity>
                </View>

                 <View style={{ flexDirection: 'row', }}>
                        <View>
                            <Text style={styles.textTitle}>About me:
                            </Text>
                            <TextInput
                                value={localState.about}
                                editable={dataCheckAbout}
                                style={styles.aboutText}
                                onFocus={() => setIsShowKeyboard((isShowKeyboard) => !isShowKeyboard)}
                                onChangeText={(value) =>  setLocalState((prevState) => ({ ...prevState, about: value }))}
                            />
                    </View>
                                    
                    <TouchableOpacity onPress={() => { handleToggle(setDataCheckAbout); handleInput()}} style={styles.checkButton}>
                        <MaterialCommunityIcons name="pencil-outline" size={15} color={variables.textColor} />
                    </TouchableOpacity>
                </View>
              
            </View>
            <View>              
                   <ButtonLongBlue
                    title="add trip"
                    click={() => navigation.navigate("CreateTrip")}
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
          
        <GallertProfileComponents
            setGallery={setGallery}
            setAdd={setAdd}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            pickImage={pickImage}
            image={image}
            takeGallery={takeGallery}/>
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
            type={type} />
                    )}
                </>
      </Modal>
                </View>
      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    avatarContainer: {
        width: 120,
        height: 124,
        backgroundColor: "#E3E5E8",
        borderRadius: 65,
    },
    dataConteiner: {
        marginHorizontal: 25,
        marginBottom: 50,
    },
    textTitle: {
        marginTop: 19,
        color: variables.titleColor,
        ...fonts(14, "500")
    },
    text: {
       color: variables.textColor,
        ...fonts(12, "500") 
    },
   
    input: {
        marginTop: 14,
        marginLeft: 5,
        color: variables.textColor,
        ...fonts(12, "500") 
    },
    checkButton: {
        marginTop: 18,
        marginLeft: "auto"
    },
    aboutText: {
        width: 303,
        marginTop: 7,
      color: variables.textColor,
        ...fonts(12, "500")   
    },
    stailsNotCorect: {
    position: "absolute",
    top: 35,
    left: 10,
    zIndex: 1,
    padding: 3,  
  },
  stailsNotCorectText: {
    color: "red",
   ...fonts(10, "400") 
  },
});
