import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// auth screens
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import Home from '../screens/auth/Home';

// Trips screens
import UserProfilesScreen from '../screens/FriendTripsScreens/UserProfilesScreen';
import ListTripsScreen from '../screens/FriendTripsScreens/ListTripsScreen';
import CreateTripScreen from '../screens/FriendTripsScreens/CreateTripScreen';

const AuthStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <Tab.Navigator>
      <Tab.Screen name="List Trips" component={ListTripsScreen} />
      <Tab.Screen name="Profile" component={UserProfilesScreen} />
      <Tab.Screen name="Create Trip" component={CreateTripScreen} />
    </Tab.Navigator>
  );
};

export default useRoute;
