import { db } from '../firebase/config';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

export const addToFavorite = async (userId, tripId) => {
    try {
        const userDocRef = doc(db, 'users', userId);
        await updateDoc(userDocRef, {
            favoriteTrips: arrayUnion(tripId),
        });
        const userDoc = await getDoc(userDocRef);
        return userDoc.data().favoriteTrips;
    } catch (error) {
        console.log(error);
    }
};

export const removeFromFavorite = async (userId, tripId) => {
    try {
        const userDocRef = doc(db, 'users', userId);
        await updateDoc(userDocRef, {
            favoriteTrips: arrayRemove(tripId),
        });
    } catch (error) {
        console.log(error);
    }
};
