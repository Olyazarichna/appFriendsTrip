import { createStackNavigator } from '@react-navigation/stack';

import UserProfilesDefaultScreen from './UserProfilesDefaultScreen';
import EditDataUserScreen from './EditDataUserScreen';
import CreateTripScreen from './CreateTripScreen';

const AuthStack = createStackNavigator();

export default function UserProfilesScreen() {
    return (
                <AuthStack.Navigator>
                     <AuthStack.Screen
                     options={{ headerShown: false }}
                     name="ProfilesDefault"
                     component={UserProfilesDefaultScreen}
                    />
                    <AuthStack.Screen
                    options={{ headerShown: false }}
                    name="EditData"
                    component={EditDataUserScreen}
                    />
                    <AuthStack.Screen
                    options={{ headerShown: false }}
                    name="CreateTrip"
                    component={CreateTripScreen}
                     />
                </AuthStack.Navigator>  
            
    )
};

