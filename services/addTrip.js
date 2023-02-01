import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

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
        alert('Trip successfully added');
        console.log("docRef", docRef);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
