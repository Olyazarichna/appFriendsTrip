import { addDoc, doc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Toast from 'react-native-root-toast';

import { auth, tripsRef, usersRef } from '../firebase/config';

export const addTrip = async ({ trip }) => {
  console.log('trip', trip);
  onAuthStateChanged(auth, async user => {
    try {
      const docRef = await addDoc(tripsRef, {
        place: trip.place,
        date: trip.date,
        detailsAboutCompanion: trip.personDetails,
        detailsAboutTrip: trip.tripDetails,
        duration: trip.duration,
        image: trip.image,
        maxAge: 38,
        minAge: 28,
        owner: doc(usersRef, user.uid),
        createdAt: serverTimestamp(),
      });
      Toast.show('Trip successfully added');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  });
};
