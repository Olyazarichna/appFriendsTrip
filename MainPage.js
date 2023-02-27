import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useRoute from "./helpers/useRoute";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from './redux/auth/authReducer';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function MainPage() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    console.log('isLoggedIn', isLoggedIn);
    const dispatch = useDispatch();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        console.log('auth', auth)
        if (user) {
            dispatch(updateUserProfile({ name: user.displayName, email: user.email, phone: user.phoneNumber }))
            console.log('user Current', auth.currentUser);
            console.log('DN', user.displayName);
            console.log('current', user.currentUser)
            const uid = user.uid;
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
