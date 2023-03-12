import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { RootSiblingParent } from 'react-native-root-siblings';

import useRoute from './helpers/useRoute';
import { updateUserProfile } from './redux/auth/authReducer';
import { auth, usersRef } from './firebase/config';
import { Loader } from './components/Loader/Loader';
import { doc, getDoc } from 'firebase/firestore';

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userDocRef = doc(usersRef, user.uid);
        const userDB = await getDoc(userDocRef);
        const userData = userDB.data();
        dispatch(updateUserProfile(userData));
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
