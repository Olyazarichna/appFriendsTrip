import { Text, } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Ionicons,  AntDesign, FontAwesome, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

// auth scrins
import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import Home from "../screens/auth/Home";

// Trips screens
import HomeTrips from "../screens/FriendTripsScreens/HomeTrips";
import MyTripScreen from "../screens/FriendTripsScreens/MyTripScreen";
import InboxScreen from "../screens/FriendTripsScreens/InboxScreen";
import FavoriteScreen from "../screens/FriendTripsScreens/FavoriteScreen";
import UsereProfilesScreen from "../screens/FriendTripsScreens/UserProfilesScreen";
import SettingScreen from "../screens/FriendTripsScreens/SettingScreen";

import variables from '../styles/utils/variables';

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
    <Tab.Navigator
    activeColor={variables.lableButtonBlue}
    inactiveColor="black"
    activeBackgroundColor={variables.lableButtonWhite}
    barStyle={{ backgroundColor: variables.lableButtonWhite, height: 55 }}
    >
      <Tab.Screen name="Home" component={HomeTrips}
      options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
             <>
            <Ionicons name="home" size={18} color={color} />
            <Text style={{width: 50, textAlign: "center", fontSize: 10, fontWeight: "500", marginTop: 2}}>Home</Text>
          </>
          ),
        }}
      />
      <Tab.Screen name="My trip" component={MyTripScreen}
       options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
             <>
            <AntDesign name="plus" size={18} color={ color } />
            <Text style={{width: 50, textAlign: "center", fontSize: 10, fontWeight: "500", marginTop: 2}}>My trip</Text>
          </>
          ),
        }}
      />
      <Tab.Screen name="Inbox" component={InboxScreen}
      options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
             <>
            <FontAwesome name="inbox" size={18} color={ color } />
            <Text style={{width: 50, textAlign: "center", fontSize: 10, fontWeight: "500", marginTop: 2}}>Inbox</Text>
          </>
          ),
        }}
      />
      <Tab.Screen name="Favorite" component={FavoriteScreen}
       options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
             <>
            <Ionicons name="heart" size={18} color={ color } />
            <Text style={{width: 50, textAlign: "center", fontSize: 10, fontWeight: "500", marginTop: 2}}>Favorite</Text>
          </>
          ),
        }}
      />
      <Tab.Screen name="Account" component={UsereProfilesScreen}
       options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
             <>
            <MaterialCommunityIcons name="account-settings" size={20} color={ color } />
            <Text style={{width: 50, textAlign: "center", fontSize: 10, fontWeight: "500", marginTop: 2}}>Account</Text>
          </>
          ),
        }}
      />
      <Tab.Screen name="Setting" component={SettingScreen}
      options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
             <>
            <FontAwesome5 name="cog" size={18} color={ color } />
            <Text style={{width: 50, textAlign: "center", fontSize: 10, fontWeight: "500", marginTop: 2}}>Setting</Text>
          </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default useRoute;
