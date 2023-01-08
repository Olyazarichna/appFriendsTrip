// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider} from 'react-native-safe-area-context';


import useRoute from './helpers/useRoute';



export default function App() {

  const isAuth = false;

  return (
    // <View style={styles.container}>
    <Provider store={store}>
        <SafeAreaProvider>
        <NavigationContainer>
        {useRoute(isAuth)}
        </NavigationContainer>
        </SafeAreaProvider>
   </Provider> 
     /* <StatusBar style="auto" /> */
    /* //</View>  */
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
