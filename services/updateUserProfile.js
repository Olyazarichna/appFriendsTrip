import { updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { auth, usersRef } from '../firebase/config';

export const updateUserProfile = async ({
  name,
  email,
  phone,
  avatar,
  location,
  about,
}) => {
  const user = auth.currentUser;
  console.log('userPHONE:', user.phoneNumber);
  console.log('userUSER:', user);
  try {
    await updateProfile(user, {
      displayName: name || user.displayName,
      email: email || user.email,
      photoURL: avatar || user.photoURL,
      // Телефон оновлюється окремим методом. Потрібно розібратися.
      // phoneNumber: phone || user.phoneNumber,
    });
    console.log('user', user.uid);
  } catch (error) {
    console.log('DB Auth update Code: ', error.code);
    console.log('DB Auth updateMessage: ', error.message);
  }
  try {
    const userDocRef = doc(usersRef, user.uid);
    const userDB = await getDoc(userDocRef);
    const userData = userDB.data();
    const userUpdate = {
      name: name || userData.name,
      email: email || userData.email,
      phone: phone || userData.phone,
      location: location || userData.location,
      about: about || userData.about,
    };
    await setDoc(userDocRef, userUpdate, { merge: true });
    console.log('update', userUpdate);
  } catch (error) {
    console.log('DB user update Code: ', error.code);
    console.log('DB user updateMessage: ', error.message);
  }
};
