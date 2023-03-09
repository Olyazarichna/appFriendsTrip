import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useRoute from './helpers/useRoute';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from './redux/auth/authReducer';
import { RootSiblingParent } from 'react-native-root-siblings';
import { useState } from 'react';
import { auth } from './firebase/config';
import { useEffect } from 'react';
import { Loader } from './components/Loader/Loader';

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(
          updateUserProfile({
            name: user.displayName,
            email: user.email,
            phone: user.phoneNumber,
          })
        );
        const uid = user.uid;
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <NavigationContainer>{useRoute(isLoggedIn)}</NavigationContainer>
            </>
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}
