
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useRoute from "./helpers/useRoute";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from './redux/auth/authReducer';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function MainPage() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(updateUserProfile({ name: user.displayName, email: user.email, phone: user.phoneNumber }))
            // setUser(user);
            // const uid = user.uid;
        } else {

        }
    });
    return (
        <RootSiblingParent>
            <SafeAreaProvider>
                <NavigationContainer>{useRoute(isLoggedIn)}</NavigationContainer>
            </SafeAreaProvider>
        </RootSiblingParent>
    );
}
