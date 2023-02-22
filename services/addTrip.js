import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Toast from 'react-native-root-toast';

export const addTrip = async ({ trip }) => {
    console.log("trip", trip);
    try {
        const docRef = await addDoc(collection(db, "trips"), {
            place: trip.place,
            date: trip.date,
            detailsAboutCompanion: trip.personDetails,
            detailsAboutTrip: trip.tripDetails,
            duration: trip.duration,
            image: trip.image,
            maxAge: 38,
            minAge: 28,
            owner: "fQIjCia5jHbyRdVql25pvUyrYt53",
        });
        Toast.show('Trip successfully added');
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
