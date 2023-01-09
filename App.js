// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useRoute from "./helpers/useRoute";
import { useState } from "react";

export default function App() {

  const [user, setUser] = useState(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    console.log("userApp", user);
    if (user) {
      setUser(user);
      const uid = user.uid;
    } else {
      // User is signed out
      // ...
    }
  });


  const isAuth = true;


  return (
    // <View style={styles.container}>
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>{useRoute(isAuth)}</NavigationContainer>
      </SafeAreaProvider>
    </Provider>
    /* <StatusBar style="auto" /> */
    /* //</View>  */
  );
}
