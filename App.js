import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import RegistrationScreen from './screens/auth/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen';
import Home from './screens/auth/Home';

const AuthStack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
      <NavigationContainer>
      <AuthStack.Navigator>
        
        <AuthStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <AuthStack.Screen options={{headerShown: false}} name="Registration" component={RegistrationScreen} />
          <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        
      </AuthStack.Navigator>
      </NavigationContainer>
    //   <StatusBar style="auto" />
    //</View> 
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
