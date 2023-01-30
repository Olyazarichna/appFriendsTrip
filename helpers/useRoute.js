import { Text, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import {
  Ionicons,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import { ScreenSettings } from '../styles/utils/ScreenSettings';
import fonts from "../styles/utils/mixins";

// auth scrins
import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import Home from "../screens/auth/Home";

// Trips screens
import HomeTrips from "../screens/FriendTripsScreens/HomeTrips";
import CreateTripScreen from "../screens/FriendTripsScreens/CreateTripScreen";
import InboxScreen from "../screens/FriendTripsScreens/InboxScreen";
import FavoriteScreen from "../screens/FriendTripsScreens/FavoriteScreen";
import UsereProfilesScreen from "../screens/FriendTripsScreens/UserProfilesScreen";
import SettingScreen from "../screens/FriendTripsScreens/SettingScreen";

import variables from "../styles/utils/variables";

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
      barStyle={{
        backgroundColor: variables.lableButtonWhite,
        height: Platform.OS ? 65 : ScreenSettings.returnParams(55, 90),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTrips}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <>
              <Ionicons name="home" size={ScreenSettings.returnParams(18, 22)} color={color} />
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  ...fonts(ScreenSettings.returnParams(10, 15), "500"),
                  fontWeight: "500",
                  marginTop: 2,
                  color: color
                }}
              >
                Home
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="My trip"
        component={CreateTripScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <>
              <AntDesign name="plus" size={ScreenSettings.returnParams(18, 22)} color={color} />
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  ...fonts(ScreenSettings.returnParams(10, 15), "500"),
                  fontWeight: "500",
                  marginTop: 2,
                  color: color
                }}
              >
                My trip
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <>
              <FontAwesome name="inbox" size={ScreenSettings.returnParams(18, 22)} color={color} />
              <Text
                style={{
                 width: 50,
                  textAlign: "center",
                  ...fonts(ScreenSettings.returnParams(10, 15), "500"),
                  fontWeight: "500",
                  marginTop: 2,
                  color: color
                }}
              >
                Inbox
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <>
              <Ionicons name="heart" size={ScreenSettings.returnParams(18, 22)} color={color} />
              <Text
                style={{
                 width: 50,
                  textAlign: "center",
                  ...fonts(ScreenSettings.returnParams(10, 15), "500"),
                  fontWeight: "500",
                  marginTop: 2,
                  color: color
                }}
              >
                Favorite
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={UsereProfilesScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <>
              <MaterialCommunityIcons
                name="account-settings"
               size={ScreenSettings.returnParams(18, 22)}
                color={color}
              />
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  ...fonts(ScreenSettings.returnParams(10, 15), "500"),
                  fontWeight: "500",
                  marginTop: 2,
                  color: color
                }}
              >
                Account
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
        tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <>
              <FontAwesome5 name="cog" size={ScreenSettings.returnParams(18, 22)} color={color} />
              <Text
                style={{
                 width: 50,
                  textAlign: "center",
                  ...fonts(ScreenSettings.returnParams(10, 15), "500"),
                  fontWeight: "500",
                  marginTop: 2,
                  color: color
                }}
              >
                Setting
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default useRoute;
