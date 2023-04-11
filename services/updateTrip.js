import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { tripsRef } from '../firebase/config';

export const updateTrip = async (trip) => {
    const tripDocRef = doc(tripsRef, trip.id);
    const tripDoc = await getDoc(tripDocRef);
    try {
        if (tripDoc.exists()) {
            await updateDoc(tripDocRef, {
                image: trip.image,
                city: trip.city,
                country: trip.country,
                date: trip.date,
                duration: trip.duration,
                tripDetails: trip.tripDetails,
                personDetails: trip.personDetails,
                minAge: trip.minAge,
                maxAge: trip.maxAge,
            })
        }
    } catch (error) {
        console.log('No such document exists!');
    }
}

